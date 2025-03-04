import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: {
         "@components": path.resolve(__dirname, "./src/components"),
         "@assets": path.resolve(__dirname, "./src/assets"),
         "@utils": path.resolve(__dirname, "./src/utils"),
         "@repository": path.resolve(__dirname, "./src/repository"),
         "@views": path.resolve(__dirname, "./src/views"),
         "@db": path.resolve(__dirname, "./db"),
      },
   },
   test: {},
});
