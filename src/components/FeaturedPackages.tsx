// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import PackageCard from "./PackageCard";
// import santoriniImg from "@/assets/destination-santorini.jpg";
// import peruImg from "@/assets/destination-peru.jpg";
// import japanImg from "@/assets/destination-japan.jpg";
// import baliImg from "@/assets/destination-bali.jpg";

// const featuredPackages = [
//   {
//     id: 1,
//     title: " Kashmir Enchanting Package",
//     location: "Kashmir",
//     image: santoriniImg, // image same
//     price: 12752,
//     duration: "5 Days / 4 Nights",
//     rating: 4.9,
//     reviews: 324,
//     groupSize: "2 Person",
//     featured: true,
//     category: "Romantic",
//   },

//   {
//     id: 2,
//     title: "Kashmir Escapade Package",
//     location: " Kashmir",
//     image: peruImg, // image same
//     price: 15300,
//     duration: "6 Days / 5 Nights",
//     rating: 4.8,
//     reviews: 256,
//     groupSize: "2 people",
//     featured: true,
//     category: "Nature",
//   },
//   {
//     id: 3,
//     title: "Kashmir Exotic Package",
//     location: " Kashmir",
//     image: japanImg, // image same
//     price: 19350,
//     duration: "7 Days / 6 Nights",
//     rating: 4.9,
//     reviews: 412,
//     groupSize: "2 people",
//     featured: true,
//     category: "Adventure",
//   },
//   {
//     id: 3,
//     title: "Kashmir Exotic Package",
//     location: "Dal Lake, Srinagar",
//     image: baliImg, // image same
//     price: 16625,
//     duration: "6 Days / 7 Nights",
//     rating: 4.7,
//     reviews: 189,
//     groupSize: "8 people",
//     featured: false,
//     category: "Luxury",
//   },
// ];


// const FeaturedPackages = () => {
//   return (
//     <section className="py-8 md:py-12 bg-background">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
//           <div>
//             <span className="text-sm font-medium text-primary uppercase tracking-wider">
//               Popular Packages
//             </span>
//             <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
//               Featured Travel Packages
//             </h2>
//             <p className="text-muted-foreground mt-3 max-w-xl">
//               Discover our handpicked travel experiences designed to create lasting memories.
//             </p>
//             <p className="text-muted-foreground mt-3 max-w-xl">
//               Valid from 1st Feb 2026 till 15th March 2026            </p>
//           </div>
//           {/* <Link to="/packages">
//             <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
//               View All Packages
//               <ArrowRight className="h-4 w-4" />
//             </Button>
//           </Link>*/}
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
//           {featuredPackages.map((pkg) => (
//             <PackageCard key={pkg.id} pkg={pkg} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedPackages;
import { useEffect, useState } from "react";
import axios from "axios";
import PackageCard from "./PackageCard";

const FeaturedPackages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchPackages = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "https://adsverse.cu.ma/backend/api/public/products.php?user_id=1",
        {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Accept": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log("API FULL RESPONSE:", res.data);

      // ✅ safe handling
      setPackages(res.data?.products || []);

    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
        err.message ||
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  fetchPackages();
}, []);
  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mb-10">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Popular Packages
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Featured Travel Packages
          </h2>

          <p className="mt-3 text-muted-foreground">
            Discover our handpicked travel experiences.
          </p>
        </div>

        {/* Loading */}
        {loading && <p className="text-center">Loading packages...</p>}

        {/* Error */}
        {error && (
          <p className="text-red-500 text-center">{error}</p>
        )}

        {/* Empty */}
        {!loading && !error && packages.length === 0 && (
          <p className="text-center">No packages found</p>
        )}

        {/* Grid */}
        {!loading && !error && packages.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {packages.map((pkg, index) => (
              <PackageCard
                key={pkg.id || index}
                pkg={{
                  ...pkg,
                  title: pkg.name,
                  image: pkg.image_url,
                  price: pkg.price,
                  description: pkg.description,
                }}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default FeaturedPackages;