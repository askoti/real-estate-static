import Image from 'next/image';

const agents = [
  {
    name: "Johnathan Doe",
    role: "Principal Advisor",
    phone: "+1 (555) 012-3456",
    image: "/5.avif",
  },
  {
    name: "Sarah Sterling",
    role: "Luxury Specialist",
    phone: "+1 (555) 987-6543",
    image: "/7.avif",
  },
  {
    name: "Marcus Vane",
    role: "Portfolio Manager",
    phone: "+1 (555) 246-8102",
    image: "/6.avif",
  },
];

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] pt-40 pb-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header: Clean & Editorial */}
        <div className="mb-24 text-center">
          <p className="text-slate-400 text-[10px] uppercase tracking-[0.5em] font-bold mb-4">The Collective</p>
          <h1 className="text-slate-900 text-5xl md:text-7xl font-serif tracking-tight">
            Our Professional <span className="italic font-light text-slate-500">Advisors</span>
          </h1>
          <div className="w-12 h-[1px] bg-slate-300 mx-auto mt-8" />
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {agents.map((agent, index) => (
            <div key={index} className="group flex flex-col items-center">
              
              {/* Image Container: Soft Shadows & Clean Borders */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 transition-all duration-700 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)]">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Action Button (Light Glass) */}
                <div className="absolute inset-x-6 bottom-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="w-full bg-white/80 backdrop-blur-md border border-white/40 py-4 rounded-2xl text-[10px] uppercase font-bold tracking-widest text-slate-900 shadow-xl hover:bg-slate-900 hover:text-white transition-all">
                    View Portfolio
                  </button>
                </div>
              </div>

              {/* Text: Minimalist Stacking */}
              <div className="mt-8 text-center">
                <h3 className="text-slate-900 text-2xl font-serif">{agent.name}</h3>
                <p className="text-slate-400 text-[9px] uppercase tracking-[0.3em] font-black mt-3 mb-4">
                  {agent.role}
                </p>
                
                {/* Contact Line */}
                <div className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer group/link">
                  <span className="text-[11px] font-medium tracking-wide">{agent.phone}</span>
                  <div className="w-4 h-[1px] bg-slate-300 group-hover/link:w-8 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}