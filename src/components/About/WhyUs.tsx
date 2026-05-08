import React from 'react'

const WhyUs = () => {
  const features = [
    {
      title: "Best Travel Agent",
      desc: "Your trusted travel partner, offering expert planning for seamless, unforgettable journeys worldwide.",
      icon: (
        <svg className="w-8 h-8 text-sunset" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M2.5 19h19M5 11h14M10 5h4" />
        </svg>
      )
    },
    {
      title: "Trust & Safety",
      desc: "Ensuring trust and safety in every step of your journey for a worry-free travel experience.",
      icon: (
        <svg className="w-8 h-8 text-sunset" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Best Price Guarantee",
      desc: "Get the best price guarantee for your travel, ensuring unbeatable deals and maximum savings.",
      icon: (
        <svg className="w-8 h-8 text-sunset" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 17l-5 3 1.9-5.9L4 9h6l2-6 2 6h6l-4.9 5.1L17 20l-5-3z" />
        </svg>
      )
    },
    {
      title: "Beautiful Places",
      desc: "Discover the world's most beautiful places, from breathtaking landscapes to hidden gems.",
      icon: (
        <svg className="w-8 h-8 text-sunset" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2l9 21H3L12 2z" />
        </svg>
      )
    },
    {
      title: "Passionate Travel",
      desc: "Experience passionate travel with journeys crafted to inspire, explore, and create unforgettable memories.",
      icon: (
        <svg className="w-8 h-8 text-sunset" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 21C6.5 16 3 12.5 3 8.5A5.5 5.5 0 0112 4a5.5 5.5 0 019 4.5c0 4-3.5 7.5-9 12.5z" />
        </svg>
      )
    },
    {
      title: "Fast Booking",
      desc: "Enjoy fast booking with hassle-free reservations for a smooth and quick travel planning experience.",
      icon: (
        <svg className="w-8 h-8 text-sunset" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sunset/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="relative container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <span className="text-sm font-bold text-sunset uppercase tracking-widest mb-2 block">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6 italic">
            We Make All The Process Easy
          </h2>
          <div className="h-1 w-20 bg-sunset mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-white shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sunset/10 group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3 group-hover:text-sunset transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs;