import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    cssCodeSplit: false,
    target: "esnext",
    outDir: "dist",
    rollupOptions: {
      input: {
        app: "./src/main.jsx",
      },
      output: {
        entryFileNames: "particle-logo-app.js",
      },
    },
  },
});
