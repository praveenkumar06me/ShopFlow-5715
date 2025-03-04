import { createContext, useContext, useReducer } from 'react';

const ReviewContext = createContext();

const reviewReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      return {
        ...state,
        reviews: [...state.reviews, action.payload]
      };
    default:
      return state;
  }
};

export function ReviewProvider({ children }) {
  const [state, dispatch] = useReducer(reviewReducer, {
    reviews: []
  });

  return (
    <ReviewContext.Provider value={{ state, dispatch }}>
      {children}
    </ReviewContext.Provider>
  );
}

export function useReviews() {
  return useContext(ReviewContext);
}