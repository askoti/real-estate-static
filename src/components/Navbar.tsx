"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  
  // When the sidebar is open, we force the icon to be white so it's visible against the dark sidebar
  const textColor = isHome || isOpen ? "text-white" : "text-slate-900";
  const borderColor = isHome ? "border-white/20" : "border-black/10";
  const btnBg = isHome ? "bg-white/10" : "bg-black/5";

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Agents', href: '/agents' },
    { name: 'Support', href: '/support' },
    { name: 'Location', href: '/location' },
    { name: 'About us', href: '/about' },
  ];

  return (
    <>
      <nav className={`absolute top-0 left-0 w-full z-50 flex items-center justify-between px-8 md:px-16 py-8 transition-colors duration-300 ${textColor}`}>
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer relative z-[60]">
          <span className="font-bold text-xl tracking-[0.15em] uppercase">
            Ask<span className="font-light opacity-70">Real</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="opacity-60 text-[10px] uppercase tracking-[0.25em] hover:opacity-100 transition-all font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-6">
          {/* hidden on mobile (hidden), shown on md and up (md:block) */}
          <button className={`hidden md:block ${btnBg} backdrop-blur-md border ${borderColor} px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] transition-all font-bold hover:bg-slate-900 hover:text-white`}>
            Try now
          </button>
          
          {/* Mobile Toggle - Improved X visibility */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden relative z-[60] flex flex-col justify-center items-center w-8 h-8 gap-1.5 outline-none"
            aria-label="Toggle Menu"
          >
            <span className={`h-0.5 w-6 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2 bg-white' : 'bg-current'}`} />
            <span className={`h-0.5 w-6 transition-all duration-300 ${isOpen ? 'opacity-0' : 'bg-current'}`} />
            <span className={`h-0.5 w-6 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2 bg-white' : 'bg-current'}`} />
          </button>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div className={`fixed inset-0 z-[55] bg-black/60 backdrop-blur-2xl transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute right-0 h-full w-[85%] max-w-sm bg-[#050505] p-12 flex flex-col justify-center gap-10 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col gap-8">
            <p className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold">Menu</p>
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsOpen(false)} 
                className="text-white text-4xl font-serif hover:italic transition-all inline-block"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile-only CTA at the bottom of the sidebar */}
          <div className="mt-10 pt-10 border-t border-white/10">
            <button className="w-full bg-white text-black py-4 rounded-2xl text-[10px] uppercase tracking-[0.2em] font-bold">
              Try now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}