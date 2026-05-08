import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Search, Clock, X, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-beach.jpg";
import { useState, useEffect, useRef } from 'react';
import { allPackages } from "@/data/packages";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const filteredResults = searchTerm.trim()
    ? allPackages.filter(pkg =>
      pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (pkg.description && pkg.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    : allPackages;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const popularSearches = ["Kashmir", "Pahalgam", "Luxury", "Family"];

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center z-40">
      {/* Background Image with optimized overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Travel Destination"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1.5px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sunset/20 backdrop-blur-md border border-sunset/30 text-white text-xs md:text-sm font-semibold mb-6 animate-fade-up">
            <TrendingUp className="h-4 w-4 text-sunset" />
            <span>Discover Your Next Adventure</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-[1.1] animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Explore the World's Most <br className="hidden md:block" />
            <span className="text-sunset italic">Beautiful</span> Destinations
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-up font-medium" style={{ animationDelay: "0.2s" }}>
            Unforgettable memories with curated travel experiences. From pristine beaches to ancient wonders.
          </p>

          {/* Improved Search Box */}
          <div
            ref={searchRef}
            className="relative max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className={`
              flex items-center gap-2 p-2 rounded-2xl bg-white shadow-2xl transition-all duration-300
              ${isFocused ? 'ring-4 ring-sunset/20 -translate-y-1' : ''}
            `}>
              <div className="flex-1 relative flex items-center">
                <Search className={`ml-3 h-5 w-5 transition-colors ${isFocused ? 'text-sunset' : 'text-gray-400'}`} />
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  value={searchTerm}
                  onFocus={() => setIsFocused(true)}
                  className="w-full py-3 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none bg-transparent text-base md:text-lg"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors mr-2 text-gray-400"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <Button
                className="bg-sunset hover:bg-sunset/90 text-white rounded-xl px-4 md:px-8 py-6 h-auto font-bold shadow-lg shadow-sunset/20 transition-all shrink-0"
              >
                Search
              </Button>
            </div>

            {/* Popular Searches */}
            <div className="mt-4 flex flex-wrap justify-center gap-2 items-center text-white/80">
              <span className="text-sm font-medium">Popular:</span>
              {popularSearches.map(term => (
                <button
                  key={term}
                  onClick={() => setSearchTerm(term)}
                  className="text-xs md:text-sm px-3 py-1 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm"
                >
                  {term}
                </button>
              ))}
            </div>

            {/* Search Results Overlay */}
            {isFocused && (
              <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[100] animate-in fade-in slide-in-from-top-2 duration-200">
                {searchTerm && filteredResults.length === 0 ? (
                  <div className="p-8 text-center">
                    <p className="text-gray-500 mb-2">Can't find what you're looking for?</p>
                    <Link to="/contact" className="text-sunset font-bold hover:underline">Contact our experts</Link>
                  </div>
                ) : (
                  <div className="p-2 max-h-[60vh] overflow-y-auto custom-scrollbar">
                    {!searchTerm && (
                      <div className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Suggested Packages
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {filteredResults.map((result) => (
                        <Link
                          key={result.id}
                          to={`/packages/${result.id}`}
                          className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                        >
                          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                            <img src={result.image} alt={result.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          </div>
                          <div className="flex-1 text-left min-w-0">
                            <h4 className="font-bold text-gray-900 text-sm sm:text-base line-clamp-1 group-hover:text-sunset transition-colors">{result.title}</h4>
                            <div className="flex items-center gap-2 sm:gap-3 mt-0.5 text-[10px] sm:text-xs text-gray-500">
                              <span className="flex items-center gap-1 shrink-0"><MapPin className="h-3 w-3 text-sunset" /> {result.location}</span>
                              <span className="flex items-center gap-1 shrink-0"><Clock className="h-3 w-3 text-sunset" /> {result.duration}</span>
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="text-[8px] sm:text-[10px] text-gray-400 uppercase font-bold tracking-wider">Starts from</p>
                            <p className="text-xs sm:text-sm font-bold text-sunset">₹{result.pricing[0].perPerson}/-</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    {searchTerm && (
                      <div className="mt-2 p-2 border-t border-gray-50">
                        <Link to="/packages" className="block w-full py-2 text-center text-sm font-semibold text-gray-400 hover:text-sunset transition-colors">
                          View all results for "{searchTerm}"
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Hero Stats */}
      <div className="absolute bottom-10 left-0 right-0 z-10 hidden lg:block opacity-80 hover:opacity-100 transition-opacity">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center max-w-4xl mx-auto py-8 px-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 text-white/90">
            <div className="text-center">
              <p className="text-3xl font-bold">1500+</p>
              <p className="text-xs text-white/60 font-medium uppercase tracking-widest mt-1">Happy Clients</p>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-3xl font-bold">500+</p>
              <p className="text-xs text-white/60 font-medium uppercase tracking-widest mt-1">Destinations</p>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-3xl font-bold">100+</p>
              <p className="text-xs text-white/60 font-medium uppercase tracking-widest mt-1">Tour Guides</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce flex flex-col items-center gap-2">
        <span className="text-[10px] text-white/40 uppercase font-bold tracking-[0.2em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-sunset to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
