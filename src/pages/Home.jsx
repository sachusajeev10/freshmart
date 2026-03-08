import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Leaf, ShieldCheck, Tag, Heart, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    const categories = [
        { id: 1, name: 'Fresh Vegetables', icon: '🥬', color: '#abebc6' },
        { id: 2, name: 'Juicy Fruits', icon: '🍎', color: '#fadbd8' },
        { id: 3, name: 'Dairy & Eggs', icon: '🥛', color: '#d6eaf8' },
        { id: 4, name: 'Grains & Pulses', icon: '🌾', color: '#fcf3cf' },
        { id: 5, name: 'Herbs & Spices', icon: '🌿', color: '#d1f2eb' },
        { id: 6, name: 'Discounted (Near Expiry)', icon: '🏷️', color: '#fdebd0' },
    ];

    const featuredFarmers = [
        { id: 1, name: 'Green Valley Farms', location: '12 Miles Away', rating: 4.8, image: 'https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80&w=400&h=300' },
        { id: 2, name: 'Sunshine Organics', location: '5 Miles Away', rating: 4.9, image: 'https://images.unsplash.com/photo-1500937386664-56d1dfefcb19?auto=format&fit=crop&q=80&w=400&h=300' },
        { id: 3, name: 'Local Roots Shop', location: '2 Miles Away', rating: 4.7, image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400&h=300' }
    ];

    return (
        <div className="page-wrapper">
            <Navbar />

            <main className="main-content">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-content">
                        <span className="hero-badge"><Leaf size={16} /> Farm to Table</span>
                        <h1 className="hero-title">Fresh Groceries,<br />Delivered to You.</h1>
                        <p className="hero-subtitle">
                            Support local farmers, enjoy farm-fresh quality, and reduce food waste with smart pantry tracking.
                        </p>
                        <div className="hero-actions">
                            <Link to="/products" className="btn btn-primary">
                                Shop Now <ArrowRight size={20} />
                            </Link>
                            <Link to="/products?category=discount" className="btn btn-secondary">
                                View Deals <Tag size={20} />
                            </Link>
                        </div>

                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-value">500+</span>
                                <span className="stat-label">Local Farmers</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">10k+</span>
                                <span className="stat-label">Fresh Products</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">2k+</span>
                                <span className="stat-label">Happy Users</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image-container">
                        <div className="hero-blob"></div>
                        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Fresh Groceries" className="hero-image" />

                        {/* Floating Cards for aesthetic */}
                        <div className="floating-card card-1">
                            <ShieldCheck size={24} color="#2ECC71" />
                            <div>
                                <strong>Quality Verified</strong>
                                <span>Packed with photo proof</span>
                            </div>
                        </div>
                        <div className="floating-card card-2">
                            <Leaf size={24} color="#f59e0b" />
                            <div>
                                <strong>Zero Waste</strong>
                                <span>Save near-expiry food</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories Section */}
                <section className="section categories-section">
                    <div className="section-header">
                        <h2 className="section-title">Shop by Category</h2>
                        <Link to="/products" className="view-all-link">View All <ArrowRight size={16} /></Link>
                    </div>

                    <div className="categories-grid">
                        {categories.map(category => (
                            <Link to={`/products?category=${category.name.toLowerCase()}`} key={category.id} className="category-card" style={{ '--hover-color': category.color }}>
                                <div className="category-icon" style={{ backgroundColor: category.color }}>
                                    {category.icon}
                                </div>
                                <h3 className="category-name">{category.name}</h3>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Featured Farmers / Local Shops */}
                <section className="section farmers-section">
                    <div className="section-header">
                        <h2 className="section-title">Support Local Partners</h2>
                        <p className="section-subtitle">Buy directly from farmers and shops in your area.</p>
                    </div>

                    <div className="farmers-grid">
                        {featuredFarmers.map(farmer => (
                            <div key={farmer.id} className="farmer-card">
                                <div className="farmer-image">
                                    <img src={farmer.image} alt={farmer.name} />
                                    <span className="farmer-distance">{farmer.location}</span>
                                </div>
                                <div className="farmer-info">
                                    <h3 className="farmer-name">{farmer.name}</h3>
                                    <div className="farmer-rating">
                                        <span className="stars">★★★★★</span>
                                        <span className="rating-value">{farmer.rating}</span>
                                    </div>
                                    <Link to={`/products?farmer=${farmer.id}`} className="visit-store-btn">Visit Store</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Smart Pantry Promo */}
                <section className="pantry-promo">
                    <div className="pantry-promo-content">
                        <h2>Never Run Out of Essentials</h2>
                        <p>Our Smart Pantry Reminder tracks what you have at home and alerts you before you run out. Stop buying duplicates and save money.</p>
                        <ul className="promo-features">
                            <li><CheckCircle size={20} color="#2ECC71" /> Auto-add recipe ingredients to cart</li>
                            <li><CheckCircle size={20} color="#2ECC71" /> Set low-stock thresholds</li>
                            <li><CheckCircle size={20} color="#2ECC71" /> Track expiration dates</li>
                        </ul>
                        <button className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                            Setup Pantry Tracker
                        </button>
                    </div>
                    <div className="pantry-promo-image">
                        <div className="mockup-card">
                            <div className="mockup-header">Your Pantry 🥦</div>
                            <div className="mockup-item warning">
                                <span>Milk (2%)</span>
                                <span>Low: 10% left</span>
                            </div>
                            <div className="mockup-item">
                                <span>Eggs (Dozen)</span>
                                <span>Good: 8 left</span>
                            </div>
                            <div className="mockup-item warning">
                                <span>Tomatoes</span>
                                <span>Expiring soon (2 days)</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Home;
