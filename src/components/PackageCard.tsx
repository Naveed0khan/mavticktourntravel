import { Link } from "react-router-dom";
import { MapPin, Clock, Star, Users, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface PackageProps {
  id: number;
  title: string;
  location: string;
  image: string;
  price: number;
  duration: string;
  rating: number;
  reviews: number;
  groupSize: string;
  featured?: boolean;
  category: string;
}

const PackageCard = ({ pkg }: { pkg: PackageProps }) => {
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the "${pkg.title}" package to ${pkg.location}. Can you provide more details?`
  );
  const whatsappLink = `https://wa.me/?text=${whatsappMessage}`;

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 sm:h-52 md:h-60 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

        {pkg.featured && (
          <Badge className="absolute top-4 left-4 bg-sunset hover:bg-sunset text-primary-foreground">
            Featured
          </Badge>
        )}

        <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-background/90 backdrop-blur-sm">
          <Star className="h-3.5 w-3.5 fill-sunset text-sunset" />
          <span className="text-xs font-medium text-foreground">{pkg.rating}</span>
          <span className="text-xs text-muted-foreground">({pkg.reviews})</span>
        </div>

        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-primary-foreground">
          <MapPin className="h-4 w-4" />
          <span className="text-sm font-medium">{pkg.location}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3 className="font-display text-base sm:text-lg font-semibold text-card-foreground mb-2 sm:mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {pkg.title}
        </h3>

        <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>{pkg.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>{pkg.groupSize}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <p className="text-[10px] text-muted-foreground">From</p>
            <p className="text-lg sm:text-xl font-bold text-primary">
              {pkg.price.toLocaleString()}
              <span className="text-xs sm:text-sm font-normal text-muted-foreground">/person</span>
            </p>
          </div>
          <div className="flex gap-2">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </a>
            <Link to={`/packages/${pkg.id}`}>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
