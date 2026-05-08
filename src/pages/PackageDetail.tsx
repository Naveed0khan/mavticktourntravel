// // // import { useParams, Link, useNavigate } from "react-router-dom";
// // // import {
// // //   MapPin,
// // //   Clock,
// // //   Star,
// // //   Users,
// // //   ArrowLeft,
// // //   MessageCircle,
// // //   Calendar,
// // //   CheckCircle,
// // // } from "lucide-react";
// // // import { Button } from "@/components/ui/button";
// // // import { Badge } from "@/components/ui/badge";
// // // import Navbar from "@/components/Navbar";
// // // import Footer from "@/components/Footer";
// // // import { allPackages } from "@/data/packages";

// // // const PackageDetail = () => {
// // //   const { id } = useParams();
// // //   const navigate = useNavigate();

// // //   const pkg = allPackages.find((p) => p.id === Number(id));

// // //   if (!pkg) {
// // //     return (
// // //       <div className="min-h-screen bg-background">
// // //         <Navbar />
// // //         <div className="container mx-auto px-4 py-32 text-center">
// // //           <h1 className="text-2xl font-bold mb-4">Package not found</h1>
// // //           <Link to="/packages">
// // //             <Button>View All Packages</Button>
// // //           </Link>
// // //         </div>
// // //         <Footer />
// // //       </div>
// // //     );
// // //   }

// // //   const highlights = [
// // //     "Professional tour guide included",
// // //     "All accommodation covered",
// // //     "Airport transfers included",
// // //     "Daily breakfast & select meals",
// // //     "All sightseeing included",
// // //     "24/7 travel support",
// // //   ];

// // //   return (
// // //     <div className="min-h-screen bg-background">
// // //       <Navbar />

// // //       {/* HERO */}
// // //       <section className="relative h-[55vh]">
// // //         <img
// // //           src={pkg.image}
// // //           alt={pkg.title}
// // //           className="w-full h-full object-cover"
// // //         />
// // //         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

// // //         <Button
// // //           variant="outline"
// // //           size="sm"
// // //           className="absolute top-24 left-6 bg-white"
// // //           onClick={() => navigate(-1)}
// // //         >
// // //           <ArrowLeft className="h-4 w-4 mr-2" /> Back
// // //         </Button>

// // //         {pkg.featured && (
// // //           <Badge className="absolute top-24 right-6 bg-orange-500 text-white">
// // //             Featured
// // //           </Badge>
// // //         )}
// // //       </section>

// // //       {/* CONTENT */}
// // //       <section className="container mx-auto px-4 -mt-20 pb-16 relative z-10">
// // //         <div className="grid lg:grid-cols-3 gap-8">
// // //           {/* LEFT CONTENT */}
// // //           <div className="lg:col-span-2 space-y-8">
// // //             {/* TITLE CARD */}
// // //             <div className="bg-card p-6 rounded-2xl shadow">
// // //               <div className="flex items-center gap-2 text-muted-foreground">
// // //                 <MapPin className="h-4 w-4" />
// // //                 {pkg.location}
// // //               </div>

// // //               <h1 className="text-3xl md:text-4xl font-bold mt-2">
// // //                 {pkg.title}
// // //               </h1>

// // //               <div className="flex flex-wrap gap-3 mt-4">
// // //                 <Badge variant="secondary">
// // //                   <Clock className="h-4 w-4 mr-1" />
// // //                   {pkg.duration}
// // //                 </Badge>

// // //                 <Badge variant="secondary">
// // //                   <Users className="h-4 w-4 mr-1" />
// // //                   Multiple Pax Options
// // //                 </Badge>

// // //                 <Badge variant="secondary">
// // //                   <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
// // //                   {pkg.rating} ({pkg.reviews} reviews)
// // //                 </Badge>

// // //                 <Badge variant="outline">{pkg.category}</Badge>
// // //               </div>
// // //             </div>

// // //             {/* DESCRIPTION */}
// // //             <div className="bg-card p-6 rounded-2xl shadow">
// // //               <h2 className="text-xl font-semibold mb-3">
// // //                 About This Trip
// // //               </h2>
// // //               <p className="text-muted-foreground leading-relaxed">
// // //                 {pkg.description}
// // //               </p>
// // //                 <h2 className="text-xl font-semibold mb-3">
// // //                Day 01: Arrive – Srinagar Airport – Local Sightseen
// // //               </h2>
// // //                <p className="text-muted-foreground leading-relaxed">
// // //                 {pkg.Day1}
// // //               </p>
// // //                     <h2 className="text-xl font-semibold mb-3">
// // //               Day 02: Srinagar – Sonamarg 
// // //               </h2>
// // //                <p className="text-muted-foreground leading-relaxed">
// // //                 {pkg.Day2}
// // //               </p>
// // //                     <h2 className="text-xl font-semibold mb-3">
// // //               Day 03:  Sonamarg Gulmarg 
// // //               </h2>
// // //                <p className="text-muted-foreground leading-relaxed">
// // //                 {pkg.Day3}
// // //               </p>
// // //                     <h2 className="text-xl font-semibold mb-3">
// // //                Day 04: Gulmarg – Pahalgham
// // //               </h2>
// // //                <p className="text-muted-foreground leading-relaxed">
// // //                 {pkg.Day4}
// // //               </p>
// // //                     <h2 className="text-xl font-semibold mb-3">
// // //               Day 05: Pahalgam – Pahalgham
// // //               </h2>
// // //                <p className="text-muted-foreground leading-relaxed">
// // //                 {pkg.Day5}
// // //               </p>
// // //                     <h2 className="text-xl font-semibold mb-3">
// // //               Day 06: Pahalgham – Srinagar
// // //               </h2>
// // //                <p className="text-muted-foreground leading-relaxed">
// // //                 {pkg.Day6}</p>
// // //               <h2 className="text-xl font-semibold mb-3">
// // //               Day 07: Srinagar – Airport Drop
// // //               </h2>
// // //                <p className="text-muted-foreground leading-relaxed">
// // //                 {pkg.Day7}
// // //               </p>
            
