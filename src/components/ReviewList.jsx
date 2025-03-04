import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { format } from 'date-fns';

export default function ReviewList({ reviews }) {
  return (
    <div className="space-y-4 mt-6">
      {reviews.map((review) => (
        <motion.div
          key={review.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-4 rounded-lg shadow"
        >
          <div className="flex items-center gap-2 mb-2">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                color={index < review.rating ? "#fbbf24" : "#d1d5db"}
                size={16}
              />
            ))}
            <span className="text-sm text-gray-500">
              {format(new Date(review.date), 'MMM d, yyyy')}
            </span>
          </div>
          <p className="text-gray-700">{review.comment}</p>
        </motion.div>
      ))}
    </div>
  );
}