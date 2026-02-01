
import { GoogleGenAI } from "@google/genai";

// Initialize the Google GenAI client following the required named parameter pattern
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface GeminiResponse {
  text: string;
  sources?: { title: string; uri: string }[];
}

export const getCareerAdvice = async (query: string): Promise<GeminiResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: "Anda adalah asisten karir profesional untuk Info Loker Lampung. Gunakan Google Search untuk mencari lowongan kerja terbaru, tips karir, atau informasi perusahaan di Lampung. Berikan jawaban yang ramah, informatif, dan ringkas dalam Bahasa Indonesia. Jika menyebutkan lowongan kerja tertentu, pastikan itu relevan dengan wilayah Lampung.",
        tools: [{ googleSearch: {} }],
        temperature: 0.7,
      },
    });

    // Access the text property directly as it's a getter, not a method
    const text = response.text || "Maaf, saya sedang tidak bisa memberikan saran saat ini.";
    
    // Extract grounding sources to satisfy the requirement of listing URLs when using Google Search
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    const sources = groundingChunks?.map((chunk: any) => ({
      title: chunk.web?.title || 'Sumber Informasi',
      uri: chunk.web?.uri || '#'
    })).filter((s: any) => s.uri !== '#');

    return { text, sources };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return { text: "Terjadi kesalahan saat menghubungi asisten AI kami. Pastikan koneksi internet Anda stabil." };
  }
};