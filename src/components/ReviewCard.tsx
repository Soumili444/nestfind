import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

const ReviewCard = ({ name, role, text, rating, avatar }: ReviewCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-medium transition-shadow duration-300">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "fill-warm-gold text-warm-gold" : "text-border"}`}
          />
        ))}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
          {avatar}
        </div>
        <div>
          <p className="font-medium text-sm text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
