
import React, { useState, Suspense, lazy } from 'react';
import { PROFILE_DATA, ACTION_LINKS, PRODUCT_SECTIONS } from './constants';
import ProductCard from './components/ProductCard';

// Lazy load components for performance
const LinkButton = lazy(() => import('./components/LinkButton'));

const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactFormStatus, setContactFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactFormStatus('sending');
    setTimeout(() => {
      setContactFormStatus('sent');
      setTimeout(() => {
        setIsContactOpen(false);
        setContactFormStatus('idle');
      }, 2000);
    }, 1500);
  };

  const scrollToAbout = () => {
    const element = document.getElementById('tentang-kami');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const primaryCta = ACTION_LINKS.find(link => link.id === 'post-loker');
  const otherActionLinks = ACTION_LINKS.filter(link => link.id !== 'post-loker');

  // Business logic for WhatsApp contact
  const waNumber = "6283161621443"; 
  const waLink = `https://wa.me/${waNumber}?text=Halo%20Admin%20Loker%20Lampung,%20saya%20ingin%20bekerja%20sama...`;

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#020617] bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e1b4b] pb-24 overflow-x-hidden animate-gradient-slow bg-[length:400%_400%] relative">
      {/* Visual Enhancements */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0"></div>
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Header Profile Section */}
      <header className="w-full max-w-2xl px-4 pt-12 mb-10 z-20">
        <div className="bg-white/5 backdrop-blur-3xl rounded-[3rem] py-6 px-7 flex items-center justify-between border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-5">
             <div className="relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
               <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center text-white shadow-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                 <span className="text-center font-black text-[14px] leading-none">LOKER<br/>LPG</span>
               </div>
             </div>
             <div className="flex flex-col">
               <h1 className="text-lg md:text-xl font-black text-white flex items-center gap-2 tracking-tight">
                 {PROFILE_DATA.username}
                 {PROFILE_DATA.isVerified && (
                    <div className="bg-blue-400 text-[#020617] rounded-full p-0.5 flex items-center justify-center shadow-[0_0_15px_rgba(96,165,250,0.4)]" title="Verified Account">
                      <i className="fa-solid fa-check text-[10px]"></i>
                    </div>
                 )}
               </h1>
               <div className="flex items-center gap-2 mt-0.5">
                 <span className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                 </span>
                 <span className="text-[11px] text-blue-300/90 font-bold tracking-[0.12em] uppercase">Portal Karir Lampung</span>
               </div>
             </div>
          </div>
        </div>
      </header>

      <main className="w-full max-w-4xl px-4 flex flex-col items-center gap-10 z-10">
        
        {/* Main Links Container */}
        <section className="w-full max-w-md flex flex-col items-center space-y-2">
          <Suspense fallback={<div className="w-full h-20 bg-white/5 rounded-3xl animate-pulse"></div>}>
            {otherActionLinks.map((link) => (
              <LinkButton key={link.id} link={link} />
            ))}
          </Suspense>
          
          {primaryCta && (
            <div className="w-full mt-4">
              <Suspense fallback={<div className="w-full h-20 bg-white/5 rounded-3xl animate-pulse"></div>}>
                <LinkButton link={primaryCta} />
              </Suspense>
            </div>
          )}
        </section>

        {/* Dynamic Product Sections */}
        {PRODUCT_SECTIONS.map((section, sIndex) => (
          <section key={sIndex} className="w-full">
            <div className="flex items-center gap-6 mb-8 mt-4">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
              <h2 className="text-white/60 font-black text-[10px] md:text-xs uppercase tracking-[0.4em] text-center whitespace-nowrap">
                {section.title}
              </h2>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-blue-400/20 to-transparent"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {section.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        ))}

        {/* About Us Section */}
        <section id="tentang-kami" className="w-full max-w-2xl mt-12 scroll-mt-24">
          <div className="bg-white/5 backdrop-blur-2xl rounded-[3rem] p-10 border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 blur-[80px] -mr-20 -mt-20"></div>
            <div className="flex items-center gap-5 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-600/10 flex items-center justify-center text-blue-400 border border-blue-500/20 shadow-inner">
                <i className="fa-solid fa-circle-info text-2xl"></i>
              </div>
              <h2 className="text-3xl font-black text-white tracking-tighter">Tentang Kami</h2>
            </div>
            <div className="space-y-6 text-blue-100/60 leading-relaxed text-base font-medium">
              <p>
                <strong className="text-blue-400 font-black tracking-tight">Loker Lampung</strong> adalah pionir portal informasi karir digital di Lampung yang berdedikasi menyajikan peluang kerja terbaik bagi ribuan talenta lokal.
              </p>
              <p>
                Melalui ekosistem informasi yang terintegrasi, kami membantu menyatukan ribuan pelamar kerja dengan perusahaan-perusahaan terkemuka, mendorong pertumbuhan ekonomi melalui penyerapan tenaga kerja yang efektif.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Navigation */}
      <footer className="mt-24 text-blue-200/40 text-[10px] md:text-xs flex flex-col items-center gap-10 px-4 w-full z-10">
        <nav className="flex items-center gap-10 flex-wrap justify-center font-bold tracking-wider uppercase" aria-label="Footer Navigation">
          <button onClick={scrollToAbout} className="hover:text-blue-300 transition-colors">Info Detail</button>
          <button onClick={() => setIsContactOpen(true)} className="hover:text-blue-300 transition-colors">Bantuan</button>
          <a href="#" className="hover:text-blue-300 transition-colors">Kebijakan</a>
          <a href="#" className="hover:text-blue-300 transition-colors">Syarat</a>
        </nav>
        <div className="flex flex-col items-center gap-4">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
          <p className="font-bold tracking-[0.2em] uppercase opacity-70">&copy; {new Date().getFullYear()} LOKER LAMPUNG OFFICIAL</p>
        </div>
      </footer>

      {/* Primary Floating Action (WhatsApp) */}
      <a 
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi Admin di WhatsApp"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-2xl flex items-center justify-center shadow-[0_15px_40px_rgba(37,211,102,0.4)] transition-all hover:scale-110 active:scale-90 z-50 group border border-white/20"
      >
        <i className="fa-brands fa-whatsapp text-3xl"></i>
        <span className="absolute right-full mr-5 bg-white text-gray-900 px-5 py-2.5 rounded-2xl text-[11px] font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all shadow-2xl pointer-events-none uppercase tracking-widest translate-x-4 group-hover:translate-x-0">
          Tanya Admin
        </span>
      </a>

      {/* Professional Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-fade-in">
          <div className="bg-slate-900 border border-white/10 w-full max-w-xl rounded-[3.5rem] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)] animate-scale-up p-12">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-4xl font-black text-white tracking-tighter">Hubungi Kami</h2>
              <button 
                onClick={() => setIsContactOpen(false)} 
                aria-label="Tutup"
                className="w-14 h-14 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-2xl text-white/50 hover:text-white transition-all transform active:scale-90"
              >
                <i className="fa-solid fa-xmark text-2xl"></i>
              </button>
            </div>
            
            {contactFormStatus === 'sent' ? (
              <div className="text-center py-16 animate-fade-in">
                <div className="w-28 h-28 bg-gradient-to-br from-blue-400 to-indigo-600 text-white rounded-[2rem] flex items-center justify-center mx-auto mb-10 text-5xl shadow-2xl rotate-6 transition-transform hover:rotate-0 duration-500">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h3 className="text-3xl font-black text-white">Pesan Terkirim!</h3>
                <p className="text-slate-400 mt-4 text-lg font-medium">Tim kami akan segera membalas melalui email Anda.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase font-black text-slate-500 tracking-[0.25em] ml-2">Nama</label>
                    <input required type="text" className="w-full px-7 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500/50 outline-none transition-all placeholder:text-slate-700 font-semibold" placeholder="Nama Anda" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase font-black text-slate-500 tracking-[0.25em] ml-2">Email</label>
                    <input required type="email" className="w-full px-7 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500/50 outline-none transition-all placeholder:text-slate-700 font-semibold" placeholder="email@anda.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] uppercase font-black text-slate-500 tracking-[0.25em] ml-2">Pesan</label>
                  <textarea required rows={5} className="w-full px-7 py-5 bg-white/5 border border-white/10 rounded-2xl text-white resize-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500/50 outline-none transition-all placeholder:text-slate-700 font-semibold" placeholder="Tuliskan pertanyaan Anda..."></textarea>
                </div>
                <button 
                  disabled={contactFormStatus === 'sending'} 
                  type="submit" 
                  className="w-full py-6 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white font-black rounded-2xl disabled:opacity-50 transition-all shadow-[0_15px_40px_rgba(37,99,235,0.3)] mt-6 uppercase tracking-[0.2em] text-sm active:scale-95 flex items-center justify-center gap-3"
                >
                   {contactFormStatus === 'sending' ? (
                     <><i className="fa-solid fa-spinner animate-spin"></i> Mengirim...</>
                   ) : 'Kirim Sekarang'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Advanced CSS Animations */}
      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scale-up { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes gradient-slow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
        .animate-scale-up { animation: scale-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-gradient-slow { animation: gradient-slow 20s ease infinite; }
      `}</style>
    </div>
  );
};

export default App;