// // //             </div>

// // //             {/* HIGHLIGHTS */}
// // //             <div className="bg-card p-6 rounded-2xl shadow">
// // //               <h2 className="text-xl font-semibold mb-4">
// // //                 What's Included
// // //               </h2>
// // //               <div className="grid sm:grid-cols-2 gap-3">
// // //                 {highlights.map((item, index) => (
// // //                   <div key={index} className="flex gap-2">
// // //                     <CheckCircle className="text-green-500 h-5 w-5" />
// // //                     <span className="text-muted-foreground">
// // //                       {item}
// // //                     </span>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* RIGHT SIDEBAR – PRICING TABLE */}
// // //           <div className="lg:col-span-1">
// // //             <div className="bg-card rounded-2xl p-6 shadow sticky top-24">
// // //               <h3 className="text-lg font-semibold mb-4">
// // //                 Package Pricing
// // //               </h3>

// // //               <div className="space-y-3">
// // //                 {pkg.pricing.map((price) => {
// // //                   const whatsappMessage = encodeURIComponent(
// // //                     `Hi! I'm interested in the "${pkg.title}" package.\n\n` +
// // //                       `📍 Location: ${pkg.location}\n` +
// // //                       `👥 Travellers: ${price.pax}\n` +
// // //                       `💰 Price: ₹${price.perPerson}/person\n` +
// // //                       `🧾 Total: ₹${price.total}\n\n` +
// // //                       `Please share availability & details.`
// // //                   );

// // //                   return (
// // //                     <div
// // //                       key={price.pax}
// // //                       className="border rounded-xl p-4 flex items-center justify-between hover:border-primary transition"
// // //                     >
// // //                       <div>
// // //                         <p className="font-semibold text-sm">
// // //                           {price.pax} Pax
// // //                         </p>
// // //                         <p className="text-sm text-muted-foreground">
// // //                           ₹{price.perPerson.toLocaleString()} / person
// // //                         </p>
// // //                         <p className="text-xs text-muted-foreground">
// // //                           Total: ₹{price.total.toLocaleString()}
// // //                         </p>
// // //                       </div>

// // //                       <a
// // //                         href={`https://wa.me/+919797157962/?text=${whatsappMessage}`}
// // //                         target="_blank"
// // //                         rel="noopener noreferrer"
// // //                       >
      
// // //                         <Button
// // //                           size="sm"
// // //                           className="bg-green-600 hover:bg-green-700"
// // //                         >
// // //                           <MessageCircle className="h-4 w-4 mr-1" />
// // //                           Book
// // //                         </Button>
// // //                       </a>
// // //                     </div>
// // //                   );
// // //                 })}
// // //               </div>

// // //               <div className="mt-6 pt-4 border-t">
// // //                 <Button variant="outline" className="w-full">
// // //                   <Calendar className="h-5 w-5 mr-2" />
// // //                   Check Availability
// // //                 </Button>

// // //                 <p className="text-xs text-muted-foreground text-center mt-3">
// // //                   Prices may vary based on season & availability
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       <Footer />
// // //     </div>
// // //   );
// // // };

// // // export default PackageDetail;
// // import { useParams, Link, useNavigate } from "react-router-dom";
// // import {
// //   MapPin,
// //   Clock,
// //   Star,
// //   Users,
// //   ArrowLeft,
// //   MessageCircle,
// //   Calendar,
// //   CheckCircle,
// //   Menu,
// //   X,
// // } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { Badge } from "@/components/ui/badge";
// // import Navbar from "@/components/Navbar";
// // import Footer from "@/components/Footer";
// // import { allPackages } from "@/data/packages";
// // import { useState, useEffect } from "react";

// // const PackageDetail = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// //   const pkg = allPackages.find((p) => p.id === Number(id));

// //   if (!pkg) {
// //     return (
// //       <div className="min-h-screen bg-background">
// //         <Navbar />
// //         <div className="container mx-auto px-4 py-32 text-center">
// //           <h1 className="text-2xl font-bold mb-4">Package not found</h1>
// //           <Link to="/packages">
// //             <Button>View All Packages</Button>
// //           </Link>
// //         </div>
// //         <Footer />
// //       </div>
// //     );
// //   }

// //   const highlights = [
// //     "Professional tour guide included",
// //     "All accommodation covered",
// //     "Airport transfers included",
// //     "Daily breakfast & select meals",
// //     "All sightseeing included",
// //     "24/7 travel support",
// //   ];

// //   // Close mobile menu on resize
// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth >= 1024) {
// //         setIsMobileMenuOpen(false);
// //       }
// //     };
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-background">
// //       <Navbar />

// //       {/* HERO SECTION */}
// //       <section className="relative h-[40vh] md:h-[50vh] lg:h-[55vh]">
// //         <img
// //           src={pkg.image}
// //           alt={pkg.title}
// //           className="w-full h-full object-cover"
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

// //         {/* BACK BUTTON - Mobile Optimized */}
// //         <div className="absolute top-4 left-4 md:top-6 md:left-6">
// //           <Button
// //             variant="outline"
// //             size="sm"
// //             className="bg-white/90 backdrop-blur-sm hover:bg-white"
// //             onClick={() => navigate(-1)}
// //           >
// //             <ArrowLeft className="h-4 w-4 mr-2" />
// //             <span className="hidden sm:inline">Back</span>
// //           </Button>
// //         </div>

