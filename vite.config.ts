
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Jika dideploy ke repo GitHub Pages (misal: username.github.io/repo), 
// ganti base menjadi '/nama-repo/'
export default defineConfig({
  plugins: [react()],
  base: '/', 
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
});
