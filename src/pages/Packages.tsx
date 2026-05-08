// import { useState, useMemo } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import PackageCard from "@/components/PackageCard";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Search, SlidersHorizontal } from "lucide-react";
// import { allPackages, categories } from "@/data/packages";

// const Packages = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [sortBy, setSortBy] = useState("featured");

//   const filteredPackages = useMemo(() => {
//     let filtered = [...allPackages];

//     // Filter by search query
//     if (searchQuery) {
//       filtered = filtered.filter(
//         (pkg) =>
//           pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           pkg.location.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     // Filter by category
//     if (selectedCategory !== "All") {
//       filtered = filtered.filter((pkg) => pkg.category === selectedCategory);
//     }

//     // Sort
//     switch (sortBy) {
//       case "price-low":
//         filtered.sort((a, b) => a.price - b.price);
//         break;
//       case "price-high":
//         filtered.sort((a, b) => b.price - a.price);
//         break;
//       case "rating":
//         filtered.sort((a, b) => b.rating - a.rating);
//         break;
//       case "featured":
//       default:
//         filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
//     }

//     return filtered;
//   }, [searchQuery, selectedCategory, sortBy]);

//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />

//       {/* Page Header */}
//       <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-muted">
//         <div className="container mx-auto px-4">
//           <div className="text-center max-w-2xl mx-auto">
//             <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
//               Travel Packages
//             </h1>
//             <p className="text-muted-foreground">
//               Explore our collection of handcrafted travel experiences. From beach getaways to cultural adventures, find your perfect trip.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Filters */}
//       <section className="py-6 border-b border-border sticky top-16 md:top-20 bg-background/95 backdrop-blur-md z-40">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//             {/* Search */}
//             <div className="relative w-full md:w-80">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//               <Input
//                 type="text"
//                 placeholder="Search destinations..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="pl-10"
//               />
//             </div>

//             <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
//               {/* Categories */}
//               <div className="flex gap-2 flex-wrap">
//                 {categories.map((category) => (
//                   <Button
//                     key={category}
//                     variant={selectedCategory === category ? "default" : "outline"}
//                     size="sm"
//                     onClick={() => setSelectedCategory(category)}
//                     className={
//                       selectedCategory === category
//                         ? "bg-primary text-primary-foreground"
//                         : "border-border text-foreground hover:bg-muted"
//                     }
//                   >
//                     {category}
//                   </Button>
//                 ))}
//               </div>

//               {/* Sort */}
//               <Select value={sortBy} onValueChange={setSortBy}>
//                 <SelectTrigger className="w-40">
//                   <SlidersHorizontal className="h-4 w-4 mr-2" />
//                   <SelectValue placeholder="Sort by" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="featured">Featured</SelectItem>
//                   <SelectItem value="price-low">Price: Low to High</SelectItem>
//                   <SelectItem value="price-high">Price: High to Low</SelectItem>
//                   <SelectItem value="rating">Top Rated</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Packages Grid */}
//       <section className="py-12 md:py-16">
//         <div className="container mx-auto px-4">
//           {filteredPackages.length > 0 ? (
//             <>
//               <p className="text-sm text-muted-foreground mb-6">
//                 Showing {filteredPackages.length} package{filteredPackages.length !== 1 ? "s" : ""}
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                 {filteredPackages.map((pkg) => (
//                   <PackageCard key={pkg.id} pkg={pkg} />
//                 ))}
//               </div>
//             </>
//           ) : (
//             <div className="text-center py-16">
//               <p className="text-xl font-medium text-foreground mb-2">No packages found</p>
//               <p className="text-muted-foreground">Try adjusting your search or filters</p>
//               <Button
//                 variant="outline"
//                 className="mt-4"
//                 onClick={() => {
//                   setSearchQuery("");
//                   setSelectedCategory("All");
//                 }}
//               >
//                 Clear Filters
//               </Button>
//             </div>
//           )}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Packages;
import { useEffect, useState } from "react";
import Papa from "papaparse";

export default function Packages() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const url =
      "http://localhost/backend/api/public/products.php?user_id=3";

    Papa.parse(url, {
      download: true,
      header: true,
      complete: (result) => {
        console.log(result.data);
        setPackages(result.data);
      },
    });
  }, []);

  return (
    <div>
      <h1>Packages</h1>

      {packages.map((pkg, index) => (
        <div key={index} style={{border:"1px solid #ddd", padding:20, margin:10}}>
          <h2>{pkg.title}</h2>
          <p>{pkg.location}</p>
          <p>{pkg.duration}</p>
          <p>Pax: {pkg.pax}</p>
          <p>₹ {pkg.perPerson}</p>
        </div>
      ))}
    </div>
  );
}
