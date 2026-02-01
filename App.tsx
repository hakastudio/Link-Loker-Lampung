
import React, { useState, useEffect } from 'react';
import { PROFILE_DATA, ACTION_LINKS, PRODUCT_SECTIONS } from './constants';
import ProductCard from './components/ProductCard';
import LinkButton from './components/LinkButton';

const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'tos' | null>(null);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [contactFormStatus, setContactFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setTimeout(() => setShowCookieBanner(true), 2000);
    }
  }, []);

  const handleCookieAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShowCookieBanner(false);
  };

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

  const primaryCta = ACTION_LINKS.find(link => link.id === 'post-loker');
  const otherActionLinks = ACTION_LINKS.filter(link => link.id !== 'post-loker');
  const waNumber = "6283161621443"; 
  const waLink = `https://wa.me/${waNumber}?text=Halo%20Admin%20Loker%20Lampung,%20saya%20ingin%20bertanya%20mengenai...`;

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#020617] bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e1b4b] pb-24 relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-[0.1] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <header className="w-full max-w-2xl px-4 pt-12 mb-12 z-20">
        <div className="bg-white/5 backdrop-blur-3xl rounded-[2.5rem] py-6 px-8 flex items-center justify-between border border-white/10 shadow-2xl">
          <div className="flex items-center gap-5">
             <div className="relative">
               <div className="absolute -inset-1 bg-blue-500 rounded-2xl blur opacity-20"></div>
               <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center text-white shadow-xl transform -rotate-3">
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
        <section className="w-full max-w-md flex flex-col gap-3">
          {otherActionLinks.map((link) => (
            <LinkButton key={link.id} link={link} />
          ))}
          {primaryCta && <LinkButton link={primaryCta} />}
        </section>

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
      </main>

      <footer className="mt-24 pb-12 flex flex-col items-center gap-10">
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[11px] font-bold uppercase tracking-widest text-slate-500">
          <button onClick={() => setIsContactOpen(true)} className="hover:text-blue-400 transition-colors">Hubungi Kami</button>
          <button onClick={() => setActiveLegalModal('privacy')} className="hover:text-blue-400 transition-colors">Privacy Policy</button>
          <button onClick={() => setActiveLegalModal('tos')} className="hover:text-blue-400 transition-colors">Terms of Service</button>
        </nav>
        <div className="flex flex-col items-center gap-2">
          <p className="text-[10px] font-bold tracking-[0.3em] text-slate-600">&copy; {new Date().getFullYear()} LOKER LAMPUNG OFFICIAL</p>
          <p className="text-[9px] text-slate-700 italic font-medium">Link-in-bio & Affiliate Portal</p>
        </div>
      </footer>

      {/* Floating Buttons */}
      <a 
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 z-50 border border-white/20"
      >
        <i className="fa-brands fa-whatsapp text-3xl"></i>
      </a>

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 w-full z-[100] p-4 animate-bounce-in">
          <div className="max-w-4xl mx-auto bg-slate-900/90 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs text-slate-300 text-center md:text-left">
              Kami menggunakan cookie untuk meningkatkan pengalaman Anda di situs kami. Dengan melanjutkan kunjungan, Anda menyetujui kebijakan privasi kami.
            </p>
            <div className="flex gap-4">
              <button onClick={() => setActiveLegalModal('privacy')} className="text-[10px] font-bold uppercase text-slate-400 hover:text-white">Pelajari</button>
              <button onClick={handleCookieAccept} className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black rounded-xl uppercase tracking-widest">Setuju</button>
            </div>
          </div>
        </div>
      )}

      {/* Legal Modals */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
          <div className="bg-slate-900 border border-white/10 w-full max-w-2xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl max-h-[80vh] overflow-y-auto custom-scrollbar">
            <div className="flex justify-between items-center mb-8 sticky top-0 bg-slate-900 py-2 z-10">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">
                {activeLegalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h2>
              <button onClick={() => setActiveLegalModal(null)} className="text-white/40 hover:text-white">
                <i className="fa-solid fa-xmark text-2xl"></i>
              </button>
            </div>
            <div className="prose prose-invert text-slate-400 text-sm leading-relaxed space-y-4">
              {activeLegalModal === 'privacy' ? (
                <>
                  <p>Kebijakan Privasi ini menjelaskan bagaimana Loker Lampung mengumpulkan dan menggunakan informasi Anda.</p>
                  <h3 className="text-white font-bold">1. Informasi yang Kami Kumpulkan</h3>
                  <p>Kami dapat mengumpulkan informasi non-pribadi seperti jenis perangkat, browser, dan data navigasi melalui cookie untuk keperluan analisis statistik (Google Analytics).</p>
                  <h3 className="text-white font-bold">2. Penggunaan Iklan</h3>
                  <p>Kami menggunakan layanan pihak ketiga seperti Google AdSense untuk menampilkan iklan. Pihak ketiga ini dapat menggunakan cookie DART untuk menampilkan iklan berdasarkan kunjungan Anda.</p>
                  <h3 className="text-white font-bold">3. Keamanan Data</h3>
                  <p>Kami berkomitmen menjaga keamanan data Anda dan tidak akan pernah menjual informasi pribadi Anda kepada pihak ketiga manapun.</p>
                </>
              ) : (
                <>
                  <p>Dengan mengakses situs ini, Anda menyetujui syarat dan ketentuan berikut:</p>
                  <h3 className="text-white font-bold">1. Layanan Informasi</h3>
                  <p>Loker Lampung adalah penyedia informasi lowongan kerja. Kami tidak menjamin penempatan kerja dan tidak bertanggung jawab atas isi lowongan dari pihak ketiga.</p>
                  <h3 className="text-white font-bold">2. Larangan Penyalahgunaan</h3>
                  <p>Pengguna dilarang menyalin konten tanpa izin tertulis atau menggunakan situs ini untuk aktivitas ilegal/penipuan.</p>
                  <h3 className="text-white font-bold">3. Perubahan Layanan</h3>
                  <p>Kami berhak mengubah atau menghentikan layanan kapan saja tanpa pemberitahuan sebelumnya.</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

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