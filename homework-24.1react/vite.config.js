import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/ithillel/homework-24.1/index.html", // 👈 дуже важливо
  plugins: [react(), tailwindcss()],
});
