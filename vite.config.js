import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? "/Lynxy-teste/" : "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8000,
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
}));
