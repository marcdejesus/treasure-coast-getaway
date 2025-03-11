"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Gallery from '@/components/Gallery';

export default function TreasureCoastGetaway() {
  // Gallery images array
  const galleryImages = [
    { src: "/entrance.jpg", alt: "Entrance view" },
    { src: "/kitchen.jpg", alt: "Modern kitchen" },
    { src: "/master-bathroom.jpg", alt: "Master bathroom" },
    { src: "/master.jpg", alt: "Master bedroom" },
    { src: "/pool.jpg", alt: "Swimming pool" },
    { src: "/pool2.jpg", alt: "Pool view" },
    { src: "/outside-front.jpg", alt: "Front of house" },
    { src: "/2-bed-bedroom.jpg", alt: "Bedroom with 2 beds" },
    { src: "/2-bed-bedroom2.jpg", alt: "Bedroom with 2 beds" },
    { src: "/bath.jpg", alt: "Bath" },
    { src: "/closet.jpg", alt: "Closet" },
    { src: "/closet2.jpg", alt: "Closet" },
    { src: "/coffee.jpg", alt: "Coffee station" },
    { src: "/cornhole.jpg", alt: "Cornhole boards" },
    { src: "/dining-table.jpg", alt: "Dining table" },
    { src: "/dining.jpg", alt: "Dining table" },
    { src: "/driveway.jpg", alt: "Driveway/Parking" },
    { src: "/entrance-to-master-bathroom.jpg", alt: "Master bathroom entrance" },
    { src: "/entrance1.jpg", alt: "Entrance view" },
    { src: "/grill.jpg", alt: "Grill" },
    { src: "/guest-bedroom.jpg", alt: "Queen-sized bedroom" },
    { src: "/guest-bedroom2.jpg", alt: "Queen-sized bedroom" },
    { src: "/kids-table.jpg", alt: "Kid's table" },
    { src: "/kids-table2.jpg", alt: "Kid's table" },
    { src: "/kitchen-and-dining.jpg", alt: "Kitchen and Dining Room" },
    { src: "/kitchen-angle-4.jpg", alt: "Kitchen" },
    { src: "/kitchen-angle-5.jpg", alt: "Kitchen" },
    { src: "/kitchen-angle2.jpg", alt: "Kitchen" },
    { src: "/kitchen-angle3.jpg", alt: "Kitchen" },
    { src: "/kitchen-angle6.jpg", alt: "Kitchen" },
    { src: "/laundry-room.jpg", alt: "Laundry Room" },
    { src: "/livingroom.jpg", alt: "Living Room" },
    { src: "/livingroom1.jpg", alt: "Living Room" },
    { src: "/master-bathroom-left.jpg", alt: "Master Bathroom" },
    { src: "/master-bathroom-right.jpg", alt: "Master Bathroom" },
    { src: "/master-bedroom1.jpg", alt: "Master Bedroom" },
    { src: "/master-shower.jpg", alt: "Master Bathroom Shower" },
    { src: "/office-with-printer.jpg", alt: "Office with printer" },
    { src: "/office.jpg", alt: "Office with printer" },
    { src: "/outside-area.jpg", alt: "Patio" },
    { src: "/outside-entrance.jpg", alt: "Front entrance" },
    { src: "/patio-tv.jpg", alt: "Patio" },
    { src: "/patio.jpg", alt: "Patio" },
    { src: "/pool-bathroom.jpg", alt: "Guest Bathroom (Poolside)" },
    { src: "/pool3.jpg", alt: "Pool" },
    { src: "/pull-out-bedroom.jpg", alt: "Small bedroom" },
    { src: "/pullout-bedroom2.jpg", alt: "Small bedroom" },
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-teal-50 to-blue-50">
      {/* Add Navbar */}
      <Navbar />
      
      {/* Header/Hero Section */}
      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: `url("/outside-front.jpg")`,
            filter: "brightness(0.7)"
          }} 
        />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 mt-36 md:mt-120">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Treasure Coast <span className="text-white">Getaway</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
            Experience paradise on Florida&apos;s beautiful Treasure Coast
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white hover:bg-white/30">
              View Gallery
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <a href="#features" className="inline-block">
            <Button variant="ghost" size="sm" className="text-white animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </Button>
          </a>
        </div>
      </header>

      {/* Combined Features & Amenities Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-800">Paradise Awaits You</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-teal-50 border-teal-100">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-700">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <CardTitle className="text-teal-800">Coastal Style Home</CardTitle>
                <CardDescription className="text-teal-600">4 beds, 2 baths</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Our 4-bedroom, 2-bath coastal style home is the perfect place for large group trips.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-teal-50 border-teal-100">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-700">
                    <path d="M2 12h20M2 12a10 10 0 0 1 20 0M2 12a10 10 0 0 0 20 0M4 12a8 8 0 0 1 16 0M4 12a8 8 0 0 0 16 0M6 12a6 6 0 0 1 12 0M6 12a6 6 0 0 0 12 0M8 12a4 4 0 0 1 8 0M8 12a4 4 0 0 0 8 0M10 12a2 2 0 0 1 4 0M10 12a2 2 0 0 0 4 0"/>
                  </svg>
                </div>
                <CardTitle className="text-teal-800">Private Oasis</CardTitle>
                <CardDescription className="text-teal-600">Your own slice of paradise</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Enjoy our private pool, lush tropical garden, and outdoor dining area with BBQ, perfect for making memories with loved ones.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-teal-50 border-teal-100">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-700">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                <CardTitle className="text-teal-800">Prime Location</CardTitle>
                <CardDescription className="text-teal-600">The heart of the Treasure Coast</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Located minutes from restaurants, shopping, and attractions, while still offering the peace and tranquility of a quiet location.</p>
              </CardContent>
            </Card>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-teal-800">Luxurious Amenities</h3>
          
          <Tabs defaultValue="indoor" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="indoor">Indoor</TabsTrigger>
              <TabsTrigger value="outdoor">Outdoor</TabsTrigger>
              <TabsTrigger value="services">Policies & Services</TabsTrigger>
            </TabsList>
            
            <TabsContent value="indoor" className="bg-teal-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-xl text-teal-800 mb-4">Living & Comfort</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Spacious living room with stylish coastal decor
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Master suite with king bed and ensuite
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Guest bedroom with queen bed
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Twin bedroom with two beds
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Pullout bedroom for additional guests
                    </li>
                  </ul>
                  
                  <h3 className="font-semibold text-xl text-teal-800 mb-4 mt-6">Kitchen & Dining</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Fully equipped gourmet kitchen
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Modern appliances (refrigerator, oven, stove)
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Dishwasher & microwave
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Coffee maker & blender
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Toaster & rice steamer
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Cooking utensils & spices
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Dining area with seating for 8
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Children's high chair
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl text-teal-800 mb-4">Technology & Entertainment</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> High-speed WiFi throughout
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Cable TV with streaming services
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Bluetooth sound system
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Board games and books
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Office space with printer
                    </li>
                  </ul>
                  
                  <h3 className="font-semibold text-xl text-teal-800 mb-4 mt-6">Bathroom & Laundry</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> 2 full bathrooms with showers
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Master bathroom with bathtub
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Hair dryers in each bathroom
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Washer and dryer
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Iron and ironing board
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Fresh towels and bed linens
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Essential toiletries
                    </li>
                  </ul>
                  
                  <h3 className="font-semibold text-xl text-teal-800 mb-4 mt-6">Climate Control</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Central air conditioning
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Central heating
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Ceiling fans throughout
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="outdoor" className="bg-teal-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-xl text-teal-800 mb-4">Pool & Spa</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Private heated swimming pool
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Relaxing spa area
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Poolside lounge chairs
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Outdoor shower
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Pool bathroom
                    </li>
                  </ul>
                  
                  <h3 className="font-semibold text-xl text-teal-800 mb-4 mt-6">Beach & Recreation</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Minutes from beautiful beaches
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Beach chairs provided
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Beach toys and equipment
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Cornhole boards for outdoor fun
                    </li>
                  </ul>
                  
                  <h3 className="font-semibold text-xl text-teal-800 mb-4 mt-6">Parking</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Garage parking included
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Additional driveway parking
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Street parking available
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl text-teal-800 mb-4">Outdoor Living</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Covered patio with ceiling fans
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Outdoor dining area for 8
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Electric BBQ grill
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Outdoor TV for entertainment
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Hammocks for relaxation
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Children's outdoor play area
                    </li>
                  </ul>
                  
                  <h3 className="font-semibold text-xl text-teal-800 mb-4 mt-6">Location Features</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Near ocean and beaches
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Close to restaurants and shops
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Minutes from local attractions
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Quiet residential neighborhood
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Easy access to major highways
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="services" className="bg-teal-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-xl text-teal-800 mb-4">House Policies</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Children welcome
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> No smoking allowed
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> No pets allowed
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Accessible 24/7
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Credit cards accepted
                    </li>
                  </ul>
                  
                  <h3 className="font-semibold text-xl text-teal-800 mb-4 mt-6">Safety Features</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Smoke detectors
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Carbon monoxide detectors
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> First aid kit
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Security system
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Fire extinguisher
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Emergency contact information
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl text-teal-800 mb-4">Guest Services</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Self check-in
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Digital guidebook
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Local recommendations
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Responsive host support
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-teal-600">✓</span> Cleaning service available
                    </li>
                  </ul>
                  
                  <h3 className="font-semibold text-xl text-teal-800 mb-4 mt-6">Additional Information</h3>
                  <div className="space-y-4 text-gray-700">
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
      <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8 bg-teal-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-800">Gallery</h2>
          
          {/* Only show first 6 images in grid, but all images in modal */}
          <Gallery images={galleryImages} visibleCount={6} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-800">Guest Experiences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <Card key={index} className="bg-teal-50 border-teal-100">
                <CardHeader>
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <CardTitle className="text-teal-800 text-xl">{testimonial.name}</CardTitle>
                  <CardDescription className="text-teal-600">{testimonial.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* View All Reviews Button */}
          <div className="text-center mt-12">
            <a 
              href="https://www.airbnb.com/rooms/953226587982597312/reviews" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" className="bg-teal-600 hover:bg-teal-700 text-white"
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
      <footer id="contact" className="bg-teal-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Treasure Coast Getaway</h3>
              <p className="text-teal-200 mb-4">
                Your luxury beachfront escape on Florida&apos;s beautiful Treasure Coast.
              </p>
              <div className="flex space-x-4">
                
                <a href="https://www.instagram.com/treasurecoastgetaway/" target="_blank" className="text-white hover:text-teal-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-teal-200 hover:text-white">Home</a></li>
                <li><a href="#features" className="text-teal-200 hover:text-white">Features</a></li>
                <li><a href="#gallery" className="text-teal-200 hover:text-white">Gallery</a></li>
                <li><a href="https://www.airbnb.com/rooms/953226587982597312?adults=8&check_in=2025-04-01&check_out=2025-04-05&search_mode=regular_search&source_impression_id=p3_1741652763_P3uYvCbUiDOw5PuM&previous_page_section_name=1000&federated_search_id=56743edb-f0ff-488d-b37a-2876877dde75" target="_blank" className="text-teal-200 hover:text-white">Book Now</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-teal-200">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>6718 Northwest Mamie Court, Port St. Lucie, FL</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>(586) 904-1191</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>treasurecoastpropertyrentals@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-teal-800 mt-12 pt-8 text-center text-teal-300 text-sm">
            <p>© {new Date().getFullYear()} Treasure Coast Getaway. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}