import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from './components/Pages/Shop'
import Navbar from './components/Pages/Navbar'
import ShopCategory from './components/Pages/ShopCategory'
import Product from './components/Pages/Product'
import Cart from './components/Pages/Cart'
import Footer from "./components/Pages/Footer";
import Slidebar from '../src/components/Pages2/Slidebar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="men" />} />
          <Route path="/womens" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          <Route path="/Product/:productId" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
          <Footer />
      </Router>
      <div>

      </div>
    </div>
  );
}

export default App;
