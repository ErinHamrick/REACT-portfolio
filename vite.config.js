
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set the output directory for the build
const outDir = 'build';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: outDir,
  },
  server: {
    port: 3000,
    open: true,
  },
});
