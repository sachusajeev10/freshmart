import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Leaf, Award, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './FreshFarmers.css';

function FreshFarmers() {
    const { products } = useCart();
    // Filter only products marked as farmer direct
    const farmerProducts = products.filter(p => p.isFarmerDirect);

    return (
        <div className="page-wrapper">
            <Navbar />

            <main className="main-content farmers-layout">

                {/* Banner Section */}
                <div className="farmers-hero">
                    <div className="farmers-hero-content">
                        <span className="hero-badge"><Leaf size={16} /> Empowering Local Supply</span>
                        <h1>Fresh From Farmers</h1>
                        <p>Cut out the middleman. Buy the freshest produce directly from local farms around you, ensuring they get a fair price and you get the best quality.</p>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="farmers-benefits">
                    <div className="benefit-card">
                        <div className="benefit-icon"><Award size={28} /></div>
                        <h3>100% Quality Output</h3>
                        <p>Sourced same-day straight from the local fields to your doorstep.</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon"><MapPin size={28} /></div>
                        <h3>Hyper Local</h3>
                        <p>Help lower carbon footprint by shopping exclusively from farms near you.</p>
                    </div>
                </div>

                <div className="farmers-container">
                    <div className="products-header">
                        <div>
                            <h2 className="page-title">Direct from Farms</h2>
                            <p className="results-count">{farmerProducts.length} local products available today</p>
                        </div>
                    </div>

                    <div className="products-grid">
                        {farmerProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {farmerProducts.length === 0 && (
                        <div className="no-results">
                            <h3>No farmer products currently available.</h3>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default FreshFarmers;
