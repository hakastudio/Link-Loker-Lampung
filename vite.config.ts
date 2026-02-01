
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Karena menggunakan domain kustom di root, base harus '/'
  base: '/', 
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Memastikan file CNAME ikut tercopy ke folder dist saat build
    emptyOutDir: true,
  }
});
