import React, { useState } from 'react';
import { Leaf, CheckCircle, User, Lock, Mail, Phone, ArrowRight, IdCard, Store } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function ClientLogin() {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home');
    };

    return (
        <>
            <div className="background-wrapper">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>

            <div className="auth-page-wrapper">
                <div className="container">
                    <div className="brand-section">
                        <div className="logo">
                            <Leaf size={32} /> FreshMart
                        </div>
                        <h1>Smart Grocery Shopping</h1>
                        <p>Experience freshness, local farmer support, and smart pantry management all in one place.</p>
                        <div className="features-list">
                            <span><CheckCircle size={20} /> Farm Fresh Quality</span>
                            <span><CheckCircle size={20} /> Zero Food Waste</span>
                            <span><CheckCircle size={20} /> Smart Pantry Reminders</span>
                        </div>

                        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Are you a local farmer or shop owner?</p>
                            <Link to="/farmer-login" style={{
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
                                <Store size={18} /> Sell with FreshMart
                            </Link>
                        </div>
                    </div>

                    <div className="form-section">
                        <div className="form-container">
                            <div className="form-toggle">
                                <button
                                    className={`toggle-btn ${isLogin ? 'active' : ''}`}
                                    onClick={() => setIsLogin(true)}
                                >
                                    Login
                                </button>
                                <button
                                    className={`toggle-btn ${!isLogin ? 'active' : ''}`}
                                    onClick={() => setIsLogin(false)}
                                >
                                    Sign Up
                                </button>
                            </div>

                            {/* Login Form */}
                            <form className={`auth-form ${isLogin ? 'active' : ''}`} onSubmit={handleSubmit}>
                                <h2>Welcome Back</h2>
                                <p className="subtitle">Enter your details to access your smart pantry.</p>

                                <div className="input-group">
                                    <User size={20} className="input-icon" />
                                    <input type="text" placeholder="Email or Phone Number" required />
                                </div>

                                <div className="input-group">
                                    <Lock size={20} className="input-icon" />
                                    <input type="password" placeholder="Password" required />
                                </div>

                                <div className="form-options">
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                        Remember me
                                    </label>
                                    <a href="#" className="forgot-password">Forgot Password?</a>
                                </div>

                                <button type="submit" className="submit-btn">
                                    <span>Login</span>
                                    <ArrowRight size={20} />
                                </button>
                            </form>

                            {/* Sign Up Form */}
                            <form className={`auth-form ${!isLogin ? 'active' : ''}`} onSubmit={handleSubmit}>
                                <h2>Create Account</h2>
                                <p className="subtitle">Join us to support local farmers and track your pantry.</p>

                                <div className="input-group">
                                    <IdCard size={20} className="input-icon" />
                                    <input type="text" placeholder="Full Name" required />
                                </div>

                                <div className="input-group">
                                    <Mail size={20} className="input-icon" />
                                    <input type="email" placeholder="Email Address" required />
                                </div>

                                <div className="input-group">
                                    <Phone size={20} className="input-icon" />
                                    <input type="tel" placeholder="Phone Number" required />
                                </div>

                                <div className="input-group">
                                    <Lock size={20} className="input-icon" />
                                    <input type="password" placeholder="Password" required />
                                </div>

                                <button type="submit" className="submit-btn">
                                    <span>Create Account</span>
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

export default ClientLogin;