// //         {/* FEATURED BADGE - Mobile Optimized */}
// //         {pkg.featured && (
// //           <Badge className="absolute top-4 right-4 md:top-6 md:right-6 bg-orange-500 text-white text-xs md:text-sm">
// //             Featured
// //           </Badge>
// //         )}
// //       </section>

// //       {/* MAIN CONTENT */}
// //       <section className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-4 -mt-12 md:-mt-16 lg:-mt-20 pb-8 md:pb-16 relative z-10">
// //         <div className="grid lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
// //           {/* LEFT CONTENT - Full width on mobile */}
// //           <div className="lg:col-span-2 space-y-4 md:space-y-6 lg:space-y-8">
// //             {/* TITLE CARD */}
// //             <div className="bg-card p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl shadow-sm md:shadow">
// //               <div className="flex items-center gap-1.5 md:gap-2 text-sm md:text-base text-muted-foreground">
// //                 <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0" />
// //                 <span className="truncate">{pkg.location}</span>
// //               </div>

// //               <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-1 md:mt-2 leading-tight">
// //                 {pkg.title}
// //               </h1>

// //               <div className="flex flex-wrap gap-2 md:gap-3 mt-3 md:mt-4">
// //                 <Badge variant="secondary" className="text-xs md:text-sm">
// //                   <Clock className="h-3 w-3 md:h-4 md:w-4 mr-1" />
// //                   {pkg.duration}
// //                 </Badge>

// //                 <Badge variant="secondary" className="text-xs md:text-sm">
// //                   <Users className="h-3 w-3 md:h-4 md:w-4 mr-1" />
// //                   <span className="hidden xs:inline">Multiple</span> Pax
// //                 </Badge>

// //                 <Badge variant="secondary" className="text-xs md:text-sm">
// //                   <Star className="h-3 w-3 md:h-4 md:w-4 mr-1 fill-yellow-400 text-yellow-400" />
// //                   {pkg.rating} ({pkg.reviews})
// //                 </Badge>

// //                 <Badge variant="outline" className="text-xs md:text-sm">
// //                   {pkg.category}
// //                 </Badge>
// //               </div>
// //             </div>

// //             {/* DESCRIPTION & ITINERARY */}
// //             <div className="bg-card p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl shadow-sm md:shadow">
// //               <h2 className="text-lg sm:text-xl md:text-xl font-semibold mb-2 md:mb-3">
// //                 About This Trip
// //               </h2>
// //               <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
// //                 {pkg.description}
// //               </p>

// //               {/* MOBILE ITINERARY TOGGLE */}
// //               <div className="lg:hidden mb-4">
// //                 <Button
// //                   variant="outline"
// //                   className="w-full"
// //                   onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //                 >
// //                   {isMobileMenuOpen ? (
// //                     <>
// //                       <X className="h-4 w-4 mr-2" />
// //                       Hide Itinerary
// //                     </>
// //                   ) : (
// //                     <>
// //                       <Menu className="h-4 w-4 mr-2" />
// //                       Show Itinerary ({pkg.duration})
// //                     </>
// //                   )}
// //                 </Button>
// //               </div>

// //               {/* ITINERARY - Desktop always visible, mobile toggle */}
// //               <div
// //                 className={`${
// //                   isMobileMenuOpen ? "block" : "hidden"
// //                 } lg:block space-y-4 md:space-y-5`}
// //               >
// //                 {[1, 2, 3, 4, 5, 6, 7].map((day) => {
// //                   const dayKey = `Day${day}` as keyof typeof pkg;
// //                   const dayContent = pkg[dayKey] as string;
// //                   if (!dayContent) return null;

// //                   return (
// //                     <div key={day} className="pb-3 md:pb-4 border-b last:border-0">
// //                       <h3 className="text-base sm:text-lg font-semibold mb-2 flex items-center gap-2">
// //                         <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
// //                           Day {day}
// //                         </span>
// //                         <span className="text-muted-foreground text-sm md:text-base">
// //                           {getDayTitle(day, pkg.location)}
// //                         </span>
// //                       </h3>
// //                       <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
// //                         {dayContent}
// //                       </p>
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //             </div>

// //             {/* HIGHLIGHTS */}
// //             <div className="bg-card p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl shadow-sm md:shadow">
// //               <h2 className="text-lg sm:text-xl md:text-xl font-semibold mb-3 md:mb-4">
// //                 What's Included
// //               </h2>
// //               <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 md:gap-3">
// //                 {highlights.map((item, index) => (
// //                   <div key={index} className="flex gap-2 items-start">
// //                     <CheckCircle className="text-green-500 h-4 w-4 md:h-5 md:w-5 mt-0.5 flex-shrink-0" />
// //                     <span className="text-xs sm:text-sm md:text-base text-muted-foreground">
// //                       {item}
// //                     </span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>

// //           {/* RIGHT SIDEBAR - PRICING TABLE */}
// //           <div className="lg:col-span-1">
// //             <div className="bg-card rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm md:shadow lg:sticky lg:top-24">
// //               <h3 className="text-base sm:text-lg md:text-lg font-semibold mb-3 md:mb-4">
// //                 Package Pricing
// //               </h3>

