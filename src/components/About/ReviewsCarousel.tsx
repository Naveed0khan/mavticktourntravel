import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { Star } from "lucide-react";


export default function ReviewsCarousel() {
  const reviews = [
    {
      name: "Aarav Mehta",
      text: "Maverick Tour & Travels made our family vacation seamless and stress-free. Highly recommended!",
      location: "Delhi, India",
    },
    {
      name: "Sophia Lee",
      text: "Professional service, excellent tour guides, and unforgettable memories. Thank you!",
      location: "Singapore",
    },
    {
      name: "James Carter",
      text: "The personalized itinerary was perfect. Every detail was well thought out!",
      location: "London, UK",
    },
  ];

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <span className="text-sm font-bold text-sunset uppercase tracking-widest mb-2 block">Testimonials</span>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-800 italic">
            What Our Customers Say
          </h3>
          <div className="h-1 w-20 bg-sunset mx-auto rounded-full mt-4"></div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          className="pb-12"
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx} className="h-auto">
              <div className="bg-white rounded-3xl shadow-soft p-8 h-full flex flex-col justify-between border border-border/50 group hover:shadow-card transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-sunset text-sunset" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed text-lg">“{review.text}”</p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-sunset transition-colors">{review.name}</h4>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{review.location}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
