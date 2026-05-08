import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Plane, ChevronDown, Phone, MapPin, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { allPackages } from "@/data/packages";
import logo from "../../public/marvic_page-0001-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  const popularPackages = allPackages.filter(pkg => pkg.featured).slice(0, 4);

  const links = [
    { name: "Home", path: "/" },
    { name: "Packages", hasDropdown: true },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setMobileDropdown(null);
  }, [location]);

  return (
    <>
      {/* Top Bar - Hidden on mobile for better space */}
      <div className="hidden md:block bg-gradient-to-r from-primary/90 to-primary text-primary-foreground text-sm py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3" />
              <span>+91 9797157962, 8825061623</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3 w-3" />
              <span>Worldwide Destinations</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>24/7 Support</span>
            <span className="h-3 w-px bg-primary-foreground/30"></span>
            <span>Follow us</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
          : "bg-white"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Optimized for mobile */}
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src={logo}
                alt="Maverick Tour and Travels"
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-display text-base sm:text-lg font-bold tracking-tight text-primary">
                  Maverick Tour & Travels
                </span>
                <span className="text-[10px] sm:text-xs text-muted-foreground font-medium line-clamp-1">
                  Explore nature with us
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {links.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.path}
                    className={`
                      flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm
                      transition-all duration-200
                      ${isActive(link.path)
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                      }
                    `}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                    )}
                  </Link>
                  {link.hasDropdown && (
                    <div className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-3">
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2">
                          Popular {link.name.toLowerCase()}
                        </div>
                        {popularPackages.map((item) => (
                          <Link
                            key={item.id}
                            to={`/packages/${item.id}`}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
                          >
                            <Plane className="h-3 w-3" />
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all duration-300 px-6">
                Book Now
              </Button>
            </div>

            {/* Mobile CTA & Menu Button */}
            <div className="flex lg:hidden items-center gap-3">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white shadow-sm text-xs px-4 h-8"
              >
                Book Now
              </Button>
              <button
                className="p-2 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Improved */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-16 z-40 bg-white">
            {/* Overlay for rest of page */}
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Content */}
            <div className="absolute top-0 left-0 right-0 bg-white shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-primary/5 to-secondary/5">
                <div className="flex items-center gap-3 py-2">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <div>
                    <div className="text-xs text-gray-500">24/7 Support</div>
                    <div className="font-semibold text-gray-900 text-sm">
                      +91 9797157962, 8825061623
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <nav className="space-y-1">
                  {links.map((link) => (
                    <div key={link.name}>
                      {link.hasDropdown ? (
                        <>
                          <button
                            onClick={() => setMobileDropdown(
                              mobileDropdown === link.name ? null : link.name
                            )}
                            className={`
                              w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-medium
                              transition-all duration-200 text-left
                              ${isActive(link.path)
                                ? "bg-gradient-to-r from-primary/10 to-secondary/10 text-primary"
                                : "text-gray-700 hover:bg-gray-50"
                              }
                            `}
                          >
                            <span>{link.name}</span>
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-200 ${mobileDropdown === link.name ? "rotate-180" : ""
                                }`}
                            />
                          </button>

                          {mobileDropdown === link.name && (
                            <div className="ml-4 mt-1 mb-2 pl-4 border-l-2 border-primary/20 space-y-1">
                              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-2">
                                Popular Packages
                              </div>
                              {popularPackages.map((item) => (
                                <Link
                                  key={item.id}
                                  to={`/packages/${item.id}`}
                                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setMobileDropdown(null);
                                  }}
                                >
                                  <div className="h-2 w-2 rounded-full bg-primary/60"></div>
                                  <span className="flex-1">{item.title}</span>
                                  <ChevronRight className="h-3 w-3 text-gray-400" />
                                </Link>
                              ))}
                              <Link
                                to="/packages"
                                className="flex items-center justify-center gap-2 px-4 py-3 mt-2 rounded-lg text-sm font-medium bg-gradient-to-r from-primary/5 to-secondary/5 text-primary border border-primary/20 hover:border-primary/40 transition-colors"
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileDropdown(null);
                                }}
                              >
                                View All Packages
                                <ChevronRight className="h-4 w-4" />
                              </Link>
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className={`
                            flex items-center justify-between px-4 py-3.5 rounded-xl font-medium
                            transition-all duration-200
                            ${isActive(link.path)
                              ? "bg-gradient-to-r from-primary/10 to-secondary/10 text-primary"
                              : "text-gray-700 hover:bg-gray-50"
                            }
                          `}
                        >
                          {link.name}
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Additional Mobile Actions */}
                <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      className="w-full border-primary/30 text-primary hover:bg-primary/5"
                    >
                      Call Now
                    </Button>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white">
                      Get Quote
                    </Button>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-gray-700">
                        Ready to book?
                      </span>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md"
                      size="lg"
                    >
                      Book Your Trip Now
                    </Button>
                  </div>
                </div>

                {/* Social/Info Footer */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="text-xs text-gray-500 text-center">
                    <p className="mb-2">© {new Date().getFullYear()} Maverick Tour & Travels</p>
                    <p className="text-gray-400">Explore nature with us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;