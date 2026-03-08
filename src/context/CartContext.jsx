import React, { createContext, useState, useContext } from 'react';

// Shared global mock products to allow Farmer Dashboard to add products
const INITIAL_PRODUCTS = [
    { id: 1, name: 'Fresh Organic Tomatoes', price: 45, originalPrice: 60, image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=80', farmer: 'Green Valley Farms', farmLocation: '12 Miles Away', category: 'Vegetables', weight: '1 kg', rating: 4.8, isNearExpiry: false, isFarmerDirect: true },
    { id: 2, name: 'Farm Fresh Eggs', price: 80, originalPrice: null, image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=500&q=80', farmer: 'Sunshine Organics', farmLocation: '5 Miles Away', category: 'Dairy', weight: '1 Dozen', rating: 4.9, isNearExpiry: false, isFarmerDirect: true },
    { id: 3, name: 'Ripe Bananas (Discounted)', price: 30, originalPrice: 60, image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=500&q=80', farmer: 'Local Roots Shop', farmLocation: '2 Miles Away', category: 'Fruits', weight: '1 kg', rating: 4.5, isNearExpiry: true, expDays: 2, isFarmerDirect: false },
    { id: 4, name: 'Organic Spinach', price: 25, originalPrice: 35, image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=500&q=80', farmer: 'Green Valley Farms', farmLocation: '12 Miles Away', category: 'Vegetables', weight: '250 g', rating: 4.7, isNearExpiry: false, isFarmerDirect: true },
    { id: 5, name: 'Whole Wheat Bread', price: 40, originalPrice: null, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80', farmer: 'City Bakery', farmLocation: 'City Center', category: 'Grains', weight: '1 Loaf', rating: 4.6, isNearExpiry: true, expDays: 3, isFarmerDirect: false },
    { id: 6, name: 'Fresh Strawberries', price: 120, originalPrice: 150, image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=500&q=80', farmer: 'Berry Good Farm', farmLocation: '20 Miles Away', category: 'Organic Products', weight: '500 g', rating: 4.9, isNearExpiry: false, isFarmerDirect: true },
    { id: 7, name: 'Cow Milk (Unpasteurized)', price: 65, originalPrice: null, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=500&q=80', farmer: 'Happy Cow Dairy', farmLocation: '8 Miles Away', category: 'Dairy', weight: '1 L', rating: 4.8, isNearExpiry: false, isFarmerDirect: true },
    { id: 8, name: 'Red Onions', price: 35, originalPrice: 50, image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=500&q=80', farmer: 'Local Roots Shop', farmLocation: '2 Miles Away', category: 'Vegetables', weight: '1 kg', rating: 4.5, isNearExpiry: false, isFarmerDirect: false },
];

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState(INITIAL_PRODUCTS);

    // Cart Functions
    const addToCart = (product, quantity = 1) => {
        setCartItems(prevItems => {
            const existing = prevItems.find(item => item.id === product.id);
            if (existing) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
            return [...prevItems, { ...product, quantity }];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(prevItems =>
            prevItems.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item)
        );
    };

    const clearCart = () => setCartItems([]);

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getCartCount = () => {
        return cartItems.reduce((count, item) => count + item.quantity, 0);
    };

    // Farmer Functions (Upload Product)
    const addProduct = (newProduct) => {
        const productWithId = { ...newProduct, id: Date.now() };
        setProducts(prev => [productWithId, ...prev]);
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            getCartTotal,
            getCartCount,
            products,
            addProduct
        }}>
            {children}
        </CartContext.Provider>
    );
};
