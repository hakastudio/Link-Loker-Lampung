
import React, { useState } from 'react';
import { PROFILE_DATA, ACTION_LINKS, PRODUCT_SECTIONS } from './constants.tsx';
import ProductCard from './components/ProductCard.tsx';
import LinkButton from './components/LinkButton.tsx';

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

  const waNumber = "6283161621443"; 
  const waLink = `https://wa.me/${waNumber}?text=Halo%20Admin%20Loker%20Lampung,%20saya%20ingin%20bertanya%20mengenai...`;

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#020617] bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e1b4b] pb-24 relative overflow-x-hidden">
      {/* Background Texture & Glows */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.1] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Profile Header */}
      <header className="w-full max-w-2xl px-4 pt-12 mb-12 z-20">
        <div className="bg-white/5 backdrop-blur-3xl rounded-[2.5rem] py-6 px-8 flex items-center justify-between border border-white/10 shadow-2xl">
          <div className="flex items-center gap-5">
             <div className="relative">
               <div className="absolute -inset-1 bg-blue-500 rounded-2xl blur opacity-20"></div>
               <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center text-white shadow-xl transform -rotate-3 transition-transform hover:rotate-0">
                 <span className="text-center font-black text-[14px] leading-tight">LOKER<br/>LPG</span>
               </div>
             </div>
             <div className="flex flex-col">
               <h1 className="text-xl font-black text-white flex items-center gap-2">
                 {PROFILE_DATA.username}
                 <span className="bg-blue-400 text-slate-900 rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                    <i className="fa-solid fa-check"></i>
                 </span>
               </h1>
               <div className="flex items-center gap-2 mt-1">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="text-[10px] text-blue-300 font-bold uppercase tracking-widest">Official Portal Lampung</span>
               </div>
             </div>
          </div>
        </div>
      </header>

      <main className="w-full max-w-4xl px-4 flex flex-col items-center gap-12 z-10">
        
        {/* Navigation Links */}
        <section className="w-full max-w-md flex flex-col gap-3">
          {otherActionLinks.map((link) => (
            <LinkButton key={link.id} link={link} />
          ))}
          {primaryCta && (
            <div className="mt-4">
              <LinkButton link={primaryCta} />
            </div>
          )}
        </section>

        {/* Product Grid Sections */}
        {PRODUCT_SECTIONS.map((section, sIndex) => (
          <section key={sIndex} className="w-full">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
              <h2 className="text-blue-300/50 font-black text-[10px] uppercase tracking-[0.4em]">{section.title}</h2>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-blue-500/20 to-transparent"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {section.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        ))}

        {/* About Section */}
        <section id="tentang-kami" className="w-full max-w-2xl mt-8 scroll-mt-24">
          <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-10 border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl"></div>
            <div className="flex items-center gap-5 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                <i className="fa-solid fa-circle-info text-xl"></i>
              </div>
              <h2 className="text-2xl font-black text-white">Tentang Kami</h2>
            </div>
            <p className="text-slate-400 leading-relaxed font-medium">
              <strong className="text-blue-400">Loker Lampung</strong> adalah portal karir digital terdepan yang membantu warga Lampung menemukan peluang kerja impian dengan cepat dan terpercaya. Kami berkomitmen untuk terus menyajikan informasi akurat setiap harinya.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-24 pb-12 flex flex-col items-center gap-8 opacity-40 hover:opacity-100 transition-opacity">
        <nav className="flex gap-8 text-[11px] font-bold uppercase tracking-widest">
          <button onClick={scrollToAbout} className="hover:text-blue-400 transition-colors">Info</button>
          <button onClick={() => setIsContactOpen(true)} className="hover:text-blue-400 transition-colors">Bantuan</button>
          <a href="#" className="hover:text-blue-400 transition-colors">Syarat</a>
        </nav>
        <p className="text-[10px] font-bold tracking-[0.3em]">&copy; {new Date().getFullYear()} LOKER LAMPUNG OFFICIAL</p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 z-50 border border-white/20"
      >
        <i className="fa-brands fa-whatsapp text-3xl"></i>
      </a>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-slate-900 border border-white/10 w-full max-w-lg rounded-[2.5rem] p-10 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-black text-white">Hubungi Kami</h2>
              <button onClick={() => setIsContactOpen(false)} className="text-white/40 hover:text-white">
                <i className="fa-solid fa-xmark text-2xl"></i>
              </button>
            </div>
            {contactFormStatus === 'sent' ? (
              <div className="text-center py-10">
                <i className="fa-solid fa-circle-check text-5xl text-blue-500 mb-4"></i>
                <p className="text-white font-bold">Pesan Terkirim!</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <input required type="text" className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-blue-500" placeholder="Nama Lengkap" />
                <input required type="email" className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-blue-500" placeholder="Email Aktif" />
                <textarea required rows={4} className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-blue-500 resize-none" placeholder="Pesan Anda..."></textarea>
                <button type="submit" className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all">
                  {contactFormStatus === 'sending' ? 'Mengirim...' : 'Kirim Pesan'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
