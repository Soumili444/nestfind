import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Users, ShieldCheck, Search, Phone, CheckCircle, FileText, Key, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import PropertyCard from "@/components/PropertyCard";
import ReviewCard from "@/components/ReviewCard";
import { sampleProperties, reviews } from "@/lib/data";
import heroBg from "@/assets/hero-bg.jpg";
import aboutImage from "@/assets/about-image.jpg";
import teamSoumili from "@/assets/team-soumili.jpeg";
import teamSrishti from "@/assets/team-srishti.jpeg";
import teamUdit from "@/assets/team-udit.jpeg";
import teamSandeep from "@/assets/team-sandeep.jpeg";

const teamMembers = [
  { name: "Soumili Das", phone: "+91 823029960", education: "B.Tech Undergraduate, CSE, KIIT University", image: teamSoumili },
  { name: "Srishti Ganguly", phone: "+91 9569091565", education: "B.Tech Undergraduate, CSE, KIIT University", image: teamSrishti },
  { name: "Udit Naryan Shaw", phone: "+91 8003442769", education: "B.Tech Undergraduate, CSE, KIIT University", image: teamUdit },
  { name: "Sandeep Verma", phone: "+91 8889090068", education: "B.Tech Undergraduate, CSE, KIIT University", image: teamSandeep },
];

const featuredProperties = sampleProperties.filter((p) => p.featured);

const stats = [
  { label: "Happy Tenants", value: "10K+", icon: Users },
  { label: "Verified Properties", value: "5K+", icon: Building2 },
  { label: "Cities Covered", value: "25+", icon: ShieldCheck },
];

const howItWorks = [
  { step: "01", title: "Search", desc: "Find properties matching your budget, location, and preferences.", icon: Search, action: "link" as const, link: "/properties" },
  { step: "02", title: "Connect", desc: "Call or WhatsApp a property owner directly.", icon: Phone, action: "connect" as const },
  { step: "03", title: "Move In", desc: "Finalize the deal, sign the agreement, and settle into your new home.", icon: CheckCircle, action: "checklist" as const },
];

const moveInChecklist = [
  { icon: ClipboardList, text: "Verify property details & visit in person" },
  { icon: FileText, text: "Sign the rental agreement" },
  { icon: Key, text: "Pay security deposit & first month rent" },
  { icon: CheckCircle, text: "Collect keys & move in!" },
];

const Index = () => {
  const [showChecklist, setShowChecklist] = useState(false);

  const handleAction = (item: typeof howItWorks[number]) => {
    if (item.action === "connect") {
      window.open("tel:+919876543210", "_self");
    } else if (item.action === "checklist") {
      setShowChecklist(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Modern apartment interior" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-24 pb-16">
          <div className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-background/80">Your dream home awaits</span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-background mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Find Your Perfect
            <br />
            <span className="text-gradient">Place to Live</span>
          </h1>

          <p className="text-lg sm:text-xl text-background/70 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Browse thousands of verified flats, apartments & PGs. Connect directly with owners — no brokers, no hassle.
          </p>

          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <SearchBar variant="hero" />
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-14 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full glass-dark flex items-center justify-center">
                  <stat.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold text-background">{stat.value}</p>
                  <p className="text-xs text-background/60">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-primary font-medium text-sm mb-2">Curated for You</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">Featured Properties</h2>
            </div>
            <Link to="/properties">
              <Button variant="ghost" className="rounded-full gap-2 text-sm">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.slice(0, 3).map((property, i) => (
              <div key={property.id} className="animate-slide-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-primary font-medium text-sm mb-2">Simple & Easy</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-14">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((item, i) => {
              const content = (
                <div className="relative animate-slide-up cursor-pointer group" style={{ animationDelay: `${i * 0.15}s` }}>
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-primary/40 tracking-widest">{item.step}</span>
                  <h3 className="font-heading text-xl font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              );
              if (item.action === "link") {
                return <Link key={item.step} to={item.link!}>{content}</Link>;
              }
              return (
                <button key={item.step} onClick={() => handleAction(item)}>
                  {content}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-primary font-medium text-sm mb-2">About NestFind</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Making Home Search Effortless
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                NestFind is built to simplify the rental experience for everyone. Whether you're a student looking for a PG, a professional seeking a flat, or a property owner wanting quality tenants — we've got you covered.
              </p>
              <ul className="space-y-4 mb-8">
                {["No brokerage fees — connect directly with owners", "Verified listings with real photos", "Instant callback system for quick responses", "Trusted by thousands across 25+ cities"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/properties">
                <Button className="rounded-full gap-2">
                  Explore Properties <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={aboutImage}
                alt="Modern apartment building"
                loading="lazy"
                width={800}
                height={800}
                className="rounded-3xl shadow-medium w-full object-cover aspect-square"
              />
            </div>
          </div>

          {/* Team Profiles */}
          <div className="col-span-1 lg:col-span-2 mt-16">
            <p className="text-primary font-medium text-sm mb-2 text-center">Our Team</p>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">Meet the Creators</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-card rounded-2xl p-5 text-center shadow-soft border border-border/50">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-primary/20"
                  />
                  <h4 className="font-heading font-semibold text-foreground text-lg">{member.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{member.phone}</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">{member.education}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 px-4 bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm mb-2">Testimonials</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">What Our Users Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={review.id} className="animate-slide-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Find Your Nest?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of happy tenants and property owners on NestFind. Start your search today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/properties">
              <Button size="lg" className="rounded-full gap-2 px-8">
                Browse Properties <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                List Your Property
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Move In Checklist Dialog */}
      <Dialog open={showChecklist} onOpenChange={setShowChecklist}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">Move-In Checklist</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            {moveInChecklist.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-secondary/50">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm text-foreground font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Index;
