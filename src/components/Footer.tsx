import { Link } from "react-router-dom";
import { Home, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
                <Home className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-heading text-xl font-bold">NestFind</span>
            </Link>
            <p className="text-sm opacity-70 leading-relaxed">
              Find your perfect home with ease. We connect tenants with trusted property owners across India.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm opacity-70">
              <li><Link to="/properties" className="hover:opacity-100 transition-opacity">Browse Properties</Link></li>
              <li><Link to="/register" className="hover:opacity-100 transition-opacity">List Your Property</Link></li>
              <li><Link to="/#about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/#reviews" className="hover:opacity-100 transition-opacity">Reviews</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Property Types</h4>
            <ul className="space-y-2.5 text-sm opacity-70">
              <li><Link to="/properties?type=1BHK" className="hover:opacity-100 transition-opacity">1 BHK Flats</Link></li>
              <li><Link to="/properties?type=2BHK" className="hover:opacity-100 transition-opacity">2 BHK Flats</Link></li>
              <li><Link to="/properties?type=3BHK" className="hover:opacity-100 transition-opacity">3 BHK Flats</Link></li>
              <li><Link to="/properties?type=PG" className="hover:opacity-100 transition-opacity">PG / Hostels</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@nestfind.com</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> Bangalore, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm opacity-50">
          © {new Date().getFullYear()} NestFind. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
