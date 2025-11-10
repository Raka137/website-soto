import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/website-soto/", // Tambahkan baris ini
  plugins: [react()],
});
