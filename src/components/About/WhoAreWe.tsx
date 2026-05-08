import React, { useState } from 'react'

const WhoAreWe = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-right">
                <span className="text-sm font-bold text-sunset uppercase tracking-widest mb-2 block">Our Story</span>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6 italic">Who We Are</h3>
                <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                        At <span className="font-bold text-primary">Maverick TOUR & TRAVELS</span>, we specialize in creating exceptional travel experiences
                        that go beyond the ordinary. From family holidays to luxury escapes, we
                        curate tours that are tailored to your style, budget, and dreams.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        With a team of passionate experts and trusted local partners, we ensure
                        every journey is safe, seamless, and memorable.
                    </p>
                </div>

                {/* Extra content hidden until "Read More" */}
                {showMore && (
                    <div className="mt-6 text-muted-foreground leading-relaxed space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
                        <p>
                            We believe that travel is not just about visiting new places, but about
                            creating stories that last a lifetime. That’s why our itineraries
                            combine cultural immersion, adventure, and relaxation — so every trip
                            feels both exciting and meaningful.
                        </p>
                        <p>
                            From solo explorers to large groups, we go the extra mile to customize
                            each journey. Our 24/7 customer support and global partnerships mean
                            you’re never alone, no matter where in the world you are.
                        </p>
                        <p>
                            We’re also committed to sustainable tourism, working with local
                            communities and eco-friendly partners to ensure our travels have a
                            positive impact on both people and the planet.
                        </p>
                    </div>
                )}

                {/* Read More / Read Less Button */}
                <button
                    onClick={() => setShowMore(!showMore)}
                    className="mt-8 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all active:scale-95"
                >
                    {showMore ? "Read Less" : "Explore More"}
                </button>
            </div>

            <div className="relative group animate-fade-left">
                <div className="absolute -inset-4 bg-sunset/10 rounded-3xl rotate-1 group-hover:rotate-2 transition-transform duration-500" />
                <img
                    src="https://storage.eduyaam.com/uploads/1767866737_Kashmir_with_Ladakh_7_Night_8_Days_Scenic_Expedition_ee93ye.png"
                    alt="Who We Are"
                    className="relative rounded-2xl shadow-2xl w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
                />
            </div>
        </section>
    )
}

export default WhoAreWe