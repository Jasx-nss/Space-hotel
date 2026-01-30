export interface Room {
  id: number;
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
}

export interface Amenity {
  id: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  comment: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface PricingPackage {
  id: number;
  name: string;
  price: string;
  duration: string;
  popular: boolean;
  features: string[];
}

export const rooms: Room[] = [
  {
    id: 1,
    name: "Stellar Suite",
    price: "$250,000",
    duration: "night",
    description: "Our flagship accommodation with panoramic Earth views and premium amenities.",
    features: [
      "360° viewing dome",
      "Private observation deck",
      "King-size zero-gravity bed",
      "Personal AI assistant"
    ]
  },
  {
    id: 2,
    name: "Nebula Chamber",
    price: "$175,000",
    duration: "night",
    description: "Elegant quarters designed for the discerning space traveler.",
    features: [
      "Earth-facing windows",
      "Zero-gravity shower",
      "Gourmet meal service",
      "Climate-controlled environment"
    ]
  },
  {
    id: 3,
    name: "Cosmos Capsule",
    price: "$125,000",
    duration: "night",
    description: "Comfortable and efficient space for solo adventurers.",
    features: [
      "Porthole window",
      "Compact sleeping pod",
      "Standard amenities",
      "Shared lounge access"
    ]
  }
];

export const amenities: Amenity[] = [
  {
    id: 1,
    title: "Zero-G Spa",
    description: "Experience relaxation like never before in our weightless spa environment."
  },
  {
    id: 2,
    title: "Observation Lounge",
    description: "Watch Earth rotate below from our panoramic viewing deck."
  },
  {
    id: 3,
    title: "Gourmet Dining",
    description: "Michelin-star chefs prepare meals adapted for space consumption."
  },
  {
    id: 4,
    title: "Spacewalk Experience",
    description: "Step outside and float in the void with our guided EVA tours."
  },
  {
    id: 5,
    title: "Fitness Center",
    description: "Stay active with our specially designed zero-gravity workout equipment."
  },
  {
    id: 6,
    title: "Communication Hub",
    description: "Stay connected with Earth through our high-speed quantum link."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Astrophysicist",
    rating: 5,
    comment: "An absolutely transformative experience. Seeing Earth from orbit changed my perspective on everything."
  },
  {
    id: 2,
    name: "Marcus Rivera",
    role: "Tech Entrepreneur",
    rating: 5,
    comment: "Worth every penny. The service was impeccable and the views are indescribable."
  },
  {
    id: 3,
    name: "Elena Volkov",
    role: "Author & Explorer",
    rating: 5,
    comment: "I've traveled to every continent, but nothing compares to watching sunrise from space."
  }
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "Is space travel safe?",
    answer: "We maintain the highest safety standards with a 100% safety record. All guests undergo comprehensive training before departure, and our facilities are designed with multiple redundant systems."
  },
  {
    id: 2,
    question: "How long does the journey take?",
    answer: "The flight to our orbital station takes approximately 8 hours. Once aboard, minimum stays are 3 nights, with extended packages available."
  },
  {
    id: 3,
    question: "What training is required?",
    answer: "All guests complete a 3-day pre-flight training program covering safety procedures, zero-gravity movement, and emergency protocols."
  },
  {
    id: 4,
    question: "Can I bring personal items?",
    answer: "Yes, within weight limitations. Each guest is allowed up to 10kg of personal belongings, excluding prohibited items listed in our guest handbook."
  },
  {
    id: 5,
    question: "Is there medical support on board?",
    answer: "Our station is staffed 24/7 with trained medical professionals and equipped with a comprehensive medical bay for any emergencies."
  }
];

export const pricingPackages: PricingPackage[] = [
  {
    id: 1,
    name: "Explorer",
    price: "$450,000",
    duration: "3 nights",
    popular: false,
    features: [
      "Cosmos Capsule accommodation",
      "Standard meal package",
      "One guided spacewalk",
      "Access to common areas",
      "Basic training program"
    ]
  },
  {
    id: 2,
    name: "Voyager",
    price: "$850,000",
    duration: "5 nights",
    popular: true,
    features: [
      "Nebula Chamber accommodation",
      "Premium dining experience",
      "Two guided spacewalks",
      "Private observation sessions",
      "Advanced training program",
      "Personalized itinerary"
    ]
  },
  {
    id: 3,
    name: "Pioneer",
    price: "$1,500,000",
    duration: "7 nights",
    popular: false,
    features: [
      "Stellar Suite accommodation",
      "Executive chef service",
      "Unlimited spacewalks",
      "Private observatory access",
      "VIP training program",
      "Concierge service",
      "Commemorative package"
    ]
  }
];
