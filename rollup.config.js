import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "pm4js/pm4js.js",
  output: {
    file: "dist/bundle.js",
    format: "umd",
    name: "pm4js",
  },
  plugins: [resolve()],
};
