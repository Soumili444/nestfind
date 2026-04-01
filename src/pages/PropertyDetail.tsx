import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Star, BadgeCheck, Phone, Heart, Share2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sampleProperties } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

const PropertyDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const property = sampleProperties.find((p) => p.id === id);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [callbackName, setCallbackName] = useState("");
  const [callbackPhone, setCallbackPhone] = useState("");
  const [liked, setLiked] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold mb-4">Property not found</h1>
          <Link to="/properties"><Button className="rounded-full">Back to Properties</Button></Link>
        </div>
      </div>
    );
  }

  const handleCallback = () => {
    if (!callbackName.trim() || !callbackPhone.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    toast({
      title: "Callback Requested! ✅",
      description: `${property.ownerName} will contact you shortly at ${callbackPhone}.`,
    });
    setCallbackOpen(false);
    setCallbackName("");
    setCallbackPhone("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-28 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Back */}
          <Link to="/properties" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to listings
          </Link>

          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden mb-8 aspect-video">
            <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" width={800} height={600} />
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={() => setLiked(!liked)}
                className="h-10 w-10 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Heart className={`h-5 w-5 ${liked ? "fill-destructive text-destructive" : "text-foreground"}`} />
              </button>
              <button className="h-10 w-10 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform">
                <Share2 className="h-5 w-5 text-foreground" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge className="bg-primary/10 text-primary border-0 rounded-full">{property.type}</Badge>
                {property.verified && (
                  <Badge className="bg-warm-gold/10 text-warm-gold border-0 rounded-full flex items-center gap-1">
                    <BadgeCheck className="h-3 w-3" /> Verified
                  </Badge>
                )}
                {property.featured && (
                  <Badge className="bg-foreground/10 text-foreground border-0 rounded-full">Featured</Badge>
                )}
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">{property.title}</h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-warm-gold text-warm-gold" />
                  <span className="text-sm font-medium">{property.rating}</span>
                  <span className="text-sm text-muted-foreground">({property.reviewCount} reviews)</span>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 mb-8 shadow-card">
                <h3 className="font-heading text-lg font-semibold mb-3">About this property</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{property.description}</p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-card">
                <h3 className="font-heading text-lg font-semibold mb-4">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity) => (
                    <Badge key={amenity} variant="secondary" className="rounded-full px-4 py-2 text-sm">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-card rounded-2xl p-6 shadow-medium">
                <p className="text-3xl font-bold text-foreground mb-1">
                  ₹{property.rent.toLocaleString("en-IN")}
                  <span className="text-base font-normal text-muted-foreground">/month</span>
                </p>

                <hr className="my-5 border-border" />

                <div className="mb-5">
                  <p className="text-sm text-muted-foreground mb-1">Listed by</p>
                  <p className="font-semibold text-foreground">{property.ownerName}</p>
                </div>

                <Button
                  onClick={() => setCallbackOpen(true)}
                  className="w-full rounded-xl h-12 gap-2 text-base"
                >
                  <Phone className="h-4 w-4" /> Request Callback
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-3">
                  Owner will call you back within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Callback Dialog */}
      <Dialog open={callbackOpen} onOpenChange={setCallbackOpen}>
        <DialogContent className="rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-heading text-xl">Request a Callback</DialogTitle>
            <DialogDescription>
              Share your details and {property.ownerName} will get in touch with you shortly.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <div>
              <Label htmlFor="cb-name">Your Name</Label>
              <Input
                id="cb-name"
                placeholder="Enter your name"
                value={callbackName}
                onChange={(e) => setCallbackName(e.target.value)}
                className="rounded-xl mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="cb-phone">Phone Number</Label>
              <Input
                id="cb-phone"
                placeholder="+91 98765 43210"
                value={callbackPhone}
                onChange={(e) => setCallbackPhone(e.target.value)}
                className="rounded-xl mt-1.5"
              />
            </div>
            <Button onClick={handleCallback} className="w-full rounded-xl h-11">
              Send Request
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
