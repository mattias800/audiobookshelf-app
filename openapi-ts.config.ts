import { defineConfig, defaultPlugins } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "https://raw.githubusercontent.com/advplyr/audiobookshelf/refs/heads/master/docs/openapi.json",
  output: {
    format: 'prettier',
    lint: 'eslint',
    path: './api/client',
  },
  plugins: [
    ...defaultPlugins,
    "@hey-api/client-fetch",
    "@tanstack/react-query",
  ],
});
