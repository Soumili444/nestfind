import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { useFavorites } from "@/contexts/FavoritesContext";
import { sampleProperties } from "@/lib/data";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Favorites = () => {
  const { favorites } = useFavorites();
  const favoriteProperties = sampleProperties.filter((p) => favorites.includes(p.id));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">Saved Properties</h1>
            <p className="text-muted-foreground">Your favorite properties in one place</p>
          </div>

          {favoriteProperties.length > 0 ? (
            <>
              <p className="text-sm text-muted-foreground mb-6">{favoriteProperties.length} saved</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteProperties.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <Heart className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">No saved properties yet</h3>
              <p className="text-muted-foreground text-sm mb-6">Browse listings and tap the heart icon to save your favorites</p>
              <Link to="/properties"><Button className="rounded-full">Browse Properties</Button></Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;
