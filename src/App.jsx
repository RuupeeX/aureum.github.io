import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartPanel from './components/CartPanel';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import History from './pages/History';
import QualityProduction from './pages/Quality';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/historia" element={<History />} />
          <Route path="/calidad" element={<QualityProduction />} />
        </Routes>
        <Footer />
        <CartPanel />
      </div>
    </CartProvider>
  );
}

export default App;