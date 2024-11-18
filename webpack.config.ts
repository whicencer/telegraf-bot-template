import path from "path";
import { Configuration } from "webpack";
import nodeExternals from "webpack-node-externals";

const config: Configuration = {
  mode: "production",
  entry: "./src/app.ts",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.js"
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@src": path.resolve(__dirname, "src")
    },
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules"
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
}

export default config;