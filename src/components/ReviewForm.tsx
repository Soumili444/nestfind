import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useReviews } from "@/contexts/ReviewsContext";
import { useToast } from "@/hooks/use-toast";

interface ReviewFormProps {
  propertyId: string;
}

const ReviewForm = ({ propertyId }: ReviewFormProps) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [text, setText] = useState("");
  const { addReview } = useReviews();
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!name.trim() || !text.trim() || rating === 0) {
      toast({ title: "Please fill all fields and select a rating", variant: "destructive" });
      return;
    }
    addReview({ propertyId, name: name.trim(), rating, text: text.trim() });
    toast({ title: "Review submitted! ✅" });
    setName("");
    setRating(0);
    setText("");
  };

  return (
    <div className="bg-card rounded-2xl p-6 shadow-card">
      <h3 className="font-heading text-lg font-semibold mb-4">Write a Review</h3>
      <div className="space-y-4">
        <div>
          <Label htmlFor="review-name">Your Name</Label>
          <Input id="review-name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} className="rounded-xl mt-1.5" />
        </div>
        <div>
          <Label>Rating</Label>
          <div className="flex gap-1 mt-1.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => setRating(i)}
                onMouseEnter={() => setHoveredRating(i)}
                onMouseLeave={() => setHoveredRating(0)}
                className="p-0.5 transition-transform hover:scale-110"
              >
                <Star
                  className={`h-6 w-6 ${
                    i <= (hoveredRating || rating)
                      ? "fill-warm-gold text-warm-gold"
                      : "text-muted-foreground/30"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
        <div>
          <Label htmlFor="review-text">Your Review</Label>
          <Textarea id="review-text" placeholder="Share your experience..." value={text} onChange={(e) => setText(e.target.value)} className="rounded-xl mt-1.5 min-h-[80px]" />
        </div>
        <Button onClick={handleSubmit} className="rounded-xl">Submit Review</Button>
      </div>
    </div>
  );
};

export default ReviewForm;
