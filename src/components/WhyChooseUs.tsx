import { Shield, Headphones, Award, CreditCard } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const features = [
  {
    icon: Shield,
    title: "Best Price Guarantee",
    description: "We offer competitive pricing with no hidden fees. Find a lower price and we'll match it.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our travel experts are available around the clock to assist you with any queries.",
  },
  {
    icon: Award,
    title: "Award Winning Service",
    description: "Recognized as the leading travel agency with multiple industry awards.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Pay in installments with our flexible payment options and easy booking.",
  },
];

const WhyChooseUs = () => {
  // Load Elfsight widget script dynamically for better performance
  useEffect(() => {
    const loadScript = () => {
      if (document.querySelector('script[src*="elfsight.com"]')) return;

      const script = document.createElement('script');
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.defer = true;
      document.body.appendChild(script);
    };

    // Load script on component mount
    loadScript();
  }, []);

  return (
    <section className="">
      <div className="mt-4 md:mt-8 text-center bg-gradient-to-r from-sunset to-sunset/80 rounded-xl md:rounded-2xl p-6 sm:p-10 md:p-12 lg:p-16 text-white shadow-lg hover:shadow-xl transition-all duration-300 mx-4 md:mx-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 leading-tight">Can't Find What You're Looking For?</h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-95 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
          We can create a custom package just for you. Contact us to plan your perfect adventure.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-sunset px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-xl hover:scale-105 transform active:scale-95"
        >
          Get a Custom Quote
        </Link>
      </div>
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <span className="text-xs md:text-sm font-medium text-primary uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2 md:mt-3">
            Travel With Confidence
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-xl mx-auto px-4">
            Experience stress-free travel with our industry-leading services and support.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12 lg:mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card p-4 md:p-6 rounded-xl md:rounded-2xl shadow-soft hover:shadow-card transition-shadow duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-ocean-light flex items-center justify-center mb-3 md:mb-4 group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-5 w-5 md:h-7 md:w-7 text-primary" />
              </div>
              <h3 className="font-display text-base md:text-lg font-semibold text-card-foreground mb-1 md:mb-2">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Responsive Widget Container */}
        <div className="w-full">
          <div
            className="elfsight-app-4d300b9c-edcf-4a2d-873f-698d0b2f6335"
            data-elfsight-app-lazy
            style={{
              width: '100%',
              minHeight: '300px',
              maxWidth: '1200px',
              margin: '0 auto',
              borderRadius: '12px',
              overflow: 'hidden'
            }}
          />
        </div>
      </div>

    </section>
  );
};

export default WhyChooseUs;