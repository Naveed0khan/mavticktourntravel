// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import FeaturedPackages from "@/components/FeaturedPackages";
// import WhyChooseUs from "@/components/WhyChooseUs";
// // import Review from "@/components/WhyChooseUs";
// import Newsletter from "@/components/Newsletter";
// import Faqsection from"@/components/faqsection"

// import Footer from "@/components/Footer";
// const Index = () => {
//   return (
//     <div className="min-h-screen">
//       <Navbar />
//       <Hero />
//       <FeaturedPackages />
//       <WhyChooseUs />
//       {/* <Review/> */}
//       <Newsletter />
//       <Faqsection/>
//       <Footer />
//     </div>
//   );
// };

// export default Index;
import { Helmet } from "react-helmet-async";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedPackages from "@/components/FeaturedPackages";
import WhyChooseUs from "@/components/WhyChooseUs";
import Newsletter from "@/components/Newsletter";
import Faqsection from "@/components/faqsection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">

      {/* ✅ SEO START */}
      <Helmet>
        <title>Maverick Tours | Best Travel Agency for Holiday Packages</title>

        <meta
          name="description"
          content="Discover affordable domestic and international tour packages with Maverick Tours. Book Kashmir, Dubai, Bali and more with the best travel agency."
        />

        <meta
          name="keywords"
          content="travel agency, tour packages, kashmir packages, dubai tour, bali trip, holiday packages"
        />

        {/* Open Graph (WhatsApp / Facebook Preview) */}
        <meta property="og:title" content="Maverick Tours - Explore The World" />
        <meta
          property="og:description"
          content="Book your dream vacation with Maverick Tours. Affordable travel packages worldwide."
        />
        <meta property="og:type" content="website" />

        {/* Important for mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>
      {/* ✅ SEO END */}

      <Navbar />
      <Hero />
      <FeaturedPackages />
      <WhyChooseUs />
      <Newsletter />
      <Faqsection />
      <Footer />
      
    </div>
  );
};

export default Index;
