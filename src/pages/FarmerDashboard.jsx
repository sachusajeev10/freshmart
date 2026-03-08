import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PackageOpen, Plus, Activity } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './FarmerDashboard.css';

function FarmerDashboard() {
    const { addProduct } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: 'Vegetables',
        weight: '1 kg',
        image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500', // Default image
        farmer: 'Your Farm Name', // In a real app, this comes from auth
        farmLocation: 'Your Location',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            ...formData,
            price: parseFloat(formData.price),
            originalPrice: null, // no discount on newly uploaded item
            rating: 5.0, // newly uploaded
            isNearExpiry: false,
            isFarmerDirect: true, // uploaded by farmer directly
        };

        addProduct(newProduct);
        alert('Product successfully uploaded to marketplace!');
        navigate('/products');
    };

    return (
        <div className="page-wrapper">
            <Navbar />

            <main className="main-content dashboard-layout">
                <div className="dashboard-container">

                    <div className="dashboard-header">
                        <h1>Farmer Dashboard</h1>
                        <p>Welcome! Now you're a Partner. Let's list your first fresh product to start selling!</p>
                    </div>

                    <div className="dashboard-stats">
                        <div className="stat-card">
                            <div className="stat-icon"><Activity size={24} color="#f59e0b" /></div>
                            <div>
                                <p className="stat-title">Total Sales This Week</p>
                                <h3 className="stat-value">₹4,250</h3>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon"><PackageOpen size={24} color="#3b82f6" /></div>
                            <div>
                                <p className="stat-title">Active Inventory</p>
                                <h3 className="stat-value">8 Items</h3>
                            </div>
                        </div>
                    </div>

                    <div className="upload-section">
                        <div className="upload-header">
                            <h2><Plus size={24} /> Add New Product</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="upload-form">
                            <div className="form-row">
                                <div className="input-block">
                                    <label>Product Name</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="e.g. Fresh Organic Carrots" />
                                </div>
                                <div className="input-block">
                                    <label>Selling Price (₹)</label>
                                    <input type="number" name="price" value={formData.price} onChange={handleChange} required min="1" placeholder="e.g. 45" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="input-block">
                                    <label>Category</label>
                                    <select name="category" value={formData.category} onChange={handleChange}>
                                        <option value="Vegetables">Vegetables</option>
                                        <option value="Fruits">Fruits</option>
                                        <option value="Dairy">Dairy</option>
                                        <option value="Grains">Grains</option>
                                        <option value="Organic Products">Organic Products</option>
                                    </select>
                                </div>
                                <div className="input-block">
                                    <label>Weight / Quantity Label</label>
                                    <input type="text" name="weight" value={formData.weight} onChange={handleChange} required placeholder="e.g. 1 kg, 1 Dozen, 500g" />
                                </div>
                            </div>

                            <div className="input-block">
                                <label>Product Image URL</label>
                                <input type="url" name="image" value={formData.image} onChange={handleChange} required placeholder="https://link-to-your-image.com/image.jpg" />
                                <p className="input-hint">For best results, use a square, well-lit photo of your product.</p>
                            </div>

                            {/* These would normally come from the user's logged in profile */}
                            <div className="form-row">
                                <div className="input-block">
                                    <label>Farm/Shop Name (Public)</label>
                                    <input type="text" name="farmer" value={formData.farmer} onChange={handleChange} required />
                                </div>
                                <div className="input-block">
                                    <label>Location (Public)</label>
                                    <input type="text" name="farmLocation" value={formData.farmLocation} onChange={handleChange} required />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary submit-product-btn">Upload to Storefront</button>
                        </form>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}

export default FarmerDashboard;
