import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // build: {
  //     rollupOptions: {
  //         input: {
  //             public: './src/index.tsx',
  //             private: './src/index_private.tsx',
  //         },
  //         output: {
  //             entryFileNames: '[name]_bundle.js',
  //             chunkFileNames: '[name]_bundle.js',
  //         },
  //     },
  // },
  esbuild: {
    supported: {
      "top-level-await": true, //browsers can handle top-level-await features
    },
  },
  plugins: [
    react(),
    // react({
    //   babel: {
    //     plugins: ["babel-plugin-macros", "babel-plugin-styled-components"],
    //   },
    // }),
    svgr({
      // Set it to `true` to export React component as default.
      // Notice that it will overrides the default behavior of Vite
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        icon: true,
        dimensions: false,
      },

      // esbuild options, to transform jsx to js
      esbuildOptions: {
        // ...
      },

      // A minimatch pattern, or array of patterns,
      // which specifies the files in the build the plugin should include.
      // By default all svg files will be included
      include: "**/*.svg",

      // A minimatch pattern, or array of patterns, which specifies the files
      // in the build the plugin should ignore
      // By default no files are ignored
      exclude: "",
    }),
    tsconfigPaths(),
    eslint(),
  ],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
  },
});
