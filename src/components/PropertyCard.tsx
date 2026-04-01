import { Star, MapPin, BadgeCheck, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Property } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <Link
      to={`/property/${property.id}`}
      className="group block rounded-2xl overflow-hidden bg-card shadow-card hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={property.images[0]}
          alt={property.title}
          loading="lazy"
          width={800}
          height={600}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className="bg-primary/90 text-primary-foreground border-0 rounded-full text-xs font-medium px-3">
            {property.type}
          </Badge>
          {property.verified && (
            <Badge className="bg-warm-gold/90 text-primary-foreground border-0 rounded-full text-xs font-medium px-3 flex items-center gap-1">
              <BadgeCheck className="h-3 w-3" /> Verified
            </Badge>
          )}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setLiked(!liked);
          }}
          className="absolute top-3 right-3 h-9 w-9 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Heart className={`h-4 w-4 ${liked ? "fill-destructive text-destructive" : "text-foreground"}`} />
        </button>
        {property.featured && (
          <div className="absolute bottom-3 left-3">
            <Badge className="bg-foreground/80 text-background border-0 rounded-full text-xs px-3">
              Featured
            </Badge>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-heading text-lg font-semibold text-foreground leading-tight line-clamp-1">
            {property.title}
          </h3>
          <div className="flex items-center gap-1 shrink-0">
            <Star className="h-4 w-4 fill-warm-gold text-warm-gold" />
            <span className="text-sm font-medium text-foreground">{property.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-muted-foreground mb-3">
          <MapPin className="h-3.5 w-3.5" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-foreground">
            ₹{property.rent.toLocaleString("en-IN")}
            <span className="text-sm font-normal text-muted-foreground">/month</span>
          </p>
          <span className="text-xs text-muted-foreground">{property.reviewCount} reviews</span>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
