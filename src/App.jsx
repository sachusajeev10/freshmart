import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ClientLogin from './pages/ClientLogin';
import FarmerLogin from './pages/FarmerLogin';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import FreshFarmers from './pages/FreshFarmers';
import FarmerDashboard from './pages/FarmerDashboard';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import OrderTracking from './pages/OrderTracking';
import { CartProvider } from './context/CartContext';
import './index.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          {/* Auth Routes */}
          <Route path="/" element={<ClientLogin />} />
          <Route path="/farmer-login" element={<FarmerLogin />} />

          {/* Main Platform Routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/farmers" element={<FreshFarmers />} />
          <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<OrderTracking />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
