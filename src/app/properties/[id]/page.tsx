"use client";
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Bed, Bath, Square, MapPin, ChevronLeft, Share2, Heart } from 'lucide-react';
import Link from 'next/link';

// This would usually come from a database, but we'll use our mock data
const propertiesData: Record<string, any> = {
  "glass-house": {
    title: "The Glass House",
    location: "Malibu, California",
    price: "$1,250,000",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    description: "An architectural masterpiece perched on the cliffs of Malibu. This residence features floor-to-ceiling glass walls that blur the line between interior luxury and the Pacific Ocean.",
    features: ["Infinity Pool", "Wine Cellar", "Smart Home System", "Private Beach Access"],
    image: "/2.jpg"
  },
  "ocean-villa": {
    title: "Ocean Breeze Villa",
    location: "Miami, Florida",
    price: "$2,500,000",
    beds: 5,
    baths: 4,
    sqft: "4,500",
    description: "A tropical sanctuary designed for those who appreciate the finer things. Features open-concept living and custom Italian marble throughout.",
    features: ["Deep Water Dock", "Outdoor Kitchen", "Guest House", "Gym"],
    image: "/3.jpg"
  },
  "skyline-loft": {
    title: "Skyline Loft",
    location: "Manhattan, New York",
    price: "$3,800,000",
    beds: 3,
    baths: 2,
    sqft: "2,800",
    description: "High-altitude living in the heart of the city. Panoramic views of the Empire State Building and a private terrace.",
    features: ["24/7 Doorman", "Private Lift", "Library", "Chef's Kitchen"],
    image: "/4.jpg"
  }
};

export default function PropertyDetail() {
  const { id } = useParams();
  const property = propertiesData[id as string] || propertiesData["glass-house"];

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Top Bar Navigation */}
      <div className="px-6 md:px-16 py-6 flex justify-between items-center border-b border-slate-100">
        <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-xs uppercase tracking-widest font-bold">
          <ChevronLeft className="w-4 h-4" /> Back to Collection
        </Link>
        <div className="flex gap-6">
          <button className="text-slate-400 hover:text-slate-900 transition-colors"><Share2 className="w-4 h-4" /></button>
          <button className="text-slate-400 hover:text-red-500 transition-colors"><Heart className="w-4 h-4" /></button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* LEFT: Immersive Imagery */}
        <div className="lg:w-3/5 p-6 md:p-12">
          <div className="relative aspect-[16/10] w-full rounded-[3rem] overflow-hidden shadow-2xl">
            <Image 
              src={property.image} 
              alt={property.title} 
              fill 
              className="object-cover"
              priority
            />
          </div>
          {/* Secondary Grid */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-slate-100">
              <Image src="/4.jpg" alt="Interior" fill className="object-cover opacity-80 hover:opacity-100 transition" />
            </div>
            <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-slate-100">
              <Image src="/3.jpg" alt="Interior" fill className="object-cover opacity-80 hover:opacity-100 transition" />
            </div>
          </div>
        </div>

        {/* RIGHT: Sophisticated Details */}
        <div className="lg:w-2/5 p-6 md:p-12 lg:border-l border-slate-100">
          <div className="sticky top-32">
            <p className="text-slate-400 text-[10px] uppercase tracking-[0.4em] font-bold mb-4 flex items-center gap-2">
              <MapPin className="w-3 h-3" /> {property.location}
            </p>
            <h1 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6">{property.title}</h1>
            <p className="text-2xl font-light text-slate-400 mb-10">{property.price}</p>

            {/* Quick Specs Area */}
            <div className="grid grid-cols-3 gap-4 py-8 border-y border-slate-100 mb-10">
              <div className="text-center">
                <Bed className="w-5 h-5 mx-auto mb-2 text-slate-300" />
                <p className="text-sm font-medium text-slate-900">{property.beds}</p>
                <p className="text-[9px] uppercase tracking-tighter text-slate-400">Bedrooms</p>
              </div>
              <div className="text-center border-x border-slate-100">
                <Bath className="w-5 h-5 mx-auto mb-2 text-slate-300" />
                <p className="text-sm font-medium text-slate-900">{property.baths}</p>
                <p className="text-[9px] uppercase tracking-tighter text-slate-400">Bathrooms</p>
              </div>
              <div className="text-center">
                <Square className="w-5 h-5 mx-auto mb-2 text-slate-300" />
                <p className="text-sm font-medium text-slate-900">{property.sqft}</p>
                <p className="text-[9px] uppercase tracking-tighter text-slate-400">Sq. Ft.</p>
              </div>
            </div>

            {/* Narrative Description */}
            <div className="mb-10">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-900 mb-4">The Narrative</h4>
              <p className="text-slate-500 font-light leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-12">
               <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-900 mb-4">Features</h4>
               <div className="flex flex-wrap gap-2">
                 {property.features.map((feat: string) => (
                   <span key={feat} className="px-4 py-2 bg-slate-50 rounded-full text-[10px] text-slate-600 font-medium">
                     {feat}
                   </span>
                 ))}
               </div>
            </div>

            {/* Action Call */}
            <button className="w-full bg-slate-900 text-white py-5 rounded-2xl text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-black transition-all shadow-xl active:scale-[0.98]">
              Book a Private Viewing
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}