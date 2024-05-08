import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";

/** @type {import('rollup').RollupOptions} */
export default {
  input: "src/basic/main.js",
  output: [
    {
      file: "./src/basic/bundle.js",
      format: "esm",
    },
    {
      file: "bundle.min.js",
      format: "iife",
      name: "version",
      plugins: [terser()],
    },
  ],
  plugins: [json(), resolve({})],
};
