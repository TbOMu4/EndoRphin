import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ` 
          @use "@/styles/adaptiveValue.scss" as *;
          @use "@/styles/functions.scss" as *;
          @use "sass:math";
        `,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(dirname(fileURLToPath(import.meta.url)), "src"),
    },
  },
});