// //               <div className="space-y-2 md:space-y-3">
// //                 {pkg.pricing.map((price) => {
// //                   const whatsappMessage = encodeURIComponent(
// //                     `Hi! I'm interested in the "${pkg.title}" package.\n\n` +
// //                       `📍 Location: ${pkg.location}\n` +
// //                       `👥 Travellers: ${price.pax}\n` +
// //                       `💰 Price: ₹${price.perPerson}/person\n` +
// //                       `🧾 Total: ₹${price.total}\n\n` +
// //                       `Please share availability & details.`
// //                   );

// //                   return (
// //                     <div
// //                       key={price.pax}
// //                       className="border rounded-lg md:rounded-xl p-3 md:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-primary transition-colors"
// //                     >
// //                       <div className="flex-1">
// //                         <p className="font-semibold text-sm md:text-sm">
// //                           {price.pax} Pax
// //                         </p>
// //                         <div className="flex flex-wrap gap-1 md:gap-2 text-xs md:text-sm text-muted-foreground">
// //                           <span>₹{price.perPerson.toLocaleString()}/person</span>
// //                           <span className="hidden xs:inline">•</span>
// //                           <span>Total: ₹{price.total.toLocaleString()}</span>
// //                         </div>
// //                       </div>

// //                       <a
// //                         href={`https://wa.me/+919797157962/?text=${whatsappMessage}`}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                         className="w-full sm:w-auto"
// //                       >
// //                         <Button
// //                           size="sm"
// //                           className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-xs md:text-sm"
// //                         >
// //                           <MessageCircle className="h-3.5 w-3.5 md:h-4 md:w-4 mr-1.5" />
// //                           Book Now
// //                         </Button>
// //                       </a>
// //                     </div>
// //                   );
// //                 })}
// //               </div>

// //               <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t">
// //                 <Button variant="outline" className="w-full text-sm md:text-base">
// //                   <Calendar className="h-4 w-4 md:h-5 md:w-5 mr-2" />
// //                   Check Availability
// //                 </Button>

// //                 <p className="text-xs text-muted-foreground text-center mt-2 md:mt-3">
// //                   Prices may vary based on season & availability
// //                 </p>
// //               </div>

// //               {/* MOBILE QUICK ACTION BAR */}
// //               <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t p-3 flex gap-2 z-50">
// //                 <Button
// //                   variant="outline"
// //                   className="flex-1 text-sm"
// //                   onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
// //                 >
// //                   <Calendar className="h-4 w-4 mr-2" />
// //                   Pricing
// //                 </Button>
// //                 <a
// //                   href={`https://wa.me/+919797157962/?text=${encodeURIComponent(
// //                     `Hi! I'm interested in the "${pkg.title}" package.`
// //                   )}`}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="flex-1"
// //                 >
// //                   <Button className="w-full bg-green-600 hover:bg-green-700 text-sm">
// //                     <MessageCircle className="h-4 w-4 mr-2" />
// //                     Book Now
// //                   </Button>
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <Footer />
// //     </div>
// //   );
// // };

// // // Helper function for day titles
// // const getDayTitle = (day: number, location: string) => {
// //   const titles: Record<number, string> = {
// //     1: `Arrive – ${location} Airport – Local Sightseeing`,
// //     2: `${location} – Sonamarg`,
// //     3: `Sonamarg – Gulmarg`,
// //     4: `Gulmarg – Pahalgam`,
// //     5: `Pahalgam Sightseeing`,
// //     6: `Pahalgam – ${location}`,
// //     7: `${location} – Airport Drop`,
// //   };
// //   return titles[day] || `Day ${day}`;
// // };

// // export default PackageDetail;
// import { useParams, Link, useNavigate } from "react-router-dom";
// import {
//   MapPin,
//   Clock,
//   Star,
//   Users,
//   ArrowLeft,
//   MessageCircle,
//   Calendar,
//   CheckCircle,
//   Menu,
//   X,
//   ChevronRight,
//   Camera,
//   Image as ImageIcon,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { allPackages } from "@/data/packages";
// import { useState, useEffect } from "react";

// // Sample images - replace with your actual image URLs
// const ITINERARY_IMAGES = [
//   "https://images.unsplash.com/photo-1593693399741-49d0d9a744e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Day 1
//   "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Day 2
//   "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Day 3
//   "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Day 4
//   "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Day 5
//   "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Day 6
//   "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Day 7
// ];

// const GALLERY_IMAGES = [
//   "https://images.unsplash.com/photo-1593693399741-49d0d9a744e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//   "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//   "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//   "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//   "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//   "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//   "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//   "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// ];

// const PackageDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);
//   const [isImageModalOpen, setIsImageModalOpen] = useState(false);
//   const [showAllGallery, setShowAllGallery] = useState(false);

//   const pkg = allPackages.find((p) => p.id === Number(id));

//   if (!pkg) {
//     return (
//       <div className="min-h-screen bg-background">
//         <Navbar />
//         <div className="container mx-auto px-4 py-32 text-center">
//           <h1 className="text-2xl font-bold mb-4">Package not found</h1>
//           <Link to="/packages">
//             <Button>View All Packages</Button>
//           </Link>
//         </div>
//         <Footer />
//       </div>
//     );
//   }

//   const highlights = [
//     "Professional tour guide included",
//     "All accommodation covered",
//     "Airport transfers included",
//     "Daily breakfast & select meals",
//     "All sightseeing included",
//     "24/7 travel support",
//   ];

//   const itinerary = Object.keys(pkg)
//   .filter((key) => key.startsWith("Day")) // find Day1, Day2...
//   .map((key) => {
//     const dayNumber = key.replace("Day", "");

