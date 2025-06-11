"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, ArrowDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Gallery from '@/components/Gallery';
import Image from 'next/image';

export default function TreasureCoastGetaway() {
  // Gallery images array
  const galleryImages = [
    { src: "/entrance.jpg", alt: "Welcoming entrance to Treasure Coast Getaway vacation home" },
    { src: "/kitchen.jpg", alt: "Modern fully-equipped kitchen with granite countertops" },
    { src: "/master-bathroom.jpg", alt: "Luxurious master bathroom with dual vanity" },
    { src: "/master.jpg", alt: "Spacious master bedroom with king-size bed" },
    { src: "/pool.jpg", alt: "Private heated swimming pool and patio area" },
    { src: "/pool2.jpg", alt: "Pool deck with lounge chairs and tropical landscaping" },
    { src: "/outside-front.jpg", alt: "Beautiful exterior front view of vacation rental home" },
    { src: "/2-bed-bedroom.jpg", alt: "Guest bedroom with two comfortable twin beds" },
    { src: "/2-bed-bedroom2.jpg", alt: "Bright twin bedroom with ample storage space" },
    { src: "/bath.jpg", alt: "Clean and modern guest bathroom" },
    { src: "/closet.jpg", alt: "Walk-in closet with organized storage" },
    { src: "/closet2.jpg", alt: "Additional bedroom closet space" },
    { src: "/coffee.jpg", alt: "Coffee station with premium appliances" },
    { src: "/cornhole.jpg", alt: "Outdoor cornhole game boards for family fun" },
    { src: "/dining-table.jpg", alt: "Elegant dining table seating for 8 guests" },
    { src: "/dining.jpg", alt: "Open concept dining area with modern decor" },
    { src: "/driveway.jpg", alt: "Private driveway with ample parking space" },
    { src: "/entrance-to-master-bathroom.jpg", alt: "Entrance hallway to master bathroom suite" },
    { src: "/entrance1.jpg", alt: "Interior entrance foyer with coastal styling" },
    { src: "/grill.jpg", alt: "Outdoor gas grill for barbecue dining" },
    { src: "/guest-bedroom.jpg", alt: "Comfortable queen-size guest bedroom" },
    { src: "/guest-bedroom2.jpg", alt: "Second view of queen guest bedroom with window" },
    { src: "/kids-table.jpg", alt: "Child-friendly dining table and seating area" },
    { src: "/kids-table2.jpg", alt: "Kids' table setup for family meals" },
    { src: "/kitchen-and-dining.jpg", alt: "Open floor plan kitchen and dining room" },
    { src: "/kitchen-angle-4.jpg", alt: "Kitchen island with bar seating" },
    { src: "/kitchen-angle-5.jpg", alt: "Kitchen pantry and storage area" },
    { src: "/kitchen-angle2.jpg", alt: "Kitchen with stainless steel appliances" },
    { src: "/kitchen-angle3.jpg", alt: "Kitchen breakfast bar and counter space" },
    { src: "/kitchen-angle6.jpg", alt: "Complete kitchen overview with all amenities" },
    { src: "/laundry-room.jpg", alt: "Full-size washer and dryer in laundry room" },
    { src: "/livingroom.jpg", alt: "Comfortable living room with large TV" },
    { src: "/livingroom1.jpg", alt: "Living room seating area with coastal decor" },
    { src: "/master-bathroom-left.jpg", alt: "Master bathroom vanity and mirror area" },
    { src: "/master-bathroom-right.jpg", alt: "Master bathroom shower and fixtures" },
    { src: "/master-bedroom1.jpg", alt: "Master bedroom with reading nook" },
    { src: "/master-shower.jpg", alt: "Spacious walk-in shower in master bathroom" },
    { src: "/office-with-printer.jpg", alt: "Home office space with desk and printer" },
    { src: "/office.jpg", alt: "Quiet workspace for remote work needs" },
    { src: "/outside-area.jpg", alt: "Outdoor patio and entertainment area" },
    { src: "/outside-entrance.jpg", alt: "Front entrance with tropical landscaping" },
    { src: "/patio-tv.jpg", alt: "Covered patio with outdoor TV entertainment" },
    { src: "/patio.jpg", alt: "Outdoor dining and relaxation patio" },
    { src: "/pool-bathroom.jpg", alt: "Convenient poolside guest bathroom" },
    { src: "/pool3.jpg", alt: "Pool area with beautiful Florida sunshine" },
    { src: "/pull-out-bedroom.jpg", alt: "Flexible pullout bedroom for extra guests" },
    { src: "/pullout-bedroom2.jpg", alt: "Additional sleeping space with pullout bed" },
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-teal-50 to-blue-50">
      {/* Add Navbar */}
      <Navbar />
      
      {/* Header/Hero Section */}
      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/outside-front.jpg"
            alt="Beautiful exterior view of Treasure Coast Getaway vacation rental"
            fill
            className="object-cover brightness-75"
            priority
            quality={85}
            sizes="100vw"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 md:mt-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Treasure Coast <span className="text-white">Getaway</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
            Experience paradise on Florida&apos;s beautiful Treasure Coast
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.airbnb.com/rooms/953226587982597312?adults=8&check_in=2025-04-01&check_out=2025-04-05&search_mode=regular_search&source_impression_id=p3_1741652763_P3uYvCbUiDOw5PuM&previous_page_section_name=1000&federated_search_id=56743edb-f0ff-488d-b37a-2876877dde75" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Book now on Airbnb - opens in new window"
            >
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg font-semibold">
                Book Now
              </Button>
            </a>
            <a href="#gallery" aria-label="View photo gallery">
              <Button size="lg" variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white hover:bg-white/30 px-8 py-3 text-lg font-semibold">
                View Gallery
              </Button>
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <a href="#features" className="inline-block" aria-label="Scroll to features section">
            <Button variant="ghost" size="sm" className="text-white animate-bounce p-3">
              <ArrowDown className="w-6 h-6" />
            </Button>
          </a>
        </div>
      </header>

      {/* Combined Features & Amenities Section */}
      <section id="features" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white" role="main">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-teal-800">Paradise Awaits You</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="bg-teal-50 border-teal-100">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-700">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <CardTitle className="text-teal-800 text-lg sm:text-xl">Coastal Style Home</CardTitle>
                <CardDescription className="text-teal-600">4 beds, 2 baths</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm sm:text-base">Our 4-bedroom, 2-bath coastal style home is the perfect place for large group trips.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-teal-50 border-teal-100">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-700">
                    <path d="M2 12h20M2 12a10 10 0 0 1 20 0M2 12a10 10 0 0 0 20 0M4 12a8 8 0 0 1 16 0M4 12a8 8 0 0 0 16 0M6 12a6 6 0 0 1 12 0M6 12a6 6 0 0 0 12 0M8 12a4 4 0 0 1 8 0M8 12a4 4 0 0 0 8 0M10 12a2 2 0 0 1 4 0M10 12a2 2 0 0 0 4 0"/>
                  </svg>
                </div>
                <CardTitle className="text-teal-800 text-lg sm:text-xl">Private Oasis</CardTitle>
                <CardDescription className="text-teal-600">Your own slice of paradise</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm sm:text-base">Enjoy our private pool, lush tropical garden, and outdoor dining area with BBQ, perfect for making memories with loved ones.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-teal-50 border-teal-100">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-700">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                <CardTitle className="text-teal-800 text-lg sm:text-xl">Prime Location</CardTitle>
                <CardDescription className="text-teal-600">The heart of the Treasure Coast</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm sm:text-base">Located minutes from restaurants, shopping, and attractions, while still offering the peace and tranquility of a quiet location.</p>
              </CardContent>
            </Card>
          </div>
          
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-teal-800">Luxurious Amenities</h3>
          
          <Tabs defaultValue="indoor" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-6 sm:mb-8" role="tablist">
              <TabsTrigger value="indoor" className="text-sm sm:text-base">Indoor</TabsTrigger>
              <TabsTrigger value="outdoor" className="text-sm sm:text-base">Outdoor</TabsTrigger>
              <TabsTrigger value="services" className="text-sm sm:text-base">Policies & Services</TabsTrigger>
            </TabsList>
            
            <TabsContent value="indoor" className="bg-teal-50 p-4 sm:p-6 rounded-lg" role="tabpanel">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-semibold text-lg sm:text-xl text-teal-800 mb-4">Living & Comfort</h4>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Spacious living room with stylish coastal decor</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Master suite with king bed and ensuite</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Guest bedroom with queen bed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Twin bedroom with two beds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Pullout bedroom for additional guests</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-lg sm:text-xl text-teal-800 mb-4 mt-6">Kitchen & Dining</h4>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Fully equipped gourmet kitchen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Modern appliances (refrigerator, oven, stove)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Dishwasher & microwave</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Coffee maker & blender</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Toaster & rice steamer</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Cooking utensils & spices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Dining area with seating for 8</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Children's high chair</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg sm:text-xl text-teal-800 mb-4">Technology & Entertainment</h4>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>High-speed WiFi throughout</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Cable TV with streaming services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Bluetooth sound system</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Board games and books</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Office space with printer</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-lg sm:text-xl text-teal-800 mb-4 mt-6">Bathroom & Laundry</h4>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>2 full bathrooms with showers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Master bathroom with bathtub</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Hair dryers in each bathroom</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Washer and dryer</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Iron and ironing board</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Fresh towels and bed linens</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Essential toiletries</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-lg sm:text-xl text-teal-800 mb-4 mt-6">Climate Control</h4>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Central air conditioning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Central heating</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Ceiling fans throughout</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="outdoor" className="bg-teal-50 p-4 sm:p-6 rounded-lg" role="tabpanel">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-semibold text-lg sm:text-xl text-teal-800 mb-4">Pool & Spa</h4>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Private heated swimming pool</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Relaxing spa area</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Poolside lounge chairs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Outdoor shower</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Pool bathroom</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-lg sm:text-xl text-teal-800 mb-4 mt-6">Beach & Recreation</h4>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Minutes from beautiful beaches</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Beach chairs provided</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Beach toys and equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Cornhole boards for outdoor fun</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-lg sm:text-xl text-teal-800 mb-4 mt-6">Parking</h4>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Garage parking included</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Additional driveway parking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Street parking available</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg sm:text-xl text-teal-800 mb-4">Outdoor Living</h4>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Covered patio with ceiling fans</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Outdoor dining area for 8</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Electric BBQ grill</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Outdoor TV for entertainment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Hammocks for relaxation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Children's outdoor play area</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-lg sm:text-xl text-teal-800 mb-4 mt-6">Location Features</h4>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Near ocean and beaches</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Close to restaurants and shops</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Minutes from local attractions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Quiet residential neighborhood</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Easy access to major highways</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="services" className="bg-teal-50 p-4 sm:p-6 rounded-lg" role="tabpanel">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-semibold text-lg sm:text-xl text-teal-800 mb-4">House Policies</h4>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Children welcome</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>No smoking allowed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>No pets allowed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Accessible 24/7</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Credit cards accepted</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-lg sm:text-xl text-teal-800 mb-4 mt-6">Safety Features</h4>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Smoke detectors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Carbon monoxide detectors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>First aid kit</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Security system</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Fire extinguisher</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Emergency contact information</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg sm:text-xl text-teal-800 mb-4">Guest Services</h4>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Self check-in</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Digital guidebook</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Local recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Responsive host support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-600 mt-1" aria-hidden="true">✓</span> 
                      <span>Cleaning service available</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-lg sm:text-xl text-teal-800 mb-4 mt-6">Additional Information</h4>
                  <div className="space-y-4 text-gray-700 text-sm sm:text-base">
                    <p>
                      Our beautiful vacation home is designed to provide you with all the comforts of home while enjoying the paradise of Florida&apos;s Treasure Coast. We&apos;ve thoughtfully equipped the property with everything you might need for a memorable stay.
                    </p>
                    <p>
                      From beach equipment to kitchen essentials, we&apos;ve got you covered. Our goal is to create a stress-free environment where you can relax, make memories, and enjoy quality time with loved ones.
                    </p>
                    <p>
                      If you have any questions about specific amenities or features, please don&apos;t hesitate to reach out to us directly!
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-teal-50" role="region" aria-labelledby="gallery-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="gallery-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-teal-800">Gallery</h2>
          
          {/* Only show first 6 images in grid, but all images in modal */}
          <Gallery images={galleryImages} visibleCount={6} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white" role="region" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="testimonials-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-teal-800">Guest Experiences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Gabrielle",
                location: "Barnstable, MA",
                quote: "Hosts were great and responsive. Very nice house, which was clean and well equipped. We really enjoyed our stay."
              },
              {
                name: "Cecilia",
                location: "Portage, IN",
                quote: "Sandra was such an amazing host. Her home was beautiful. My family and I felt like we were at home. The house was super clean and Sandra provided everything we needed for our stay. We definitely hope to be back next year. Thank you for having us!"
              },
              {
                name: "Don",
                location: "Weyerhaeuser, WI",
                quote: "The house was very clean and beautifully decorated. Everything you need is there. The beds were comfortable and the rooms were quiet. The pool is heated and clean. The moment you walked in you felt relaxed and at home. The hosts are very responsive and accommodating."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-teal-50 border-teal-100" role="article">
                <CardHeader>
                  <div className="flex text-yellow-400 mb-4" role="img" aria-label="5 star rating">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <CardTitle className="text-teal-800 text-lg sm:text-xl">{testimonial.name}</CardTitle>
                  <CardDescription className="text-teal-600 text-sm sm:text-base">{testimonial.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-700 italic text-sm sm:text-base">&quot;{testimonial.quote}&quot;</blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* View All Reviews Button */}
          <div className="text-center mt-8 sm:mt-12">
            <a 
              href="https://www.airbnb.com/rooms/953226587982597312/reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="View all reviews on Airbnb - opens in new window"
            >
              <Button 
                size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 text-base font-medium"
              >
                View All Reviews
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="ml-2"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-teal-900 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8" role="contentinfo">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-1 sm:col-span-2 md:col-span-2">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Treasure Coast Getaway</h3>
              <p className="text-teal-200 mb-4 text-sm sm:text-base">
                Your luxury beachfront escape on Florida&apos;s beautiful Treasure Coast.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/treasurecoastgetaway/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-teal-300 p-2 rounded-full hover:bg-teal-800 transition-colors"
                  aria-label="Follow us on Instagram - opens in new window"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h3>
              <nav role="navigation" aria-label="Footer navigation">
                <ul className="space-y-2 text-sm sm:text-base">
                  <li><a href="#home" className="text-teal-200 hover:text-white transition-colors">Home</a></li>
                  <li><a href="#features" className="text-teal-200 hover:text-white transition-colors">Features</a></li>
                  <li><a href="#gallery" className="text-teal-200 hover:text-white transition-colors">Gallery</a></li>
                  <li>
                    <a 
                      href="https://www.airbnb.com/rooms/953226587982597312?adults=8&check_in=2025-04-01&check_out=2025-04-05&search_mode=regular_search&source_impression_id=p3_1741652763_P3uYvCbUiDOw5PuM&previous_page_section_name=1000&federated_search_id=56743edb-f0ff-488d-b37a-2876877dde75" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-teal-200 hover:text-white transition-colors"
                      aria-label="Book now on Airbnb - opens in new window"
                    >
                      Book Now
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4">Contact Information</h3>
              <address className="not-italic">
                <ul className="space-y-2 text-teal-200 text-sm sm:text-base">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 flex-shrink-0" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>6718 Northwest Mamie Court, Port St. Lucie, FL</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 flex-shrink-0" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <a href="tel:+15869041191" className="hover:text-white transition-colors">(586) 904-1191</a>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 flex-shrink-0" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <a href="mailto:treasurecoastpropertyrentals@gmail.com" className="hover:text-white transition-colors break-all">treasurecoastpropertyrentals@gmail.com</a>
                  </li>
                </ul>
              </address>
            </div>
          </div>
          
          <div className="border-t border-teal-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-teal-300 text-xs sm:text-sm">
            <p>© {new Date().getFullYear()} Treasure Coast Getaway. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}