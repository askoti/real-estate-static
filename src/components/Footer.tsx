import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 px-8 md:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-full text-xs font-bold">
                A
              </div>
              <span className="font-bold text-xl tracking-[0.2em] uppercase">
                Ask<span className="font-light opacity-60">Real</span>
              </span>
            </div>
            <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs">
              Redefining the luxury real estate experience with architectural precision and curated global listings.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Listings', 'Agents', 'Journal'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/60 hover:text-white transition-colors text-sm font-light tracking-wide">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20 mb-8">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Licensing'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/60 hover:text-white transition-colors text-sm font-light tracking-wide">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Newsletter */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20 mb-8">Stay Updated</h4>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-white/10 py-2 focus:border-white outline-none text-sm transition-all font-light"
              />
              <button className="absolute right-0 bottom-2 text-white/40 group-hover:text-white transition-colors uppercase text-[10px] tracking-widest font-bold">
                Join
              </button>
            </div>
            <div className="flex gap-6 mt-10">
              {/* Simple Social Icons */}
              {['FB', 'IG', 'TW', 'LI'].map((social) => (
                <Link key={social} href="#" className="text-[10px] font-bold text-white/30 hover:text-white transition-colors tracking-widest uppercase">
                  {social}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-medium">
            © {currentYear} Designed and Build by <strong className='text-white'>Kastriot Aliu</strong>
          </p>
          <div className="flex gap-8">
            <span className="text-white/10 text-[9px] uppercase tracking-[0.2em]">Based in New York City</span>
            <span className="text-white/10 text-[9px] uppercase tracking-[0.2em]">Member of the NAR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}