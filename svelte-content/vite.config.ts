import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3003,
  },
  plugins: [
    svelte(),
    federation({
      name: "react_microfrontends_svelte_content",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.svelte",
      },
      shared: require("./package.json").dependencies,
    }),
  ],
});
