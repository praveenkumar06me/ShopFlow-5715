import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { ReviewProvider } from './contexts/ReviewContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <CartProvider>
        <ReviewProvider>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </ReviewProvider>
      </CartProvider>
    </Router>
  );
}

export default App;