import { motion } from 'framer-motion';
import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useReviews } from '../contexts/ReviewContext';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

export default function ProductCard({ product }) {
  const { dispatch } = useCart();
  const { state: reviewState, dispatch: reviewDispatch } = useReviews();
  const [showReviews, setShowReviews] = useState(false);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const handleReviewSubmit = (review) => {
    reviewDispatch({ type: 'ADD_REVIEW', review });
  };

  const productReviews = reviewState.reviews.filter(
    review => review.productId === product.id
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold">${product.price}</span>
          <button
            onClick={addToCart}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition-colors"
          >
            Add to Cart
          </button>
        </div>
        
        <button
          onClick={() => setShowReviews(!showReviews)}
          className="mt-4 text-primary hover:text-secondary transition-colors"
        >
          {showReviews ? 'Hide Reviews' : 'Show Reviews'}
        </button>
        
        {showReviews && (
          <div className="mt-4">
            <ReviewForm productId={product.id} onSubmit={handleReviewSubmit} />
            <ReviewList reviews={productReviews} />
          </div>
        )}
      </div>
    </motion.div>
  );
}