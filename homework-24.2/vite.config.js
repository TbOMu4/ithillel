import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // base: "/ithillel/homework-24.2/index.html",
  base: "/homework-24.2/",
  plugins: [react(), tailwindcss()],
});
