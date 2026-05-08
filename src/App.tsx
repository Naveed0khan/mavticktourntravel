// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import Packages from "./pages/Packages";
// import PackageDetail from "./pages/PackageDetail";
// import AboutUs from "./components/About/About";
// import Contact from "./components/Contact/Contact";
// import Desinations from "./components/Destinations/page"
// import NotFound from "./pages/NotFound";
// import Test from "./test/test"
// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/packages" element={<Packages />} />
//           <Route path="/packages/:id" element={<PackageDetail />} />
//           <Route path="/destinations/" element={<Desinations />} />        
//          <Route path="/about" element={<AboutUs />} /> 
//          <Route path="/contact" element={<Contact />} /> 

//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";

import NotFound from "./pages/NotFound";

// 🔥 Lazy Imports
const Index = lazy(() => import("./pages/Index"));
const Packages = lazy(() => import("./pages/Packages"));
const PackageDetail = lazy(() => import("./pages/PackageDetail"));
const AboutUs = lazy(() => import("./components/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Desinations = lazy(() => import("./components/Destinations/page"));

const queryClient = new QueryClient();

const Loader = () => (
  <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
    <div className="relative flex flex-col items-center">
      {/* Animated Pulse Logo */}
      <div className="w-24 h-24 mb-6 relative">
        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
        <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-xl border border-primary/10">
          <img
            src="/marvic_page-0001-removebg-preview.png"
            alt="Maverick Travels"
            className="w-16 h-16 object-contain animate-pulse"
          />
        </div>
      </div>

      {/* Modern Spinner Text */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="font-display text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Maverick Travels
        </h2>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-sunset rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-1.5 h-1.5 bg-sunset rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-1.5 h-1.5 bg-sunset rounded-full animate-bounce"></div>
        </div>
      </div>

      {/* Elegant Progress Line */}
      <div className="w-48 h-1 bg-muted rounded-full mt-8 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-primary to-secondary w-full origin-left animate-loading-bar"></div>
      </div>
    </div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          {/* Suspense wraps lazy components */}
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/packages/:id" element={<PackageDetail />} />
              <Route path="/destinations" element={<Desinations />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
