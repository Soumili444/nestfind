import { Search, MapPin, IndianRupee } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PROPERTY_TYPES } from "@/lib/data";

interface SearchBarProps {
  variant?: "hero" | "compact";
}

const SearchBar = ({ variant = "hero" }: SearchBarProps) => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [type, setType] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (budget) params.set("budget", budget);
    if (type) params.set("type", type);
    navigate(`/properties?${params.toString()}`);
  };

  if (variant === "hero") {
    return (
      <div className="glass rounded-2xl p-2 shadow-medium w-full max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl bg-background">
            <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
            <input
              type="text"
              placeholder="Where do you want to live?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
            />
          </div>
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-background md:w-40">
            <IndianRupee className="h-4 w-4 text-muted-foreground shrink-0" />
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full bg-transparent text-sm text-foreground outline-none appearance-none cursor-pointer"
            >
              <option value="">Budget</option>
              <option value="10000">Under ₹10K</option>
              <option value="20000">Under ₹20K</option>
              <option value="30000">Under ₹30K</option>
              <option value="50000">Under ₹50K</option>
              <option value="100000">Under ₹1L</option>
            </select>
          </div>
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-background md:w-36">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full bg-transparent text-sm text-foreground outline-none appearance-none cursor-pointer"
            >
              <option value="">Type</option>
              {PROPERTY_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <Button onClick={handleSearch} className="rounded-xl px-6 h-12 gap-2">
            <Search className="h-4 w-4" /> Search
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full">
      <div className="flex-1 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-background border border-border">
        <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
        <input
          type="text"
          placeholder="Location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full bg-transparent text-sm outline-none"
        />
      </div>
      <select
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        className="px-4 py-2.5 rounded-xl bg-background border border-border text-sm outline-none appearance-none cursor-pointer"
      >
        <option value="">Budget</option>
        <option value="10000">Under ₹10K</option>
        <option value="20000">Under ₹20K</option>
        <option value="30000">Under ₹30K</option>
        <option value="50000">Under ₹50K</option>
      </select>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="px-4 py-2.5 rounded-xl bg-background border border-border text-sm outline-none appearance-none cursor-pointer"
      >
        <option value="">Type</option>
        {PROPERTY_TYPES.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      <Button onClick={handleSearch} size="sm" className="rounded-xl gap-2">
        <Search className="h-4 w-4" /> Search
      </Button>
    </div>
  );
};

export default SearchBar;
