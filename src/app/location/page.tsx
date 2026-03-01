import { MapPin, Navigation, Landmark, TreePine } from 'lucide-react';

export default function LocationPage() {
  const pointsOfInterest = [
    { name: "The Glass District", type: "Architecture", distance: "0.5 miles", icon: <Landmark className="w-4 h-4" /> },
    { name: "Central Park North", type: "Nature", distance: "1.2 miles", icon: <TreePine className="w-4 h-4" /> },
    { name: "Skyline Lounge", type: "Social", distance: "0.2 miles", icon: <Navigation className="w-4 h-4" /> },
  ];

  return (
    <main className="min-h-screen bg-[#F8F9FA] pt-40 pb-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="text-slate-400 text-[10px] uppercase tracking-[0.5em] font-bold mb-4">Global Presence</p>
            <h1 className="text-slate-900 text-5xl md:text-7xl font-serif tracking-tight">
              Prime <span className="italic font-light text-slate-500">Destinations</span>
            </h1>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 bg-white border border-slate-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-900 shadow-sm">
              New York, NY
            </div>
            <div className="px-6 py-3 bg-slate-100 border border-transparent rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-400">
              London, UK
            </div>
          </div>
        </div>

        {/* Map & Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
          
          {/* Sidebar: Neighborhood Stats */}
          <div className="lg:col-span-1 space-y-6 flex flex-col h-full">
            <div className="flex-1 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm overflow-y-auto">
              <h3 className="text-xl font-serif mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-slate-400" /> Neighborhood
              </h3>
              
              <div className="space-y-8">
                {pointsOfInterest.map((poi, i) => (
                  <div key={i} className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      {poi.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{poi.name}</p>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">
                        {poi.type} • {poi.distance}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                <p className="text-xs text-slate-500 leading-relaxed italic">
                  "This area is recognized for its ultra-modern infrastructure and proximity to world-class cultural landmarks."
                </p>
              </div>
            </div>
            
            <button className="w-full bg-slate-900 text-white py-5 rounded-[1.5rem] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-slate-800 transition-all">
              Request Site Visit
            </button>
          </div>

          {/* The Map Component */}
          <div className="lg:col-span-2 relative rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl bg-slate-200">
            {/* Using a stylized Google Maps Iframe with 'grayscale' and 'invert' filters 
              to match our premium aesthetic.
            */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976373946229!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1715636000000!5m2!1sen!2sus"
              className="w-full h-full grayscale brightness-110 contrast-125 transition-all"
              style={{ border: 0, filter: 'grayscale(1) contrast(1.2) brightness(1.1)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Map Overlay Badge */}
            <div className="absolute top-8 left-8 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 flex items-center gap-2 shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">Live Availability</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}