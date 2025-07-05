import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { derived } from "svelte/store";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        hello: "hello.html",
        counter: "counter.html",
        SayHello: "SayHello.html",
        derived: "derived.html",
      },
    },
  },
});

