import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import SearchBar from "@/components/SearchBar";
import { sampleProperties, PROPERTY_TYPES } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

const Properties = () => {
  const [searchParams] = useSearchParams();
  const [activeType, setActiveType] = useState(searchParams.get("type") || "");

  const filtered = useMemo(() => {
    let result = sampleProperties;
    const locationQ = searchParams.get("location")?.toLowerCase();
    const budgetQ = searchParams.get("budget");

    if (locationQ) {
      result = result.filter((p) => p.location.toLowerCase().includes(locationQ));
    }
    if (budgetQ) {
      result = result.filter((p) => p.rent <= parseInt(budgetQ));
    }
    if (activeType) {
      result = result.filter((p) => p.type === activeType);
    }
    return result;
  }, [searchParams, activeType]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-28 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">Browse Properties</h1>
            <p className="text-muted-foreground">Find your perfect home from our curated listings</p>
          </div>

          <div className="mb-8">
            <SearchBar variant="compact" />
          </div>

          {/* Type Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge
              onClick={() => setActiveType("")}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm transition-colors ${
                !activeType ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              All
            </Badge>
            {PROPERTY_TYPES.map((type) => (
              <Badge
                key={type}
                onClick={() => setActiveType(activeType === type ? "" : type)}
                className={`cursor-pointer rounded-full px-4 py-2 text-sm transition-colors ${
                  activeType === type ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {type}
              </Badge>
            ))}
          </div>

          {/* Results */}
          {filtered.length > 0 ? (
            <>
              <p className="text-sm text-muted-foreground mb-6">{filtered.length} properties found</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">No properties found</h3>
              <p className="text-muted-foreground text-sm">Try adjusting your search filters</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Properties;
