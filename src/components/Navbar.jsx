import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf, Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const { getCartCount } = useCart();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/home" className="navbar-logo">
                    <Leaf size={28} className="logo-icon" /> FreshMart
                </Link>

                {/* Desktop Search */}
                <div className="navbar-search desktop-search">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search for fresh groceries..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit"><Search size={20} /></button>
                    </form>
                </div>

                <div className="navbar-links desktop-links">
                    <Link to="/home" className="nav-link">Home</Link>
                    <Link to="/products" className="nav-link">Products</Link>
                    <Link to="/farmers" className="nav-link">Fresh Farmers</Link>
                    <Link to="/orders" className="nav-link">Orders</Link>
                </div>

                <div className="navbar-actions">
                    <Link to="/cart" className="nav-action-btn cart-btn">
                        <ShoppingCart size={24} />
                        {getCartCount() > 0 && <span className="cart-badge">{getCartCount()}</span>}
                    </Link>
                    <Link to="/" className="nav-action-btn user-btn desktop-user">
                        <User size={24} />
                    </Link>

                    <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="navbar-search mobile-search">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search groceries..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit"><Search size={20} /></button>
                    </form>
                </div>
                <Link to="/home" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/products" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Products</Link>
                <Link to="/farmers" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Fresh Farmers</Link>
                <Link to="/orders" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Track Orders</Link>
                <Link to="/" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Profile / Logout</Link>
            </div>
        </nav>
    );
}

export default Navbar;
