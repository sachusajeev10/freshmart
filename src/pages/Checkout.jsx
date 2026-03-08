import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { useNavigate, Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, MapPin, Truck } from 'lucide-react';
import './Checkout.css';

function Checkout() {
    const { cartItems, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        address: '',
        city: '',
        zip: ''
    });

    const subtotal = getCartTotal();
    const deliveryFee = cartItems.length > 0 ? (subtotal > 300 ? 0 : 20) : 0;
    const platformFee = cartItems.length > 0 ? 5 : 0;
    const total = subtotal + deliveryFee + platformFee;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        if (cartItems.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        // In a real app, send order data to backend here.
        alert("Order Placed Successfully via Cash on Delivery!");
        clearCart();
        navigate('/orders');
    };

    if (cartItems.length === 0) {
        return (
            <div className="page-wrapper">
                <Navbar />
                <main className="main-content" style={{ textAlign: 'center', padding: '5rem 2rem' }}>
                    <h2>Your cart is empty</h2>
                    <Link to="/products" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>Start Shopping</Link>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="page-wrapper">
            <Navbar />

            <main className="main-content checkout-layout">
                <div className="checkout-container">

                    <div className="checkout-main">
                        <h1 className="page-title">Secure Checkout</h1>

                        <div className="checkout-section">
                            <h2 className="section-title"><MapPin size={20} /> Shipping Address</h2>
                            <form id="checkout-form" onSubmit={handlePlaceOrder} className="checkout-form">
                                <div className="form-row">
                                    <div className="input-block">
                                        <label>Full Name</label>
                                        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                                    </div>
                                    <div className="input-block">
                                        <label>Phone Number</label>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                                    </div>
                                </div>

                                <div className="input-block">
                                    <label>Full Delivery Address</label>
                                    <input type="text" name="address" value={formData.address} onChange={handleChange} required placeholder="123 Street Name, Apartment/Suite" />
                                </div>

                                <div className="form-row">
                                    <div className="input-block">
                                        <label>City / Neighborhood</label>
                                        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                                    </div>
                                    <div className="input-block">
                                        <label>ZIP / Pincode</label>
                                        <input type="text" name="zip" value={formData.zip} onChange={handleChange} required />
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="checkout-section">
                            <h2 className="section-title"><CheckCircle2 size={20} /> Payment Method</h2>
                            <div className="payment-method selected">
                                <div className="radio-circle"></div>
                                <div>
                                    <h4>Cash on Delivery (COD)</h4>
                                    <p>Pay with cash upon delivery of your fresh groceries.</p>
                                </div>
                            </div>
                        </div>

                        <div className="guarantee-box">
                            <ShieldCheck size={32} color="#2ECC71" />
                            <div>
                                <h4>Freshness Guarantee</h4>
                                <p>You only pay for what meets our strict quality standards.</p>
                            </div>
                        </div>
                    </div>

                    <aside className="checkout-summary">
                        <h2 className="summary-title">Order Summary ({cartItems.length} items)</h2>

                        <div className="mini-cart-items">
                            {cartItems.map(item => (
                                <div key={item.id} className="mini-cart-item">
                                    <div className="mini-item-info">
                                        <span className="mini-item-qty">{item.quantity}x</span>
                                        <span className="mini-item-name">{item.name}</span>
                                    </div>
                                    <span className="mini-item-price">₹{item.price * item.quantity}</span>
                                </div>
                            ))}
                        </div>

                        <div className="summary-divider"></div>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹{subtotal}</span>
                        </div>
                        <div className="summary-row">
                            <span>Delivery Fee</span>
                            <span>₹{deliveryFee}</span>
                        </div>
                        <div className="summary-row">
                            <span>Platform Fee</span>
                            <span>₹{platformFee}</span>
                        </div>

                        <div className="summary-divider"></div>

                        <div className="summary-row total-row">
                            <span>Total</span>
                            <span>₹{total}</span>
                        </div>

                        <button type="submit" form="checkout-form" className="btn btn-primary place-order-btn">
                            Place Order - Pay on Delivery
                        </button>
                        <p className="terms-text">By placing your order, you agree to our Terms of Service and Privacy Policy.</p>
                    </aside>

                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Checkout;
