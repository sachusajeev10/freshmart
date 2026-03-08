import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Package, Truck, CheckCircle2, Navigation, MapPin, Phone } from 'lucide-react';
import './OrderTracking.css';

function OrderTracking() {
    return (
        <div className="page-wrapper">
            <Navbar />

            <main className="main-content order-layout">
                <div className="order-container">

                    <div className="order-header">
                        <div>
                            <h1 className="page-title">Order #FRSM-8924</h1>
                            <p className="order-date">Placed on March 5, 2026 at 10:45 AM</p>
                        </div>
                        <div className="order-status-badge">
                            Out for Delivery
                        </div>
                    </div>

                    <div className="tracking-card">
                        <h2 className="tracking-title">Tracking Status</h2>

                        <div className="timeline-container">
                            {/* Step 1 : Confirmed */}
                            <div className="timeline-step completed">
                                <div className="step-icon">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div className="step-content">
                                    <h3>Order Confirmed</h3>
                                    <p>10:45 AM - Your order has been received by the local farmers.</p>
                                </div>
                            </div>

                            {/* Step 2 : Packed */}
                            <div className="timeline-step completed">
                                <div className="step-icon">
                                    <Package size={24} />
                                </div>
                                <div className="step-content">
                                    <h3>Packed & Quality Checked</h3>
                                    <p>11:30 AM - Vegetables passed the Freshness Verification scan.</p>
                                    <div className="verification-photo">
                                        <img src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=150&q=80" alt="Quality Check" />
                                        <span className="photo-label">Verified Fresh ✔️</span>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 : Out for Delivery */}
                            <div className="timeline-step active">
                                <div className="step-icon pulse">
                                    <Truck size={24} />
                                </div>
                                <div className="step-content">
                                    <h3>Out for Delivery</h3>
                                    <p>12:15 PM - Driver picked up your insulated bag. Arriving soon.</p>
                                </div>
                            </div>

                            {/* Step 4 : Delivered */}
                            <div className="timeline-step pending">
                                <div className="step-icon">
                                    <MapPin size={24} />
                                </div>
                                <div className="step-content">
                                    <h3>Delivered</h3>
                                    <p>Estimated arrival by 1:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="driver-card">
                        <div className="driver-info">
                            <div className="driver-avatar">
                                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80" alt="Driver" />
                            </div>
                            <div>
                                <h3>Rahul S.</h3>
                                <p>Delivery Partner • 4.9 ★</p>
                            </div>
                        </div>
                        <div className="driver-actions">
                            <button className="action-btn call-btn">
                                <Phone size={20} /> Call
                            </button>
                            <button className="action-btn track-btn">
                                <Navigation size={20} /> Live Map
                            </button>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}

export default OrderTracking;
