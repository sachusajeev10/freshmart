import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Filter, SlidersHorizontal, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Products.css';

function Products() {
    const { products: allProducts } = useCart();
    const [filteredProducts, setFilteredProducts] = useState(allProducts);
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const location = useLocation();

    useEffect(() => {
        // Check if there is a category or search query in the URL
        const queryParams = new URLSearchParams(location.search);
        const categoryParam = queryParams.get('category');
        const searchParam = queryParams.get('search');

        let filtered = allProducts;

        if (categoryParam) {
            if (categoryParam === 'discount') {
                filtered = filtered.filter(p => p.isNearExpiry || (p.originalPrice && p.price < p.originalPrice));
                setActiveCategory('Discount Deals');
            } else {
                filtered = filtered.filter(p => p.category.toLowerCase() === categoryParam.toLowerCase());
                setActiveCategory(categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1));
            }
        }

        if (searchParam) {
            setSearchQuery(searchParam);
            filtered = filtered.filter(p => p.name.toLowerCase().includes(searchParam.toLowerCase()) || p.category.toLowerCase().includes(searchParam.toLowerCase()));
        }

        setFilteredProducts(filtered);
        window.scrollTo(0, 0);
    }, [location.search, allProducts]);

    const handleManualSearch = (e) => {
        setSearchQuery(e.target.value);
        const filtered = allProducts.filter(p =>
            (activeCategory === 'All' || activeCategory === 'Discount Deals'
                ? true
                : p.category.toLowerCase() === activeCategory.toLowerCase()) &&
            (p.name.toLowerCase().includes(e.target.value.toLowerCase()) || p.category.toLowerCase().includes(e.target.value.toLowerCase()))
        );
        setFilteredProducts(filtered);
    };

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setSearchQuery('');
        if (category === 'All') {
            setFilteredProducts(allProducts);
        } else if (category === 'Discount Deals') {
            setFilteredProducts(allProducts.filter(p => p.isNearExpiry || (p.originalPrice && p.price < p.originalPrice)));
        } else {
            setFilteredProducts(allProducts.filter(p => p.category === category));
        }
    };

    const categories = ['All', 'Vegetables', 'Fruits', 'Dairy', 'Grains', 'Organic Products', 'Discount Deals'];

    return (
        <div className="page-wrapper">
            <Navbar />

            <main className="main-content products-layout">
                <div className="products-container">

                    {/* Sidebar Filters */}
                    <aside className="products-sidebar">
                        <div className="sidebar-widget">
                            <h3 className="widget-title"><Filter size={18} /> Categories</h3>
                            <ul className="category-list">
                                {categories.map(cat => (
                                    <li key={cat}>
                                        <button
                                            className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                                            onClick={() => handleCategoryClick(cat)}
                                        >
                                            {cat}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="sidebar-widget">
                            <h3 className="widget-title"><SlidersHorizontal size={18} /> Price Range</h3>
                            <div className="price-filter">
                                <input type="range" min="0" max="500" className="price-slider" />
                                <div className="price-labels">
                                    <span>₹0</span>
                                    <span>₹500+</span>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-promo">
                            <h4>Fight Food Waste</h4>
                            <p>Buy "Near Expiry" items to save money and the planet!</p>
                            <button onClick={() => handleCategoryClick('Discount Deals')} className="promo-btn">View Deals</button>
                        </div>
                    </aside>

                    {/* Main Product Grid */}
                    <section className="products-main">
                        <div className="products-header">
                            <div>
                                <h1 className="page-title">{activeCategory} Products</h1>
                                <p className="results-count">Showing {filteredProducts.length} results</p>
                            </div>

                            <div className="products-search-bar">
                                <Search size={20} className="search-icon" />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={handleManualSearch}
                                />
                            </div>
                        </div>

                        {filteredProducts.length > 0 ? (
                            <div className="products-grid">
                                {filteredProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="no-results">
                                <div className="no-results-icon">🥬</div>
                                <h3>No products found</h3>
                                <p>We couldn't find any items matching your search criteria.</p>
                                <button onClick={() => handleCategoryClick('All')} className="btn btn-primary">Clear Filters</button>
                            </div>
                        )}
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Products;