//     return {
//       day: Number(dayNumber),
//       title: pkg[`titled${dayNumber}`] || `Day ${dayNumber}`,
//       description: pkg[key],
//       highlights: pkg[`highlights${dayNumber}`]
//         ? pkg[`highlights${dayNumber}`].split(",")
//         : ["Sightseeing", "Hotel Stay", "Meals", "Transport"],
//     };
//   })
//   .sort((a, b) => a.day - b.day); // VERY IMPORTANT (keeps order correct)


//   // Close mobile menu on resize
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setIsMobileMenuOpen(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Image Modal
//   const ImageModal = () => {
//     if (!isImageModalOpen || !selectedImage) return null;

//     return (
//       <div 
//         className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
//         onClick={() => setIsImageModalOpen(false)}
//       >
//         <div className="relative max-w-4xl max-h-[90vh] w-full">
//           <Button
//             variant="ghost"
//             size="icon"
//             className="absolute -top-10 right-0 text-white hover:bg-white/20"
//             onClick={() => setIsImageModalOpen(false)}
//           >
//             <X className="h-6 w-6" />
//           </Button>
//           <img
//             src={selectedImage}
//             alt="Preview"
//             className="w-full h-full object-contain rounded-lg"
//           />
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
//       <ImageModal />

//       {/* HERO SECTION */}
//       <section className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src={pkg.image}
//             alt={pkg.title}
//             className="w-full h-full object-cover"
//             loading="eager"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//         </div>

//         {/* BACK BUTTON */}
//         <div className="absolute top-4 left-4 md:top-6 md:left-6">
//           <Button
//             variant="outline"
//             size="sm"
//             className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
//             onClick={() => navigate(-1)}
//           >
//             <ArrowLeft className="h-4 w-4 mr-2" />
//             <span className="hidden sm:inline">Back</span>
//           </Button>
//         </div>

//         {/* FEATURED BADGE */}
//         {pkg.featured && (
//           <Badge className="absolute top-4 right-4 md:top-6 md:right-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs md:text-sm shadow-lg border-0">
//             <Star className="h-3 w-3 mr-1 fill-white" />
//             Featured
//           </Badge>
//         )}

//         {/* HERO CONTENT */}
//         <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
//           <div className="container mx-auto">
//             <div className="flex items-center gap-2 text-white/90 mb-2">
//               <MapPin className="h-4 w-4" />
//               <span className="text-sm md:text-base">{pkg.location}</span>
//             </div>
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
//               {pkg.title}
//             </h1>
//             <div className="flex flex-wrap gap-2">
//               <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
//                 <Clock className="h-3 w-3 mr-1" />
//                 {pkg.duration}
//               </Badge>
//               <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
//                 <Users className="h-3 w-3 mr-1" />
//                 Group & Solo
//               </Badge>
//               <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
//                 <Star className="h-3 w-3 mr-1 fill-yellow-300" />
//                 {pkg.rating} ({pkg.reviews} reviews)
//               </Badge>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* MAIN CONTENT */}
//       <section className="container mx-auto px-4 py-6 md:py-8">
//         <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
//           {/* LEFT CONTENT */}
//           <div className="lg:col-span-2 space-y-6 md:space-y-8">
//             {/* DESCRIPTION */}
//             <div className="bg-card p-5 md:p-6 rounded-2xl shadow-sm border">
//               <h2 className="text-xl md:text-2xl font-bold mb-4">
//                 About This Journey
//               </h2>
//               <p className="text-muted-foreground leading-relaxed mb-6">
//                 {pkg.description}
//               </p>

//               {/* ITINERARY TOGGLE - Mobile Only */}
//               <div className="lg:hidden mb-6">
//                 <Button
//                   variant="outline"
//                   className="w-full"
//                   onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 >
//                   {isMobileMenuOpen ? (
//                     <>
//                       <X className="h-4 w-4 mr-2" />
//                       Hide Day-by-Day Itinerary
//                     </>
//                   ) : (
//                     <>
//                       <Menu className="h-4 w-4 mr-2" />
//                       Show Detailed Itinerary
//                     </>
//                   )}
//                 </Button>
//               </div>

//               {/* ITINERARY WITHOUT IMAGES */}
//               <div className={`${isMobileMenuOpen ? "block" : "hidden"} lg:block`}>
//                 <div className="space-y-6">
//                   {itinerary.map((item) => (
//                     <div
//                       key={item.day}
//                       className="p-4 md:p-5 rounded-xl border hover:border-primary/50 hover:bg-muted/10 transition-all duration-300"
//                     >
//                       <div className="flex items-start gap-4">
//                         {/* Day Number */}
//                         <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex flex-col items-center justify-center">
//                           <span className="text-xs text-muted-foreground">Day</span>
//                           <span className="text-lg md:text-xl font-bold text-primary">{item.day}</span>
//                         </div>
                        
//                         {/* Content */}
//                         <div className="flex-1">
//                           <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
//                             <h3 className="text-lg md:text-xl font-bold mb-1">
//                               {item.title}
//                             </h3>
//                           </div>
//                           <p className="text-muted-foreground mb-3">
//                             {item.description}
//                           </p>
                          
//                           {/* Highlights */}
//                           <div className="flex flex-wrap gap-2">
//                             {item.highlights.map((highlight, idx) => (
//                               <Badge 
//                                 key={idx} 
//                                 variant="secondary" 
//                                 className="text-xs bg-muted/50 hover:bg-muted"
//                               >
//                                 <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
//                                 {highlight}
//                               </Badge>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* HIGHLIGHTS */}
//             <div className="bg-card p-5 md:p-6 rounded-2xl shadow-sm border">
//               <h2 className="text-xl md:text-2xl font-bold mb-4">
//                 What's Included
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 {highlights.map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
//                   >
//                     <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                     </div>
//                     <span className="font-medium">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDEBAR - PRICING */}
//           <div className="lg:col-span-1">
//             <div id="pricing" className="bg-card rounded-2xl p-5 md:p-6 shadow-lg border sticky top-24">
//               <div className="mb-6">
//                 <h3 className="text-lg md:text-xl font-bold mb-2">
//                   Package Pricing
//                 </h3>
//                 <p className="text-sm text-muted-foreground">
//                   All prices include taxes and service charges
//                 </p>
//               </div>

//               <div className="space-y-3">
//                 {pkg.pricing.map((price) => {
//                   const whatsappMessage = encodeURIComponent(
//                     `Hi! I'm interested in the "${pkg.title}" package.\n\n` +
//                     `📍 Location: ${pkg.location}\n` +
//                     `👥 Travellers: ${price.pax}\n` +
//                     `💰 Price: ₹${price.perPerson}/person\n` +
//                     `🧾 Total: ₹${price.total}\n` +
//                     `📅 Duration: ${pkg.duration}\n\n` +
//                     `Please share availability & booking details.`
//                   );

//                   return (
//                     <div
//                       key={price.pax}
//                       className="border rounded-xl p-4 hover:border-primary hover:shadow-md transition-all bg-gradient-to-br from-white to-muted/20"
//                     >
//                       <div className="flex justify-between items-start mb-3">
//                         <div>
//                           <p className="font-bold text-lg">
//                             {price.pax} {price.pax === "1" ? "Person" : "People"}
//                           </p>
//                           <p className="text-sm text-muted-foreground">
//                             Best for {price.pax === "1" ? "solo travelers" : price.pax === "2" ? "couples" : "groups"}
//                           </p>
//                         </div>
//                         <Badge className="bg-primary/10 text-primary">
//                           Popular
//                         </Badge>
//                       </div>
                      
//                       <div className="space-y-2 mb-4">
//                         <div className="flex justify-between items-center">
//                           <span className="text-sm">Per Person</span>
//                           <span className="font-bold text-lg">₹{price.perPerson.toLocaleString()}</span>
//                         </div>
//                         <div className="flex justify-between items-center border-t pt-2">
//                           <span className="font-medium">Total Package</span>
//                           <span className="font-bold text-xl text-primary">₹{price.total.toLocaleString()}</span>
//                         </div>
//                       </div>

//                       <a
//                         href={`https://wa.me/+919797157962/?text=${whatsappMessage}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="block"
//                       >
//                         <Button
//                           size="lg"
//                           className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg"
//                         >
//                           <MessageCircle className="h-5 w-5 mr-2" />
//                           Book on WhatsApp
//                         </Button>
//                       </a>
//                     </div>
//                   );
//                 })}
//               </div>

//               <div className="mt-6 pt-6 border-t">
//                 <div className="space-y-3">
//                   <Button variant="outline" className="w-full">
//                     <Calendar className="h-5 w-5 mr-2" />
//                     Check Availability
//                   </Button>
                  
//                   {/* <Button variant="outline" className="w-full">
//                     <Star className="h-5 w-5 mr-2" />
//                     Download Brochure
//                   </Button> */}
//                 </div>

//                 <div className="mt-4 p-3 bg-muted/30 rounded-lg">
//                   <p className="text-xs text-muted-foreground text-center">
//                    Best Price Guarantee<br />
//                     {/* ✅ Free Cancellation up to 7 days<br /> */}
//                     24/7 Customer Support
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* MOBILE QUICK ACTIONS */}
//             <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t shadow-lg p-3 flex gap-2 z-50">
//               <Button
//                 variant="outline"
//                 className="flex-1"
//                 onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
//               >
//                 <Calendar className="h-4 w-4 mr-2" />
//                 Pricing
//               </Button>
//               <a
//                 href={`https://wa.me/+919797157962/?text=${encodeURIComponent(
//                   `Hi! I want to book "${pkg.title}" package`
//                 )}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex-1"
//               >
//                 <Button className="w-full bg-gradient-to-r from-green-600 to-green-700">
//                   <MessageCircle className="h-4 w-4 mr-2" />
//                   Book Now
//                 </Button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* GALLERY SECTION - AT THE BOTTOM */}
//       <section className="py-8 md:py-12 bg-muted/30">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8">
//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2">
//                 <Camera className="h-6 w-6 md:h-7 md:w-7 text-primary" />
//                 Photo Gallery
//               </h2>
//               <p className="text-muted-foreground">
//                 Explore the beautiful moments from this journey
//               </p>
//             </div>
//             <Button 
//               variant="ghost" 
//               className="mt-2 md:mt-0"
//               onClick={() => setShowAllGallery(!showAllGallery)}
//             >
//               {showAllGallery ? "Show Less" : "View All"} 
//               <ChevronRight className={`h-4 w-4 ml-1 transition-transform ${showAllGallery ? "rotate-90" : ""}`} />
//             </Button>
//           </div>

//           {/* GALLERY GRID */}
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
//             {GALLERY_IMAGES.slice(0, showAllGallery ? GALLERY_IMAGES.length : 8).map((img, index) => (
//               <button
//                 key={index}
//                 className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden group"
//                 onClick={() => {
//                   setSelectedImage(img);
//                   setIsImageModalOpen(true);
//                 }}
//               >
//                 <img
//                   src={img}
//                   alt={`Gallery ${index + 1}`}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//                   <p className="text-white text-sm font-medium">Photo {index + 1}</p>
//                 </div>
//                 <div className="absolute top-2 right-2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                   <ImageIcon className="h-4 w-4 text-white" />
//                 </div>
//               </button>
//             ))}
//           </div>

//           {/* ITINERARY GALLERY
//           <div className="mt-10 md:mt-12">
//             <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Journey Highlights</h3>
//             <div className="overflow-x-auto pb-4 scrollbar-hide">
//               <div className="flex gap-3 md:gap-4 min-w-max">
//                 {itinerary.map((item, index) => (
//                   <div
//                     key={item.day}
//                     className="flex-shrink-0 w-64 md:w-72"
//                   >
//                     <button
//                       className="w-full rounded-xl md:rounded-2xl overflow-hidden group"
//                       onClick={() => {
//                         setSelectedImage(ITINERARY_IMAGES[index]);
//                         setIsImageModalOpen(true);
//                       }}
//                     >
//                       <div className="relative aspect-video">
//                         <img
//                           src={ITINERARY_IMAGES[index]}
//                           alt={`Day ${item.day}`}
//                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
//                         <div className="absolute top-3 left-3">
//                           <Badge className="bg-white text-black font-bold">
//                             Day {item.day}
//                           </Badge>
//                         </div>
//                         <div className="absolute bottom-3 left-3 right-3">
//                           <p className="text-white font-semibold text-sm md:text-base line-clamp-2">
//                             {item.title}
//                           </p>
//                         </div>
//                       </div>
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div> */}

