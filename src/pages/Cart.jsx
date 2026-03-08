import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Trash2, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

function Cart() {
    const navigate = useNavigate();
    const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();

    const subtotal = getCartTotal();
    const deliveryFee = cartItems.length > 0 ? (subtotal > 300 ? 0 : 20) : 0;
    const platformFee = cartItems.length > 0 ? 5 : 0;
    const total = subtotal + deliveryFee + platformFee;

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        navigate('/checkout');
    };

    return (
        <div className="page-wrapper">
            <Navbar />

            <main className="main-content cart-layout">
                <div className="cart-container">

                    <div className="cart-main">
                        <h1 className="page-title">Shopping Cart ({getCartCount()} Items)</h1>

                        <div className="cart-items-list">
                            {cartItems.length === 0 ? (
                                <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
                                    <h3>Your cart is empty.</h3>
                                    <Link to="/products" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>Start Shopping</Link>
                                </div>
                            ) : (
                                cartItems.map(item => (
                                    <div key={item.id} className="cart-item">
                                        <img src={item.image} alt={item.name} className="cart-item-img" />

                                        <div className="cart-item-details">
                                            <h3>{item.name}</h3>
                                            <div className="cart-item-farmer">
                                                <ShieldCheck size={14} className="verified-icon" />
                                                <span>{item.farmer}</span>
                                            </div>
                                        </div>

                                        <div className="cart-item-qty">
                                            <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                        </div>

                                        <div className="cart-item-price">
                                            ₹{item.price * item.quantity}
                                        </div>

                                        <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        {cartItems.length > 0 && (
                            <div className="cart-delivery-promo">
                                <div className="promo-icon">🚚</div>
                                <div>
                                    <h4>Support Local Delivery</h4>
                                    <p>Your items are being consolidated from local farms to ensure maximum freshness while reducing carbon footprint.</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <aside className="cart-summary">
                        <h2 className="summary-title">Order Summary</h2>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹{subtotal}</span>
                        </div>
                        <div className="summary-row">
                            <span>Delivery Fee {deliveryFee === 0 && cartItems.length > 0 && <span style={{ color: '#2ECC71', fontSize: '0.8rem' }}>(Free)</span>}</span>
                            <span>₹{deliveryFee}</span>
                        </div>
                        <div className="summary-row">
                            <span>Platform Fee</span>
                            <span>₹{platformFee}</span>
                        </div>

                        <div className="summary-divider"></div>

                        <div className="summary-row total-row">
                            <span>Total Address</span>
                            <span>₹{total}</span>
                        </div>

                        <button onClick={handleCheckout} className="btn btn-primary checkout-btn" disabled={cartItems.length === 0}>
                            Proceed to Checkout <ArrowRight size={20} />
                        </button>

                        <Link to="/products" className="continue-shopping">
                            Continue Shopping
                        </Link>
                    </aside>

                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Cart;
