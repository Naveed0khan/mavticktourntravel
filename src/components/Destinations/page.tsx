import { useState } from "react";
import { Star, MapPin, Calendar, Users, Clock, Heart, Share2, ChevronRight, Check, Wind, Mountain, Utensils, Hotel, Camera, Globe,Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DestinationKashmir = () => {
  const [favorite, setFavorite] = useState(false);

  const packages = [
    {
      id: 1,
      name: "Srinagar Delight",
      duration: "5 Days",
      price: "₹25,999",
      highlights: ["Houseboat Stay", "Shikara Ride", "Mughal Gardens", "Local Cuisine"],
      image: "https://images.unsplash.com/photo-1593693399740-5a85fde34eaa?w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Valley Explorer",
      duration: "7 Days",
      price: "₹38,999",
      highlights: ["Gulmarg", "Pahalgam", "Sonamarg", "Adventure Sports"],
      image: "https://images.unsplash.com/photo-1551135042-1bb0d4dea43e?w-800&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Kashmir Luxury",
      duration: "8 Days",
      price: "₹65,999",
      highlights: ["5-Star Hotels", "Private Shikara", "Helicopter Ride", "Spa & Wellness"],
      image: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=800&auto=format&fit=crop"
    }
  ];

  const attractions = [
    {
      name: "Dal Lake",
      description: "Famous for houseboats and shikara rides",
      icon: "🚤",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&auto=format&fit=crop"
    },
    {
      name: "Gulmarg",
      description: "Asia's premier ski destination",
      icon: "🏔️",
      image: "https://images.unsplash.com/photo-1591189350224-4c7a9b6936a3?w=600&auto=format&fit=crop"
    },
    {
      name: "Pahalgam",
      description: "Valley of Shepherds & Lidder River",
      icon: "🌲",
      image: "https://images.unsplash.com/photo-1583037189850-2d4c39f3cb8a?w=600&auto=format&fit=crop"
    },
    {
      name: "Sonamarg",
      description: "Meadow of Gold with glaciers",
      icon: "❄️",
      image: "https://images.unsplash.com/photo-1603003541132-0537b0d7f366?w=600&auto=format&fit=crop"
    }
  ];

  const itinerary = [
    {
      day: "Day 1",
      title: "Arrival in Srinagar",
      activities: ["Airport pickup", "Transfer to houseboat", "Shikara ride on Dal Lake", "Welcome dinner"],
      icon: "🏠"
    },
    {
      day: "Day 2",
      title: "Srinagar Sightseeing",
      activities: ["Mughal Gardens tour", "Visit Shankaracharya Temple", "Local market exploration", "Kashmiri Wazwan dinner"],
      icon: "🌷"
    },
    {
      day: "Day 3",
      title: "Gulmarg Adventure",
      activities: ["Drive to Gulmarg", "Gondola ride Phase 1 & 2", "Snow activities", "Return to Srinagar"],
      icon: "⛷️"
    },
    {
      day: "Day 4",
      title: "Pahalgam Valley",
      activities: ["Scenic drive to Pahalgam", "Betaab Valley visit", "Aru Valley exploration", "Lidder River walk"],
      icon: "🏞️"
    },
    {
      day: "Day 5",
      title: "Sonamarg & Departure",
      activities: ["Thajiwas Glacier visit", "Last minute shopping", "Departure transfer", "Farewell lunch"],
      icon: "✈️"
    }
  ];

  const reviews = [
    {
      name: "Rahul Sharma",
      rating: 5,
      comment: "The houseboat experience on Dal Lake was magical! Perfect family vacation.",
      date: "2 weeks ago",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul"
    },
    {
      name: "Priya Patel",
      rating: 5,
      comment: "Gulmarg in winter is a dream come true. The snow was pristine!",
      date: "1 month ago",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
    },
    {
      name: "Arjun Mehta",
      rating: 4,
      comment: "Excellent service. The Kashmiri cuisine experience was exceptional.",
      date: "3 weeks ago",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1593693399740-5a85fde34eaa?w=1920&auto=format&fit=crop"
            alt="Kashmir Valley"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative h-full container mx-auto px-4 flex items-end pb-16 md:pb-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-emerald-500 text-white px-4 py-1 text-sm">
                Best Seller
              </Badge>
              <Badge className="bg-orange-500 text-white px-4 py-1 text-sm">
                Family Friendly
              </Badge>
              <Badge className="bg-sky-500 text-white px-4 py-1 text-sm">
                Adventure
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Kashmir
              <span className="block text-3xl md:text-4xl text-emerald-300 mt-2">Paradise on Earth</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Discover the mesmerizing beauty of snow-capped mountains, serene lakes, and lush valleys. 
              Experience the rich culture and warm hospitality of Kashmir.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white px-8 py-6 text-lg rounded-xl shadow-xl">
                Book Your Trip Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 px-8 py-6 rounded-xl"
                onClick={() => setFavorite(!favorite)}
              >
                <Heart className={`mr-2 h-5 w-5 ${favorite ? "fill-red-500 text-red-500" : ""}`} />
                {favorite ? "Saved" : "Save Trip"}
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-sky-50 to-transparent"></div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white shadow-lg -mt-8 mx-4 md:mx-auto md:max-w-5xl rounded-2xl p-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="h-5 w-5 text-sky-600" />
              <span className="text-2xl font-bold text-gray-900">5-10 Days</span>
            </div>
            <p className="text-sm text-gray-600">Duration</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="h-5 w-5 text-emerald-600" />
              <span className="text-2xl font-bold text-gray-900">2-12 People</span>
            </div>
            <p className="text-sm text-gray-600">Group Size</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Calendar className="h-5 w-5 text-orange-600" />
              <span className="text-2xl font-bold text-gray-900">All Seasons</span>
            </div>
            <p className="text-sm text-gray-600">Best Time</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="h-5 w-5 text-amber-500 fill-current" />
              <span className="text-2xl font-bold text-gray-900">4.8/5</span>
            </div>
            <p className="text-sm text-gray-600">Rating</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Packages Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Curated Kashmir Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our handpicked experiences designed for every traveler
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-bold text-sky-600">{pkg.duration}</span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                      <p className="text-sm text-gray-600 flex items-center mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        Srinagar • Gulmarg • Pahalgam
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-600">{pkg.price}</div>
                      <p className="text-sm text-gray-500">per person</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Highlights</h4>
                    <div className="space-y-2">
                      {pkg.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-emerald-500" />
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tabs Section */}
        <section className="mb-20">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
              <TabsTrigger value="attractions">Attractions</TabsTrigger>
              <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Visit Kashmir?</h3>
                  <p className="text-gray-700 mb-4">
                    Kashmir is often called "Paradise on Earth" for good reason. Nestled in the Himalayas, 
                    this stunning region offers breathtaking landscapes, rich cultural heritage, and unforgettable experiences.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-sky-100 rounded-lg">
                        <Mountain className="h-6 w-6 text-sky-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Majestic Mountains</h4>
                        <p className="text-gray-600">Home to some of the world's highest peaks</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-emerald-100 rounded-lg">
                        <Wind className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Pristine Lakes</h4>
                        <p className="text-gray-600">Crystal clear waters reflecting snow-capped mountains</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <Utensils className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Rich Cuisine</h4>
                        <p className="text-gray-600">Experience authentic Kashmiri Wazwan feast</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=800&auto=format&fit=crop"
                    alt="Kashmir Houseboat"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="itinerary">
              <div className="space-y-6">
                {itinerary.map((day, index) => (
                  <div key={index} className="flex gap-6 p-6 bg-gradient-to-r from-sky-50 to-white rounded-2xl border border-sky-100">
                    <div className="flex flex-col items-center">
                      <div className="text-3xl mb-2">{day.icon}</div>
                      <div className="text-center">
                        <div className="font-bold text-sky-600 text-lg">{day.day}</div>
                        <div className="w-px h-16 bg-gradient-to-b from-sky-300 to-transparent my-2"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{day.title}</h4>
                      <ul className="space-y-2">
                        {day.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-700">
                            <div className="h-2 w-2 bg-sky-500 rounded-full"></div>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="attractions">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {attractions.map((attraction, index) => (
                  <Card key={index} className="overflow-hidden border-0 shadow-lg">
                    <div className="relative h-48">
                      <img 
                        src={attraction.image} 
                        alt={attraction.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 text-3xl bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                        {attraction.icon}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">{attraction.name}</h4>
                      <p className="text-gray-600">{attraction.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <div className="grid md:grid-cols-3 gap-6">
                {reviews.map((review, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <img 
                          src={review.avatar} 
                          alt={review.name}
                          className="h-12 w-12 rounded-full"
                        />
                        <div>
                          <h4 className="font-bold text-gray-900">{review.name}</h4>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i}
                                className={`h-4 w-4 ${i < review.rating ? "text-amber-500 fill-current" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">{review.comment}</p>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-3xl p-8 md:p-12 text-center text-white mb-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Ready for Your Kashmiri Adventure?</h2>
            <p className="text-xl mb-8 text-white/90">
              Limited spots available for the upcoming season. Book now to secure your dream vacation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-sky-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold rounded-xl">
                Book Your Trip Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white/20 px-8 py-6 text-lg rounded-xl">
                <Phone className="mr-2 h-5 w-5" />
                Call for Customization
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DestinationKashmir;