import { 
  LifeBuoy, 
  MessageSquare, 
  FileText, 
  ArrowRight 
} from 'lucide-react';

export default function SupportPage() {
  const supportCategories = [
    {
      title: "Booking Assistance",
      desc: "Help with reservations, scheduling viewings, and rental agreements.",
      icon: <LifeBuoy className="w-5 h-5" />,
    },
    {
      title: "Property Management",
      desc: "Resources for landlords regarding listing maintenance and tenant relations.",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      title: "Technical Support",
      desc: "Issues with your account, app performance, or payment processing.",
      icon: <MessageSquare className="w-5 h-5" />,
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8F9FA] pt-40 pb-24 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        
        {/* Header: Centered & Clean */}
        <div className="text-center mb-24">
          <p className="text-slate-400 text-[10px] uppercase tracking-[0.5em] font-bold mb-4">Concierge</p>
          <h1 className="text-slate-900 text-5xl md:text-7xl font-serif tracking-tight">
            How can we <span className="italic font-light text-slate-500">assist you?</span>
          </h1>
          <p className="mt-8 text-slate-500 font-light max-w-lg mx-auto leading-relaxed">
            Our dedicated support team is here to ensure your real estate journey is seamless and sophisticated.
          </p>
        </div>

        {/* Support Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {supportCategories.map((cat, i) => (
            <div key={i} className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500 cursor-pointer">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
                {cat.icon}
              </div>
              <h3 className="text-xl font-serif text-slate-900 mb-4">{cat.title}</h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed mb-6">
                {cat.desc}
              </p>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-slate-400 group-hover:text-slate-900 transition-colors">
                Learn More <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form: Minimalist Glassbox */}
        <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif text-slate-900 mb-6">Direct Inquiry</h2>
              <p className="text-slate-500 font-light text-sm leading-relaxed">
                Can't find what you're looking for? Send us a message and our advisors will reach out within 24 hours.
              </p>
              
              <div className="mt-12 space-y-6">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Email</p>
                  <p className="text-slate-900 font-medium">support@askreal.com</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Office</p>
                  <p className="text-slate-900 font-medium">Fifth Ave, New York, NY</p>
                </div>
              </div>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" className="bg-transparent border-b border-slate-200 py-3 outline-none focus:border-slate-900 transition-all text-sm font-light" />
                <input type="text" placeholder="Last Name" className="bg-transparent border-b border-slate-200 py-3 outline-none focus:border-slate-900 transition-all text-sm font-light" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-slate-900 transition-all text-sm font-light" />
              <textarea placeholder="How can we help?" rows={4} className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-slate-900 transition-all text-sm font-light resize-none" />
              <button className="w-full bg-slate-900 text-white py-5 rounded-2xl text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-slate-800 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}