import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ShieldCheck, MapPin, Truck, Heart, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import './ProductDetails.css';

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { products, addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="page-wrapper">
                <Navbar />
                <div className="not-found">
                    <h2>Product Not Found</h2>
                    <button onClick={() => navigate('/products')} className="btn btn-primary">Back to Shop</button>
                </div>
                <Footer />
            </div>
        );
    }

    const { name, price, originalPrice, image, farmer, farmLocation, category, weight, rating, isNearExpiry, expDays } = product;

    const handleAddToCart = () => {
        addToCart(product, quantity);
        alert(`${quantity}x ${name} added to cart!`);
    };

    return (
        <div className="page-wrapper">
            <Navbar />

            <main className="main-content detail-layout">
                <div className="detail-container">

                    <button className="back-btn" onClick={() => navigate(-1)}>
                        <ArrowLeft size={20} /> Back
                    </button>

                    <div className="product-detail-grid">
                        {/* Image Gallery */}
                        <div className="product-detail-image">
                            <img src={image} alt={name} />
                            {isNearExpiry && (
                                <div className="detail-badge-warning">
                                    Expiring in {expDays} Days
                                </div>
                            )}
                        </div>

                        {/* Product Meta Data */}
                        <div className="product-detail-info">
                            <div className="detail-meta">
                                <span className="category-tag">{category}</span>
                                <span className="weight-tag">{weight}</span>
                            </div>

                            <h1 className="detail-title">{name}</h1>

                            <div className="detail-rating">
                                <span className="stars">★★★★★</span>
                                <span className="rating-value">{rating} Rating</span>
                            </div>

                            <div className="detail-price-box">
                                <span className="detail-price">₹{price}</span>
                                {originalPrice && <span className="detail-original-price">₹{originalPrice}</span>}
                            </div>

                            <p className="detail-description">
                                Freshly sourced {category.toLowerCase()} delivered directly to your door. Our products go through strict quality checks to ensure maximum freshness and taste. Perfect for your daily cooking and healthy living.
                            </p>

                            <div className="farmer-card-mini">
                                <div className="farmer-card-icon">
                                    <ShieldCheck size={24} className="verified" />
                                </div>
                                <div>
                                    <h4>{farmer}</h4>
                                    <p><MapPin size={14} /> {farmLocation}</p>
                                </div>
                            </div>

                            <div className="purchase-actions">
                                <div className="quantity-selector">
                                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                                    <span>{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                                </div>

                                <button className="btn btn-primary add-to-cart-large" onClick={handleAddToCart}>
                                    <ShoppingCart size={20} /> Add to Cart
                                </button>

                                <button className="btn-icon">
                                    <Heart size={24} />
                                </button>
                            </div>

                            <div className="delivery-info">
                                <div className="delivery-row">
                                    <Truck size={20} color="#2ECC71" />
                                    <span><strong>Free Delivery</strong> on orders over ₹300</span>
                                </div>
                                <div className="delivery-row">
                                    <ShieldCheck size={20} color="#2ECC71" />
                                    <span><strong>Quality Guarantee:</strong> Fresh or your money back</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default ProductDetails;
