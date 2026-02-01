
import React, { useState } from 'react';
import { getCareerAdvice, GeminiResponse } from '../services/gemini';

const AiAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [data, setData] = useState<GeminiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    const result = await getCareerAdvice(input);
    setData(result);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-md mt-4 p-5 bg-white/5 backdrop-blur-2xl rounded-[2rem] border border-white/10 text-white shadow-2xl overflow-hidden relative group">
      {/* Decorative background glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full font-black text-base md:text-lg tracking-tight z-10 relative"
      >
        <span className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
            <i className="fa-solid fa-robot text-blue-400"></i>
          </div>
          Asisten Karir AI
        </span>
        <i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs text-blue-400`}></i>
      </button>

      {isOpen && (
        <div className="mt-6 space-y-5 animate-fade-in relative z-10">
          <div className="bg-blue-400/10 border border-blue-400/20 p-4 rounded-2xl">
            <p className="text-xs text-blue-200 leading-relaxed font-medium">
              Tanyakan apapun seputar lowongan terbaru, tips interview, atau info gaji di Lampung. AI kami akan mencarinya secara real-time.
            </p>
          </div>
          
          <form onSubmit={handleAsk} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Cari loker admin di Bandar Lampung..."
              className="flex-1 px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm font-medium"
            />
            <button
              disabled={loading}
              className="w-12 h-12 flex items-center justify-center bg-blue-600 hover:bg-blue-500 rounded-2xl disabled:opacity-50 transition-all shadow-lg shadow-blue-900/40 active:scale-95"
            >
              {loading ? <i className="fa-solid fa-circle-notch animate-spin"></i> : <i className="fa-solid fa-paper-plane"></i>}
            </button>
          </form>

          {data && (
            <div className="space-y-4 animate-fade-in">
              <div className="p-5 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
                <div className="flex items-center gap-2 mb-3">
                   <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                   <p className="font-black text-[10px] text-blue-400 uppercase tracking-widest">Hasil Pencarian AI</p>
                </div>
                <p className="leading-relaxed whitespace-pre-line text-sm text-blue-50 font-medium">
                  {data.text}
                </p>
              </div>

              {data.sources && data.sources.length > 0 && (
                <div className="space-y-2">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Sumber Referensi:</p>
                  <div className="flex flex-wrap gap-2">
                    {data.sources.slice(0, 3).map((source, idx) => (
                      <a 
                        key={idx} 
                        href={source.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[10px] bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/30 px-3 py-2 rounded-xl text-blue-300 transition-all flex items-center gap-2 max-w-full truncate"
                      >
                        <i className="fa-solid fa-link text-[8px]"></i>
                        <span className="truncate">{source.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AiAssistant;
