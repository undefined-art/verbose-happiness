import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/common/components/"),
      },
      {
        find: "@hooks",
        replacement: path.resolve(__dirname, "src/common/hooks/"),
      },
      {
        find: "@helpers",
        replacement: path.resolve(__dirname, "src/common/helpers/"),
      },
      {
        find: "@assets",
        replacement: path.resolve(__dirname, "src/assets/"),
      },
      {
        find: "@constants",
        replacement: path.resolve(__dirname, "src/constants/"),
      },
      {
        find: "@interfaces",
        replacement: path.resolve(__dirname, "src/interfaces/"),
      },
    ],
  },
});
