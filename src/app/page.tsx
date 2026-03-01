import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // 1. Create a data array for the properties
  const featuredProperties = [
    {
      id: "glass-house",
      title: "The Glass House",
      location: "Malibu, CA",
      price: "$1.2M",
      beds: 4,
      baths: 3,
      image: "/2.jpg"
    },
    {
      id: "ocean-villa",
      title: "Ocean Breeze Villa",
      location: "Miami, FL",
      price: "$2.5M",
      beds: 5,
      baths: 4,
      image: "/3.jpg"
    },
    {
      id: "skyline-loft",
      title: "Skyline Loft",
      location: "New York, NY",
      price: "$3.8M",
      beds: 3,
      baths: 2,
      image: "/4.jpg"
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#020617]">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-20 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/1.jpg"
            alt="Modern Luxury Architecture"
            fill
            className="object-cover opacity-70"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#020617]" />
        </div>

        <div className="relative z-10 max-w-4xl mt-10 md:mt-0">
          <h1 className="text-white text-5xl md:text-8xl font-serif leading-[1.1] tracking-tight">
            Finding Your New <br />
            <span className="italic font-light opacity-90">Home Is Simple</span>
          </h1>
          <p className="mt-6 md:mt-8 text-white/60 max-w-sm md:max-w-md text-base md:text-lg font-light leading-relaxed border-l border-accent/50 pl-6">
            Explore our hand-picked selection of premium properties designed for modern living.
          </p>

          <div className="mt-10 md:mt-12 group flex items-center gap-4 md:gap-6 bg-white/10 backdrop-blur-xl border border-white/10 w-full md:w-fit pl-6 md:pl-8 pr-2 py-2 rounded-2xl md:rounded-full hover:bg-white/15 transition-all duration-500 cursor-pointer">
            <span className="text-white text-xs md:text-sm tracking-widest uppercase font-medium">Explore Properties</span>
            <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-full group-hover:rotate-45 transition-transform duration-500 ml-auto md:ml-0">
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* --- SEARCH WIDGET --- */}
        <div className="relative md:absolute md:bottom-16 md:left-1/2 md:-translate-x-1/2 mt-16 md:mt-0 w-full max-w-4xl px-4 md:px-0">
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-2 md:p-3 shadow-2xl flex flex-col md:flex-row items-center">
            <div className="flex-1 w-full flex items-center px-6 py-4 md:py-2 gap-4">
              <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Search by city..." className="bg-transparent border-none outline-none text-white placeholder:text-white/30 w-full text-sm font-light tracking-wide" />
            </div>
            <button className="w-full md:w-auto bg-white text-black px-10 py-4 md:py-3.5 rounded-[2rem] text-[10px] uppercase font-bold tracking-[0.2em] transition-all duration-300">
              Find Now
            </button>
          </div>
        </div>
      </section>

      {/* --- MOST VIEWED SECTION --- */}
      <section className="bg-[#fcfcfd] py-20 md:py-32 px-6 md:px-20 rounded-t-[3rem] -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tight">Most Viewed</h2>
              <p className="mt-4 text-slate-500 font-light text-lg">Handpicked properties with the highest engagement.</p>
            </div>
          </div>

          {/* 2. Map through the data and wrap in <Link> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {featuredProperties.map((property) => (
              <Link 
                key={property.id} 
                href={`/properties/${property.id}`} 
                className="group flex flex-col transition-all duration-500"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-slate-200 shadow-xl">
                  <Image 
                    src={property.image} 
                    alt={property.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 text-white text-xs tracking-widest uppercase font-bold text-center">
                    View Details
                  </div>
                </div>
                
                <div className="mt-8 px-2">
                  <div className="flex justify-between items-center text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-3">
                    <span>{property.location}</span>
                    <span className="text-accent">● For Sale</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-serif text-slate-900 group-hover:text-blue-900 transition-colors">
                        {property.title}
                      </h3>
                      <div className="flex gap-4 mt-2 text-slate-500 text-sm font-light">
                        <span>{property.beds} Beds</span>
                        <span>•</span>
                        <span>{property.baths} Baths</span>
                      </div>
                    </div>
                    <p className="text-xl font-medium text-slate-900">{property.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}