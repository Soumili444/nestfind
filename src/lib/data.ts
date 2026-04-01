import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";

export interface Property {
  id: string;
  title: string;
  location: string;
  rent: number;
  type: "1BHK" | "2BHK" | "3BHK" | "Studio" | "PG";
  description: string;
  images: string[];
  ownerName: string;
  ownerPhone: string;
  amenities: string[];
  verified: boolean;
  rating: number;
  reviewCount: number;
  featured: boolean;
}

export const PROPERTY_TYPES = ["1BHK", "2BHK", "3BHK", "Studio", "PG"] as const;

export const LOCATIONS = [
  "Koramangala, Bangalore",
  "Indiranagar, Bangalore",
  "HSR Layout, Bangalore",
  "Whitefield, Bangalore",
  "Andheri, Mumbai",
  "Bandra, Mumbai",
  "Powai, Mumbai",
  "Sector 62, Noida",
  "Gurugram, Haryana",
  "Hinjewadi, Pune",
] as const;

export const sampleProperties: Property[] = [
  {
    id: "1",
    title: "Sunlit 2BHK with City View",
    location: "Koramangala, Bangalore",
    rent: 25000,
    type: "2BHK",
    description: "A beautifully furnished 2BHK apartment with panoramic city views, modern kitchen, and spacious balcony. Located in the heart of Koramangala with easy access to restaurants, cafes, and tech parks.",
    images: [property1],
    ownerName: "Rajesh Kumar",
    ownerPhone: "+91 98765 43210",
    amenities: ["WiFi", "Parking", "Gym", "Power Backup", "Security"],
    verified: true,
    rating: 4.8,
    reviewCount: 24,
    featured: true,
  },
  {
    id: "2",
    title: "Cozy Studio near Metro",
    location: "Indiranagar, Bangalore",
    rent: 15000,
    type: "Studio",
    description: "Compact and stylish studio apartment, perfect for working professionals. Walking distance from Indiranagar Metro station. Fully furnished with modern amenities.",
    images: [property2],
    ownerName: "Priya Sharma",
    ownerPhone: "+91 98765 43211",
    amenities: ["WiFi", "Furnished", "Metro Access", "Laundry"],
    verified: true,
    rating: 4.5,
    reviewCount: 18,
    featured: true,
  },
  {
    id: "3",
    title: "Premium 3BHK with Modern Kitchen",
    location: "Bandra, Mumbai",
    rent: 55000,
    type: "3BHK",
    description: "Luxurious 3BHK apartment featuring a state-of-the-art kitchen with marble countertops, spacious bedrooms, and premium finishes throughout. Located in the prestigious Bandra area.",
    images: [property3],
    ownerName: "Amit Patel",
    ownerPhone: "+91 98765 43212",
    amenities: ["WiFi", "Parking", "Pool", "Gym", "Clubhouse", "Security"],
    verified: true,
    rating: 4.9,
    reviewCount: 32,
    featured: true,
  },
  {
    id: "4",
    title: "Affordable PG for Students",
    location: "HSR Layout, Bangalore",
    rent: 8000,
    type: "PG",
    description: "Well-maintained PG accommodation with clean rooms, shared kitchen, and common areas. Ideal for students and young professionals starting their career.",
    images: [property4],
    ownerName: "Meena Reddy",
    ownerPhone: "+91 98765 43213",
    amenities: ["WiFi", "Meals", "Laundry", "Housekeeping"],
    verified: false,
    rating: 4.2,
    reviewCount: 45,
    featured: false,
  },
  {
    id: "5",
    title: "Spacious 1BHK in Gated Community",
    location: "Whitefield, Bangalore",
    rent: 18000,
    type: "1BHK",
    description: "Well-designed 1BHK in a premium gated community with landscaped gardens, swimming pool, and 24/7 security. Close to IT corridor.",
    images: [property1],
    ownerName: "Suresh Nair",
    ownerPhone: "+91 98765 43214",
    amenities: ["WiFi", "Parking", "Pool", "Garden", "Security", "Gym"],
    verified: true,
    rating: 4.6,
    reviewCount: 15,
    featured: true,
  },
  {
    id: "6",
    title: "Modern 2BHK near Tech Park",
    location: "Hinjewadi, Pune",
    rent: 20000,
    type: "2BHK",
    description: "Contemporary 2BHK apartment near major IT companies. Features modern interiors, ample natural light, and excellent connectivity.",
    images: [property2],
    ownerName: "Vikram Singh",
    ownerPhone: "+91 98765 43215",
    amenities: ["WiFi", "Parking", "Power Backup", "Playground"],
    verified: false,
    rating: 4.3,
    reviewCount: 8,
    featured: false,
  },
];

export const reviews = [
  {
    id: "1",
    name: "Ananya Gupta",
    role: "Software Engineer",
    text: "Found my perfect flat within a week! The callback feature made it so easy to connect with owners directly. Highly recommended!",
    rating: 5,
    avatar: "AG",
  },
  {
    id: "2",
    name: "Rohan Mehta",
    role: "Marketing Manager",
    text: "As a property owner, this platform has been a game-changer. I get quality leads and the dashboard is super intuitive.",
    rating: 5,
    avatar: "RM",
  },
  {
    id: "3",
    name: "Sneha Iyer",
    role: "Graduate Student",
    text: "The search filters helped me find affordable PG options near my college. The verified badge gave me confidence in my choice.",
    rating: 4,
    avatar: "SI",
  },
];
