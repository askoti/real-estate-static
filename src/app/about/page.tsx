import Image from 'next/image';

export default function AboutPage() {
  const stats = [
    { label: "Properties Curated", value: "450+" },
    { label: "Global Locations", value: "12" },
    { label: "Awards Won", value: "24" },
    { label: "Year Founded", value: "2018" },
  ];

  return (
    <main className="min-h-screen bg-[#F8F9FA] pt-40 pb-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section 1: The Narrative Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <p className="text-slate-400 text-[10px] uppercase tracking-[0.5em] font-bold mb-6">Our Legacy</p>
            <h1 className="text-slate-900 text-5xl md:text-8xl font-serif tracking-tighter leading-[0.9] mb-10">
              Where Art Meets <br />
              <span className="italic font-light text-slate-400">Habitation</span>
            </h1>
            <p className="text-slate-500 font-light text-lg leading-relaxed max-w-md">
              Founded on the belief that a home is more than a structure—it is a sanctuary of design. ASKREAL curates living spaces that inspire the human spirit.
            </p>
          </div>
          <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
            <Image 
              src="/3.jpg" 
              alt="Architecture" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

        {/* Section 2: The Philosophy (Dark Break) */}
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center mb-32 relative overflow-hidden">
            {/* Subtle light effect in the corner */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full" />
            
            <h2 className="text-white/20 text-[10px] uppercase tracking-[0.6em] font-bold mb-12">The Manifesto</h2>
            <blockquote className="text-white text-3xl md:text-5xl font-serif leading-tight italic max-w-4xl mx-auto">
              "We don't just sell square footage; we broker the backdrop to your life's most significant moments."
            </blockquote>
            <div className="mt-12 w-20 h-[1px] bg-white/20 mx-auto" />
        </div>

        {/* Section 3: Values & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32">
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-serif text-slate-900 mb-6">Our Core Values</h3>
            <p className="text-slate-500 font-light text-sm leading-relaxed">
              Integrity, architectural significance, and unparalleled service are the pillars that support every transaction at ASKREAL.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left border-l border-slate-200 pl-6">
                <p className="text-3xl font-serif text-slate-900 mb-1">{stat.value}</p>
                <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Image Collage */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px]">
            <div className="relative rounded-3xl overflow-hidden col-span-1">
                <Image src="/1.jpg" alt="Interior" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="relative rounded-3xl overflow-hidden col-span-1 translate-y-12">
                <Image src="/2.jpg" alt="Interior" fill className="object-cover" />
            </div>
            <div className="relative rounded-3xl overflow-hidden col-span-1">
                <Image src="/3.jpg" alt="Interior" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="relative rounded-3xl overflow-hidden col-span-1 translate-y-12">
                <Image src="/4.jpg" alt="Interior" fill className="object-cover" />
            </div>
        </div>
      </div>
    </main>
  );
}