import React from 'react';
import { ShoppingCart, Heart, ShieldCheck, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

function ProductCard({ product }) {
    const { id, name, price, originalPrice, image, farmer, category, weight, rating, isNearExpiry, expDays } = product;
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

    const handleAddToCart = (e) => {
        e.stopPropagation(); // prevent card click mapping
        addToCart(product, 1);
        alert(`${name} added to cart!`);
    };

    const handleCardClick = () => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="product-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <div className="product-image-container">
                <img src={image} alt={name} className="product-image" />

                {/* Badges */}
                <div className="product-badges">
                    {isNearExpiry && (
                        <span className="badge badge-warning">
                            <Clock size={12} /> {expDays} Days Left
                        </span>
                    )}
                    {discount > 0 && (
                        <span className="badge badge-discount">-{discount}%</span>
                    )}
                </div>

                <button className="wishlist-btn" onClick={(e) => e.stopPropagation()}>
                    <Heart size={18} />
                </button>
            </div>

            <div className="product-info">
                <div className="product-meta">
                    <span className="product-category">{category}</span>
                    <span className="product-weight">{weight}</span>
                </div>

                <h3 className="product-title">{name}</h3>

                <div className="product-farmer">
                    <ShieldCheck size={14} className="verified-icon" />
                    <span>{farmer}</span>
                </div>

                <div className="product-rating">
                    <span className="stars">★★★★★</span>
                    <span className="rating-value">{rating}</span>
                </div>

                <div className="product-bottom">
                    <div className="product-price-container">
                        <span className="product-price">₹{price}</span>
                        {originalPrice && <span className="product-original-price">₹{originalPrice}</span>}
                    </div>

                    <button className="add-cart-btn" onClick={handleAddToCart} title="Add to Cart">
                        <ShoppingCart size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
