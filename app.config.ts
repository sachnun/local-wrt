import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [".dakuport.eu.org"],
    }
  }
});
