import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function ReviewForm({ productId, onSubmit }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      productId,
      rating,
      comment,
      date: new Date().toISOString(),
      id: Date.now()
    });
    setRating(0);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div className="flex items-center gap-2">
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <FaStar
              key={index}
              className="cursor-pointer"
              color={ratingValue <= (hover || rating) ? "#fbbf24" : "#d1d5db"}
              size={24}
              onClick={() => setRating(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(rating)}
            />
          );
        })}
      </div>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your review..."
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary"
        rows="4"
        required
      />
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition-colors"
      >
        Submit Review
      </button>
    </form>
  );
}