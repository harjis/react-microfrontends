const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    port: 3002,
    host: "0.0.0.0", // So that dev server can be accessed externally
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js",
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "react_microfrontends_content",
      filename: "remoteEntry.js",
      exposes: {
        "./Content": "./src/Content",
      },
      shared: {
        react: {
          requiredVersion: deps.react,
          import: "react", // the "react" package will be used a provided and fallback module
          shareKey: "react", // under this name the shared module will be placed in the share scope
          shareScope: "default", // share scope with this name will be used
          singleton: true, // only a single version of the shared module is allowed
        },
        "react-dom": {
          requiredVersion: deps["react-dom"],
          singleton: true, // only a single version of the shared module is allowed
        },
      },
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: [/module\.css$/],
      },
      {
        test: /module\.css$/,
        use: [
          "style-loader",
          "@teamsupercell/typings-for-css-modules-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
        ],
      },
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
