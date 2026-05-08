import React, { useState, useEffect } from "react";
import { CheckCircle, Globe2, Users, Star } from "lucide-react";
import ReviewsCarousel from "./ReviewsCarousel";
import WhyUs from "./WhyUs";
import WhoAreWe from "./WhoAreWe";
import { setSEO } from "../../utils/seo";
// import ContactUs from "../Contact/Contact";
import Navbar from "../Navbar";
import Footer from "../Footer";
export default function AboutUs() {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setSEO({
      title: 'About Us | Maverick Tour & Travels - Your Trusted Kashmir Travel Partner',
      description: 'Discover who we are and why travelers trust Maverick Tour & Travels for unforgettable journeys. Learn about our mission and vision for travel in Kashmir.',
      keywords: [
        'Maverick Tour & Travels',
        'Kashmir travel agency',
        'trusted travel partner',
        'Kashmir boutique tours'
      ],
      canonicalPath: '/about'
    });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Premium Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://storage.eduyaam.com/uploads/1767866740_Lakes_Peaks_5_Nights_Nature_Immersion_Package_shghgx.webp"
            alt="About Us Background"
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20" />
        </div>

        <div className="relative text-center text-white px-4 z-10 animate-fade-up">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <div className="h-1 w-20 bg-sunset mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium text-white/90">
            Discover our story and why travelers choose us for their most precious memories.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <WhoAreWe />

      {/* Mission & Vision - Refined */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-soft p-8 text-center border border-border/50 group hover:shadow-card transition-all duration-300">
            <div className="w-16 h-16 bg-ocean-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Globe2 className="text-primary w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To craft personalized travel experiences that inspire exploration,
              cultural discovery, and unforgettable memories.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-soft p-8 text-center border border-border/50 group hover:shadow-card transition-all duration-300">
            <div className="w-16 h-16 bg-sunset-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Star className="text-sunset w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the most trusted travel partner, known for innovation,
              customer satisfaction, and sustainable tourism practices.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyUs />

      {/* Customer Reviews Carousel */}
      <ReviewsCarousel />

      <Footer />
    </div>
  );
}