//           {/* CTA SECTION BELOW GALLERY */}
//           <div className="mt-10 md:mt-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 md:p-8 text-center">
//             <h3 className="text-xl md:text-2xl font-bold mb-3">Ready to Experience This Journey?</h3>
//             <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
//               Book now and create unforgettable memories with our expertly curated travel experience.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-3 justify-center">
//               <a
//                 href={`https://wa.me/+919797157962/?text=${encodeURIComponent(
//                   `Hi! I want to book "${pkg.title}" package`
//                 )}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 px-8">
//                   <MessageCircle className="h-5 w-5 mr-2" />
//                   Book Now on WhatsApp
//                 </Button>
//               </a>
//               <Button variant="outline" size="lg" onClick={() => navigate('/contact')}>
//                 Contact Us
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default PackageDetail;
// PackageDetail.tsx - Fixed component
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  MapPin,
  Clock,
  Star,
  Users,
  ArrowLeft,
  MessageCircle,
  Calendar,
  CheckCircle,
  Menu,
  X,
  ChevronRight,
  Camera,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allPackages, TravelPackage } from "@/data/packages";
import { useState, useEffect } from "react";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1593693399740-5a67131258b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
];

const PackageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [showAllGallery, setShowAllGallery] = useState(false);

  const pkg = allPackages.find((p) => p.id === Number(id)) as TravelPackage | undefined;

  if (!pkg) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-2xl font-bold mb-4">Package not found</h1>
          <Link to="/packages">
            <Button>View All Packages</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const highlights = [
    "Professional tour guide included",
    "All accommodation covered",
    "Airport transfers included",
    "Daily breakfast & select meals",
    "All sightseeing included",
    "24/7 travel support",
  ];

  // Dynamically extract itinerary from package
  const itinerary = [];
  for (let i = 1; i <= 7; i++) {
    const dayKey = `Day${i}` as keyof TravelPackage;
    const titleKey = `titled${i}` as keyof TravelPackage;
    const highlightsKey = `highlights${i}` as keyof TravelPackage;
    
    if (pkg[dayKey]) {
      itinerary.push({
        day: i,
        title: pkg[titleKey] as string || `Day ${i}`,
        description: pkg[dayKey] as string,
        highlights: pkg[highlightsKey] 
          ? (pkg[highlightsKey] as string).split(',')
          : ["Sightseeing", "Hotel Stay", "Meals", "Transport"]
      });
    }
  }

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Image Modal
  const ImageModal = () => {
    if (!isImageModalOpen || !selectedImage) return null;

    return (
      <div 
        className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
        onClick={() => setIsImageModalOpen(false)}
      >
        <div className="relative max-w-4xl max-h-[90vh] w-full">
          <Button
            variant="ghost"
            size="icon"
            className="absolute -top-10 right-0 text-white hover:bg-white/20"
            onClick={() => setIsImageModalOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>
          <img
            src={selectedImage}
            alt="Preview"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ImageModal />

      {/* HERO SECTION */}
      <section className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* BACK BUTTON */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6">
          <Button
            variant="outline"
            size="sm"
            className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Back</span>
          </Button>
        </div>

        {/* FEATURED BADGE */}
        {pkg.featured && (
          <Badge className="absolute top-4 right-4 md:top-6 md:right-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs md:text-sm shadow-lg border-0">
            <Star className="h-3 w-3 mr-1 fill-white" />
            Featured
          </Badge>
        )}

        {/* HERO CONTENT */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
          <div className="container mx-auto">
            <div className="flex items-center gap-2 text-white/90 mb-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm md:text-base">{pkg.location}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              {pkg.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
                <Clock className="h-3 w-3 mr-1" />
                {pkg.duration}
              </Badge>
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
                <Users className="h-3 w-3 mr-1" />
                Group & Solo
              </Badge>
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
                <Star className="h-3 w-3 mr-1 fill-yellow-300" />
                {pkg.rating} ({pkg.reviews} reviews)
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* DESCRIPTION */}
            <div className="bg-card p-5 md:p-6 rounded-2xl shadow-sm border">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                About This Journey
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {pkg.description}
              </p>

              {/* ITINERARY TOGGLE - Mobile Only */}
              <div className="lg:hidden mb-6">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <>
                      <X className="h-4 w-4 mr-2" />
                      Hide Day-by-Day Itinerary
                    </>
                  ) : (
                    <>
                      <Menu className="h-4 w-4 mr-2" />
                      Show Detailed Itinerary
                    </>
                  )}
                </Button>
              </div>

              {/* ITINERARY WITHOUT IMAGES */}
              <div className={`${isMobileMenuOpen ? "block" : "hidden"} lg:block`}>
                <div className="space-y-6">
                  {itinerary.map((item) => (
                    <div
                      key={item.day}
                      className="p-4 md:p-5 rounded-xl border hover:border-primary/50 hover:bg-muted/10 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        {/* Day Number */}
                        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex flex-col items-center justify-center">
                          <span className="text-xs text-muted-foreground">Day</span>
                          <span className="text-lg md:text-xl font-bold text-primary">{item.day}</span>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                            <h3 className="text-lg md:text-xl font-bold mb-1">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-muted-foreground mb-3">
                            {item.description}
                          </p>
                          
                          {/* Highlights */}
                          <div className="flex flex-wrap gap-2">
                            {item.highlights.map((highlight, idx) => (
                              <Badge 
                                key={idx} 
                                variant="secondary" 
                                className="text-xs bg-muted/50 hover:bg-muted"
                              >
                                <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* HIGHLIGHTS */}
            <div className="bg-card p-5 md:p-6 rounded-2xl shadow-sm border">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                What's Included
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR - PRICING */}
          <div className="lg:col-span-1">
            <div id="pricing" className="bg-card rounded-2xl p-5 md:p-6 shadow-lg border sticky top-24">
              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Package Pricing
                </h3>
                <p className="text-sm text-muted-foreground">
                  All prices include taxes and service charges
                </p>
              </div>

              <div className="space-y-3">
                {pkg.pricing.map((price) => {
                  const whatsappMessage = encodeURIComponent(
                    `Hi! I'm interested in the "${pkg.title}" package.\n\n` +
                    `📍 Location: ${pkg.location}\n` +
                    `👥 Travellers: ${price.pax}\n` +
                    `💰 Price: ₹${price.perPerson}/person\n` +
                    `🧾 Total: ₹${price.total}\n` +
                    `📅 Duration: ${pkg.duration}\n\n` +
                    `Please share availability & booking details.`
                  );

                  return (
                    <div
                      key={price.pax}
                      className="border rounded-xl p-4 hover:border-primary hover:shadow-md transition-all bg-gradient-to-br from-white to-muted/20"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="font-bold text-lg">
                            {price.pax} {price.pax === "1" ? "Person" : "People"}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Best for {price.pax === "1" ? "solo travelers" : price.pax === "2" ? "couples" : "groups"}
                          </p>
                        </div>
                        <Badge className="bg-primary/10 text-primary">
                          Popular
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Per Person</span>
                          <span className="font-bold text-lg">₹{price.perPerson.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center border-t pt-2">
                          <span className="font-medium">Total Package</span>
                          <span className="font-bold text-xl text-primary">₹{price.total.toLocaleString()}</span>
                        </div>
                      </div>

                      <a
                        href={`https://wa.me/+919797157962/?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button
                          size="lg"
                          className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg"
                        >
                          <MessageCircle className="h-5 w-5 mr-2" />
                          Book on WhatsApp
                        </Button>
                      </a>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="space-y-3">
                  <Button variant="outline" className="w-full">
                    <Calendar className="h-5 w-5 mr-2" />
                    Check Availability
                  </Button>
                </div>

                <div className="mt-4 p-3 bg-muted/30 rounded-lg">
                  <p className="text-xs text-muted-foreground text-center">
                   Best Price Guarantee<br />
                    24/7 Customer Support
                  </p>
                </div>
              </div>
            </div>

            {/* MOBILE QUICK ACTIONS */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t shadow-lg p-3 flex gap-2 z-50">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Pricing
              </Button>
              <a
                href={`https://wa.me/+919797157962/?text=${encodeURIComponent(
                  `Hi! I want to book "${pkg.title}" package`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Book Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2">
                <Camera className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                Photo Gallery
              </h2>
              <p className="text-muted-foreground">
                Explore the beautiful moments from this journey
              </p>
            </div>
            <Button 
              variant="ghost" 
              className="mt-2 md:mt-0"
              onClick={() => setShowAllGallery(!showAllGallery)}
            >
              {showAllGallery ? "Show Less" : "View All"} 
              <ChevronRight className={`h-4 w-4 ml-1 transition-transform ${showAllGallery ? "rotate-90" : ""}`} />
            </Button>
          </div>

          {/* GALLERY GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {GALLERY_IMAGES.slice(0, showAllGallery ? GALLERY_IMAGES.length : 8).map((img, index) => (
              <button
                key={index}
                className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden group"
                onClick={() => {
                  setSelectedImage(img);
                  setIsImageModalOpen(true);
                }}
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">Photo {index + 1}</p>
                </div>
                <div className="absolute top-2 right-2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ImageIcon className="h-4 w-4 text-white" />
                </div>
              </button>
            ))}
          </div>

          {/* CTA SECTION */}
          <div className="mt-10 md:mt-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 md:p-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-3">Ready to Experience This Journey?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Book now and create unforgettable memories with our expertly curated travel experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/+919797157962/?text=${encodeURIComponent(
                  `Hi! I want to book "${pkg.title}" package`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 px-8">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Book Now on WhatsApp
                </Button>
              </a>
              <Button variant="outline" size="lg" onClick={() => navigate('/contact')}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PackageDetail;