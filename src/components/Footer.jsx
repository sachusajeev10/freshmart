import React from 'react';
import { Leaf, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col brand-col">
                        <Link to="/home" className="footer-logo">
                            <Leaf size={28} className="logo-icon" /> FreshMart
                        </Link>
                        <p className="footer-desc">
                            Simplifying grocery shopping by connecting you directly with local farmers and shops while reducing food waste.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link"><Facebook size={20} /></a>
                            <a href="#" className="social-link"><Twitter size={20} /></a>
                            <a href="#" className="social-link"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/products">Shop Groceries</Link></li>
                            <li><Link to="/farmer-login">Partner with Us</Link></li>
                            <li><Link to="/orders">Track Order</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="footer-col">
                        <h3 className="footer-heading">Categories</h3>
                        <ul className="footer-links">
                            <li><Link to="/products?category=vegetables">Fresh Vegetables</Link></li>
                            <li><Link to="/products?category=fruits">Fresh Fruits</Link></li>
                            <li><Link to="/products?category=dairy">Dairy & Eggs</Link></li>
                            <li><Link to="/products?category=discount">Near-Expiry Deals</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col contact-col">
                        <h3 className="footer-heading">Contact Us</h3>
                        <ul className="footer-contact">
                            <li>
                                <MapPin size={18} className="contact-icon" />
                                <span>123 Fresh Lane, Grocery City, GC 10010</span>
                            </li>
                            <li>
                                <Phone size={18} className="contact-icon" />
                                <span>+1 (800) 123-4567</span>
                            </li>
                            <li>
                                <Mail size={18} className="contact-icon" />
                                <span>support@freshmart.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} FreshMart. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
