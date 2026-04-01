import { useMemo } from "react";
import { Sparkles } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import { Property, sampleProperties } from "@/lib/data";
import { useFavorites } from "@/contexts/FavoritesContext";

interface Props {
  currentProperty: Property;
}

const PropertyRecommendations = ({ currentProperty }: Props) => {
  const { favorites } = useFavorites();

  const recommendations = useMemo(() => {
    const others = sampleProperties.filter((p) => p.id !== currentProperty.id);

    const scored = others.map((p) => {
      let score = 0;
      // Same type boost
      if (p.type === currentProperty.type) score += 3;
      // Similar price range (within 30%)
      const priceDiff = Math.abs(p.rent - currentProperty.rent) / currentProperty.rent;
      if (priceDiff < 0.3) score += 2;
      // Same city
      const currentCity = currentProperty.location.split(",").pop()?.trim();
      const pCity = p.location.split(",").pop()?.trim();
      if (currentCity === pCity) score += 2;
      // Higher rating boost
      if (p.rating >= 4.5) score += 1;
      // Verified boost
      if (p.verified) score += 1;
      // Favorited similar properties boost
      if (favorites.some((fId) => {
        const fav = sampleProperties.find((s) => s.id === fId);
        return fav && fav.type === p.type;
      })) score += 1;

      return { property: p, score };
    });

    return scored
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((s) => s.property);
  }, [currentProperty, favorites]);

  if (recommendations.length === 0) return null;

  return (
    <div className="mt-12">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="h-5 w-5 text-primary" />
        <h3 className="font-heading text-xl font-semibold text-foreground">Recommended for You</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </div>
  );
};

export default PropertyRecommendations;
