import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/new-portfolio-arun/",
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          "three-vendor": ["three"],
          "r3f-vendor": ["@react-three/fiber", "@react-three/drei"],
          "react-vendor": ["react", "react-dom"],
          "gsap-vendor": ["gsap"],
        },
      },
    },
  },
});
