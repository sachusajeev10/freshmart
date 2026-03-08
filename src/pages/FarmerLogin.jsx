import React, { useState } from 'react';
import { Leaf, CheckCircle, User, Lock, Mail, Phone, ArrowRight, IdCard, ShoppingBag, MapPin, Truck, Store, Tags } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function FarmerLogin() {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    // State for product categories
    const [categories, setCategories] = useState({
        vegetables: false,
        fruits: false,
        dairy: false,
        grains: false,
        herbs: false
    });

    const handleCategoryChange = (e) => {
        setCategories({
            ...categories,
            [e.target.name]: e.target.checked
        });
    };

    return (
        <>
            <div className="background-wrapper">
                <div className="shape shape-1" style={{ background: '#FAD961' }}></div>
                <div className="shape shape-2" style={{ background: '#F76B1C' }}></div>
                <div className="shape shape-3" style={{ background: '#D4FC79' }}></div>
            </div>

            <div className="auth-page-wrapper">
                <div className="container" style={{ border: '1px solid rgba(247, 107, 28, 0.2)' }}>
                    <div className="brand-section" style={{ background: 'linear-gradient(135deg, rgba(247, 107, 28, 0.85) 0%, rgba(250, 217, 97, 0.95) 100%)' }}>
                        <div className="logo">
                            <Leaf size={32} /> FreshMart <span style={{ fontSize: '1rem', fontWeight: '500', marginLeft: '10px', background: 'rgba(255,255,255,0.2)', padding: '4px 10px', borderRadius: '20px' }}>Partners</span>
                        </div>
                        <h1>Grow With Us</h1>
                        <p>Connect directly with local buyers, sell your fresh produce faster, and eliminate food waste.</p>
                        <div className="features-list">
                            <span><Store size={20} /> Zero Commission on Direct Sales</span>
                            <span><MapPin size={20} /> Reach Local Neighborhoods</span>
                            <span><Truck size={20} /> Flexible Delivery Options</span>
                        </div>

                        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Want to buy groceries instead?</p>
                            <Link to="/" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: 'white',
                                textDecoration: 'none',
                                fontWeight: '600',
                                padding: '0.75rem 1.5rem',
                                background: 'rgba(255,255,255,0.15)',
                                borderRadius: '8px',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                            >
                                <ShoppingBag size={18} /> Go to Customer Login
                            </Link>
                        </div>
                    </div>

                    <div className="form-section" style={{ overflowY: 'auto', padding: '2rem 2.5rem' }}>
                        <div className="form-container">
                            <div className="form-toggle">
                                <button
                                    className={`toggle-btn ${isLogin ? 'active' : ''}`}
                                    onClick={() => setIsLogin(true)}
                                    style={isLogin ? { background: '#F76B1C', boxShadow: '0 4px 12px rgba(247, 107, 28, 0.3)' } : {}}
                                >
                                    Partner Login
                                </button>
                                <button
                                    className={`toggle-btn ${!isLogin ? 'active' : ''}`}
                                    onClick={() => setIsLogin(false)}
                                    style={!isLogin ? { background: '#F76B1C', boxShadow: '0 4px 12px rgba(247, 107, 28, 0.3)' } : {}}
                                >
                                    Register Shop/Farm
                                </button>
                            </div>

                            {/* Login Form */}
                            <form className={`auth-form ${isLogin ? 'active' : ''}`} onSubmit={(e) => { e.preventDefault(); navigate('/farmer-dashboard'); }}>
                                <h2>Seller Portal</h2>
                                <p className="subtitle">Manage your inventory and track your daily orders.</p>

                                <div className="input-group">
                                    <Store size={20} className="input-icon" />
                                    <input type="text" placeholder="Shop ID or Phone Number" required />
                                </div>

                                <div className="input-group">
                                    <Lock size={20} className="input-icon" />
                                    <input type="password" placeholder="Password" required />
                                </div>

                                <div className="form-options">
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="checkmark" style={isLogin ? { backgroundColor: '#F76B1C' } : {}}></span>
                                        Remember me
                                    </label>
                                    <a href="#" className="forgot-password" style={{ color: '#F76B1C' }}>Forgot Password?</a>
                                </div>

                                <button type="submit" className="submit-btn" style={{ background: '#F76B1C', boxShadow: '0 4px 15px rgba(247, 107, 28, 0.4)' }}>
                                    <span>Access Dashboard</span>
                                    <ArrowRight size={20} />
                                </button>
                            </form>

                            {/* Sign Up Form */}
                            <form className={`auth-form ${!isLogin ? 'active' : ''}`} onSubmit={(e) => { e.preventDefault(); navigate('/farmer-dashboard'); }}>
                                <h2>Partner Registration</h2>
                                <p className="subtitle" style={{ marginBottom: '1rem' }}>Start selling your harvest directly to your community.</p>

                                <div className="input-group">
                                    <Store size={20} className="input-icon" />
                                    <input type="text" placeholder="Farm / Shop Name" required />
                                </div>

                                <div className="input-group">
                                    <IdCard size={20} className="input-icon" />
                                    <input type="text" placeholder="Owner Full Name" required />
                                </div>

                                <div className="input-group">
                                    <Phone size={20} className="input-icon" />
                                    <input type="tel" placeholder="Mobile Number" required />
                                </div>

                                <div className="input-group">
                                    <MapPin size={20} className="input-icon" />
                                    <input type="text" placeholder="Shop Address / Location" required />
                                </div>

                                <div className="input-group" style={{ marginBottom: '1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.8rem', color: '#7f8c8d' }}>
                                        <Tags size={18} style={{ marginRight: '8px' }} />
                                        <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>Primary Product Categories</span>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', paddingLeft: '28px' }}>
                                        <label className="checkbox-container" style={{ fontSize: '0.9rem' }}>
                                            <input type="checkbox" name="vegetables" checked={categories.vegetables} onChange={handleCategoryChange} />
                                            <span className="checkmark" style={{ backgroundColor: categories.vegetables ? '#F76B1C' : '#e2e8f0', top: '0' }}></span>
                                            Fresh Vegetables
                                        </label>
                                        <label className="checkbox-container" style={{ fontSize: '0.9rem' }}>
                                            <input type="checkbox" name="fruits" checked={categories.fruits} onChange={handleCategoryChange} />
                                            <span className="checkmark" style={{ backgroundColor: categories.fruits ? '#F76B1C' : '#e2e8f0', top: '0' }}></span>
                                            Fresh Fruits
                                        </label>
                                        <label className="checkbox-container" style={{ fontSize: '0.9rem' }}>
                                            <input type="checkbox" name="dairy" checked={categories.dairy} onChange={handleCategoryChange} />
                                            <span className="checkmark" style={{ backgroundColor: categories.dairy ? '#F76B1C' : '#e2e8f0', top: '0' }}></span>
                                            Dairy Products
                                        </label>
                                        <label className="checkbox-container" style={{ fontSize: '0.9rem' }}>
                                            <input type="checkbox" name="grains" checked={categories.grains} onChange={handleCategoryChange} />
                                            <span className="checkmark" style={{ backgroundColor: categories.grains ? '#F76B1C' : '#e2e8f0', top: '0' }}></span>
                                            Grains & Pulses
                                        </label>
                                        <label className="checkbox-container" style={{ fontSize: '0.9rem' }}>
                                            <input type="checkbox" name="herbs" checked={categories.herbs} onChange={handleCategoryChange} />
                                            <span className="checkmark" style={{ backgroundColor: categories.herbs ? '#F76B1C' : '#e2e8f0', top: '0' }}></span>
                                            Herbs & Spices
                                        </label>
                                    </div>
                                </div>

                                <div className="input-group">
                                    <Lock size={20} className="input-icon" />
                                    <input type="password" placeholder="Create Password" required />
                                </div>

                                <button type="submit" className="submit-btn" style={{ background: '#F76B1C', boxShadow: '0 4px 15px rgba(247, 107, 28, 0.4)' }}>
                                    <span>Register Now</span>
                                    <ArrowRight size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FarmerLogin;
