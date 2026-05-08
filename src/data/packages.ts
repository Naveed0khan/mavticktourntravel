// packages.ts - Fixed data structure
import santoriniImg from "@/assets/destination-santorini.jpg";
import peruImg from "@/assets/destination-peru.jpg";
import japanImg from "@/assets/destination-japan.jpg";

export interface PackagePricing {
  pax: string;
  perPerson: number;
  total: number;
}

export interface TravelPackage {
  id: number;
  title: string;
  location: string;
  image: string;
  duration: string;
  rating: number;
  reviews: number;
  featured: boolean;
  category: string;
  description: string;
  pricing: PackagePricing[];
  
  // Day-wise itinerary - use consistent naming
  Day1: string;
  titled1: string;
  highlights1?: string;
  
  Day2: string;
  titled2: string;
  highlights2?: string;
  
  Day3: string;
  titled3: string;
  highlights3?: string;
  
  Day4: string;
  titled4: string;
  highlights4?: string;
  
  Day5: string;
  titled5: string;
  highlights5?: string;
  
  Day6?: string;
  titled6?: string;
  highlights6?: string;
  
  Day7?: string;
  titled7?: string;
  highlights7?: string;
}

export const allPackages: TravelPackage[] = [
  {
    id: 1,
    title: "  5D / 4N Kashmir Enchanting Package",
    location: "Kashmir",
    image: peruImg,
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    reviews: 210,
    featured: true,
    category: "Family / Couple / Group",
    description: "Explore the beauty of Kashmir with scenic valleys, houseboats, and unforgettable experiences.",
    
    pricing: [
      { pax: "2", perPerson: 12752, total: 25504 },
      { pax: "4", perPerson: 9625, total: 38500 },
      { pax: "6", perPerson: 9250, total: 55500 },
      { pax: "8", perPerson: 10375, total: 83000 },
    ],

    titled1: "Arrive – Srinagar Airport – Local Sightseeing",
    Day1: "On your arrival at the Srinagar International Airport, you will be taken for a 35 minutes' drive through the heart of New Srinagar city, passing the Abdullah Bridge which connects the banks of the Jhelum River. Arrive and check-in at the hotel in Srinagar. After breakfast leave for local sightseeing including Shalimar, Nishat, CheshmaShahi and Botanical Garden, Pari Mahal hence drive to Shankaracharya Temple situated on Hill top overlooking the beautiful Srinagar City. Overnight stay at Hotel in Srinagar.",
    highlights1: "Airport Pickup,Hotel Check-in,Sightseeing,Temple Visit",

    titled2: "Srinagar – Sonamarg Day Trip",
    Day2: "After Breakfast leave from hotel Continue drive to Sonamarg 2690 Meters (Meadow of Gold). One can ride on horse to visit Thajiwas Glacier where snow remains round the year and Sonamarg is known as Gateway of Ladakh and you can also visit Zero Point which is known as “Ghumri” by union vehicle on your own cost. Overnight stay at hotel in Srinagar. ",
    highlights2: "Scenic Drive,Horse Riding,Glacier Visit,Zero Point",

    titled3: "Gulmarg Day Trip",
    Day3: "After breakfast check out the hotel at Srinagar and proceed to Gulmarg. Gulmarg is located at an average elevation of 2,690 m (8,825 ft.) After check in you can start your day from Gondola ride by cable car (cable car cost is not included in the package and its totally depend on the weather conditions) from Gulmarg to Khilanmarg (10,500 ft. above the sea level) 1st Phase and 2nd Phase Khilanmarg to Affarwat (14,500 ft. above the sea level). Spend the day witnessing the picturesque locals, in evening you can spend your time local sight seen by Pony or ATV cars, return back to hotel Srinagar. Overnight stay at hotel in Srinagar",
    highlights3: "Gondola Ride,Golf Course,Meadows,Sightseeing",

    titled4: "Pahalgam Day Trip",
    Day4: "After breakfast, check out of the hotel at Sonamarg and proceed to Pahalgham.Pahalgham 2440 Meters (Vale of Kashmir) on the way visit Lavishing Saffron fields and Apple Orchids. Finally, by the lunch time you will reach Pahalgham which is the most famous place for Indian Film Industry. After check inn you can leave for Chandanwari 3288mts), Betaab Valley and Aru Valley (By union vehicle on your own). After check in and leave for Pahalgham local sight seen which is one of most beautiful scenery in Pahalgham valley and also known as Mini Switzerland. Take pony ride (At your own cost) in Pahalgham like, Baisaran, Dabyan, Kashmir Valley, Pahalgham Valley and Kanimarg Valley. Overnight stay at hotel in Srinagar.  ",
    highlights4: "Saffron Fields,Apple Orchards,Valley Visit,Film Locations",

    titled5: "Srinagar – Airport Drop",
    Day5: "After breakfast you will be transferred to Srinagar airport to board flight for your onward journey with the sweet memories of the tour with MAVERICK TOUR AND TRAVELS.  ",
    highlights5: "Breakfast,Airport Transfer,Departure",
  },
  
  {
    id: 2,
    title: "  6D / 5N Kashmir Escapade Package",
    location: "Kashmir",
    image: santoriniImg,
    duration: "6 Days / 5 Nights",
    rating: 4.9,
    reviews: 267,
    featured: true,
    category: "Family / Couple / Group",
    description: "Explore the beauty of Kashmir with scenic valleys, houseboats, and unforgettable experiences.",
    
    pricing: [
      { pax: "2", perPerson: 15300, total: 30600 },
      { pax: "4", perPerson: 12025, total: 48100 },
      { pax: "6", perPerson: 11533, total: 69198 },
      { pax: "8", perPerson: 12687, total: 101496 },
    ],

    titled1: "Arrive – Srinagar Airport – Local Sightseeing",
    Day1: "On your arrival at the Srinagar International Airport, you will be taken for a 35 minutes’ drive through the heart of New Srinagar city, passing the Abdullah Bridge which connects the banks of the Jhelum River. Arrive and check-in at the hotel in Srinagar. After breakfast leave for local sightseeing including Shalimar, Nishat, CheshmaShahi and Botanical Garden, Pari Mahal hence drive to Shankaracharya Temple situated on Hill top overlooking the beautiful Srinagar City. Overnight stay at Hotel in Srinagar.",
    highlights1: "Airport Pickup,Hotel Check-in,Sightseeing",

    titled2: "Sonamarg Day Trip",
    Day2: "After Breakfast leave from hotel Continue drive to Sonamarg 2690 Meters and 84 km from Srinagar, it lies in the heart of a beautiful valley by the Sindh. Full day at Sonamarg to explore on your own. “(Meadow of Gold).” is a trekkers heaven a starting point for many treks Spectacular skies, snowy mountains, huge lakes, strewn with the loveliest alpine flowers. One can ride on horse to visit Thajiwas Glacier where snow remains round the year and Sonamarg is known as Gateway of Ladakh and you can also visit Zero Points if whether condition is good which is known as “Ghumri” by union vehicle on your own cost, return back to Srinagar Hotel. Overnight stay at hotel in Srinagar ",
    highlights2: "Scenic Drive,Horse Riding,Glacier Visit",

    titled3: "Gulmarg Day Trip",
    Day3: "After breakfast check out the hotel at Srinagar and proceed to Gulmarg. Gulmarg is located at an average elevation of 2,690 m (8,825 ft.) After check in you can start your day from Gondola ride by cable car (cable car cost is not included in the package and its totally depend on the weather conditions) from Gulmarg to Khilanmarg (10,500 ft. above the sea level) 1st Phase and 2nd Phase Khilanmarg to Affarwat (14,500 ft. above the sea level). Spend the day witnessing the picturesque locals, in evening you can spend your time local sight seen by Pony or ATV cars, return back to Gulmarg. Overnight stay at hotel in Gulmarg.",
    highlights3: "Gondola Ride,Golf Course,Meadows",

    titled4: "Srinagar – Pahalgam",
    Day4: "After breakfast, check out of the hotel at Sonamarg and proceed to Pahalgham.Pahalgham 2440 Meters (Vale of Kashmir) on the way visit Lavishing Saffron fields and Apple Orchids. Finally, by the lunch time you will reach Pahalgham which is the most famous place for Indian Film Industry. After check inn you can leave for Chandanwari 3288mts), Betaab Valley and Aru Valley (By union vehicle on your own). After check in and leave for Pahalgham local sight seen which is one of most beautiful scenery in Pahalgham valley and also known as Mini Switzerland. Take pony ride (At your own cost) in Pahalgham like, Baisaran, Dabyan, Kashmir Valley, Pahalgham Valley and Kanimarg Valley. Overnight stay at hotel in Srinagar.  ",
    highlights4: "Check-out,Scenic Drive,Valley Visit",

    titled5: "Day 05: Pahalgham – Srinagar",
    Day5: "After Breakfast, proceed to Srinagar. After check inn you can spend your time with shopping in local market areas and leave for old city sightseeing including Historical Jamia Masjid,Khankah Moula, Dargah Hazratbal Shrine Hari Parbat Fort and Old City Market and spend time with Evening boat ride Shikara Ride around the famous Dal Lake. Overnight stay at houseboat in Srinagar  Shikara Ride around the famous Dal Lake. Overnight stay at houseboat in Srinagar .",
    highlights5: "Valley Tour,Pony Ride,Sightseeing",

    titled6: "Srinagar – Airport Drop",
    Day6: "After breakfast you will be transferred to Srinagar airport to board flight for your onward journey with the sweet memories of the tour with MAVERICK TOUR AND TRAVELS.",
    highlights6: "Breakfast,Airport Transfer,Departure",
  },
  
  {
    id: 3,
    title: " 7D / 6N  Kashmir Exotic Package",
    location: "Kashmir",
    image: japanImg,
    duration: "7 Days / 6 Nights",
    rating: 4.9,
    reviews: 356,
    featured: true,
    category: "Luxury / Family / Group",
    description: "Explore the beauty of Kashmir with scenic valleys, houseboats, and unforgettable experiences.",
    
    pricing: [
      { pax: "2", perPerson: 19350, total: 38700 },
      { pax: "4", perPerson: 15800, total: 63200 },
      { pax: "6", perPerson: 15533, total: 93198 },
      { pax: "8", perPerson: 16625, total: 133000 },
    ],

    titled1: "Arrive – Srinagar Airport – Local Sightseeing",
    Day1: "On your arrival at the Srinagar International Airport, you will be taken for a 35 minutes’ drive through the heart of New Srinagar city, passing the Abdullah Bridge which connects the banks of the Jhelum River. Arrive and check-in at the hotel in Srinagar. After breakfast leave for local sightseeing including Shalimar, Nishat, CheshmaShahi and Botanical Garden, Pari Mahal hence drive to Shankaracharya Temple situated on Hill top overlooking the beautiful Srinagar City. Overnight stay at Hotel in Srinagar.",
    highlights1: "Airport Pickup,Hotel Check-in,Sightseeing",

    titled2: "Srinagar – Sonamarg",
    Day2: "After Breakfast leave from hotel Continue drive to Sonamarg 2690 Meters (Meadow of Gold). One can ride on horse to visit Thajiwas Glacier where snow remains round the year and Sonamarg is known as Gateway of Ladakh and you can also visit Zero Point which is known as “Ghumri” by union vehicle on your own cost. Overnight stay at hotel in Sonamarg.",
    highlights2: "Scenic Drive,Glacier Visit,Zero Point",

    titled3: "Sonamarg – Gulmarg",
    Day3: "After breakfast check out the hotel at Sonamarg and proceed to Gulmarg. Gulmarg is located at an average elevation of 2,690 m (8,825 ft.) After check in you can start your day from Gondola ride by cable car (cable car cost is not included in the package and its totally depend on the weather conditions) from Gulmarg to Khilanmarg (10,500 ft. above the sea level) 1st Phase and 2nd Phase Khilanmarg to Affarwat (14,500 ft. above the sea level). Spend the day witnessing the picturesque locals, in evening you can spend your time local sight seen by Pony or ATV cars, return back to Gulmarg. Overnight stay at hotel in Gulmarg.",
    highlights3: "Check-out,Scenic Drive,Gondola Ride",

    titled4: "Gulmarg – Pahalgam",
    Day4: "After breakfast, check out of the hotel at Sonamarg and proceed to Pahalgham.Pahalgham 2440 Meters (Vale of Kashmir) on the way visit Lavishing Saffron fields and Apple Orchids. Finally, by the lunch time you will reach Pahalgham which is the most famous place for Indian Film Industry. After check inn you can leave for Chandanwari 3288mts), Betaab Valley and Aru Valley (By union vehicle on your own). After check in and leave for Pahalgham local sight seen which is one of most beautiful scenery in Pahalgham valley and also known as Mini Switzerland. Take pony ride (At your own cost) in Pahalgham like, Baisaran, Dabyan, Kashmir Valley, Pahalgham Valley and Kanimarg Valley. Overnight stay at hotel in Pahalgham.  ",
    highlights4: "Check-out,Valley Visit,Scenic Drive",

    titled5: "Pahalgam Sightseeing",
    Day5: "After breakfast and leave for local sightseeing which is one of most beautiful scenery in Pahalgham valley and also known as Mini Switzerland. Take pony ride (At your own cost) in Pahalgham like, Baisaran, Dabyan, Kashmir Valley, Pahalgham Valley and Kanimarg Valley. Overnight stay at hotel in Pahalgham.  ",
    highlights5: "Pony Ride,Valley Tour,Sightseeing",

    titled6: "Pahalgam – Srinagar",
    Day6: "After Breakfast, proceed to Srinagar. After check inn you can spend your time with shopping in local market areas and leave for old city sightseeing including Historical Jamia Masjid,KhankahMoula, DargahHazratbal Shrine Hari Parbat Fort and Old City Market and spend time with Evening boat ride Shikara Ride around the famous Dal Lake at my own. Overnight stay at houseboat in Srinagar. ",
    highlights6: "Check-out,Return Drive,Shopping",

    titled7: "Srinagar – Airport Drop",
    Day7: "After breakfast you will be transferred to Srinagar airport to board flight for your onward journey with the sweet memories of the tour with MAVERICK TOUR AND TRAVELS ",
    highlights7: "Breakfast,Airport Transfer,Departure",
  },
];

export const categories = [
  "All",
  "Romantic",
  "Nature",
  "Adventure",
  "Luxury",
  "Family",
  "Winter",
  "Offbeat",
  "Cultural",
];