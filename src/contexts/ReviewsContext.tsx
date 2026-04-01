import { createContext, useContext, useState, ReactNode } from "react";

export interface PropertyReview {
  id: string;
  propertyId: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

interface ReviewsContextType {
  getReviews: (propertyId: string) => PropertyReview[];
  addReview: (review: Omit<PropertyReview, "id" | "date">) => void;
  getAverageRating: (propertyId: string) => number;
}

const ReviewsContext = createContext<ReviewsContextType>({
  getReviews: () => [],
  addReview: () => {},
  getAverageRating: () => 0,
});

export const useReviews = () => useContext(ReviewsContext);

const seedReviews: PropertyReview[] = [
  { id: "r1", propertyId: "1", name: "Ananya G.", rating: 5, text: "Amazing flat with a gorgeous city view. The owner is very responsive and the amenities are top-notch!", date: "2025-12-15" },
  { id: "r2", propertyId: "1", name: "Karthik R.", rating: 4, text: "Great location and well-maintained. Parking could be better though.", date: "2025-11-20" },
  { id: "r3", propertyId: "2", name: "Priyanka M.", rating: 5, text: "Perfect for a single professional. Metro access is a huge plus!", date: "2026-01-10" },
  { id: "r4", propertyId: "3", name: "Rahul S.", rating: 5, text: "Luxury living at its finest. The pool and clubhouse are fantastic.", date: "2026-02-05" },
  { id: "r5", propertyId: "3", name: "Sneha T.", rating: 4, text: "Beautiful apartment but rent is on the higher side for the area.", date: "2026-01-28" },
  { id: "r6", propertyId: "4", name: "Vikash K.", rating: 4, text: "Good PG for the price. Food quality is decent and rooms are clean.", date: "2026-03-01" },
];

export const ReviewsProvider = ({ children }: { children: ReactNode }) => {
  const [reviews, setReviews] = useState<PropertyReview[]>(seedReviews);

  const getReviews = (propertyId: string) =>
    reviews.filter((r) => r.propertyId === propertyId);

  const addReview = (review: Omit<PropertyReview, "id" | "date">) => {
    setReviews((prev) => [
      {
        ...review,
        id: `r${Date.now()}`,
        date: new Date().toISOString().split("T")[0],
      },
      ...prev,
    ]);
  };

  const getAverageRating = (propertyId: string) => {
    const propReviews = getReviews(propertyId);
    if (propReviews.length === 0) return 0;
    return propReviews.reduce((sum, r) => sum + r.rating, 0) / propReviews.length;
  };

  return (
    <ReviewsContext.Provider value={{ getReviews, addReview, getAverageRating }}>
      {children}
    </ReviewsContext.Provider>
  );
};
