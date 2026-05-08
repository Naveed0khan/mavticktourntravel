import { Link } from "react-router-dom";
import { Plane, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import logo from "../../public/marvic_page-0001.jpg"
const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="Maverick Tour and Travels"
                className="h-10 w-10 object-contain"
              />
              <span className="font-display text-xl font-bold">
                Maverick Tour and Travels
              </span>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Discover the world with us. We create unforgettable travel experiences tailored to your dreams.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Packages", "Destinations", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Destinations</h4>
            <ul className="space-y-3">
              {["Srinagar",
                "Gulmarg",
                "Pahalgam",
                "Sonamarg",
                "Dal Lake",
                "Tulip Garden"].map((dest) => (
                  <li key={dest}>
                    <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                      {dest}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm opacity-80">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Badu Bagh Khanyar near Katriv Brang Masjid Srinagar Kashmir 190003</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-80">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+91 9797157962, 8825061623</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-80">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@rMaverickTravels.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-sm opacity-60">
          <p>© {new Date().getFullYear()} Maverick Tour and Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
