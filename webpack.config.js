const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "./build/"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: ["@babel/plugin-proposal-class-properties"]
            }
          },
          {
            loader: "eslint-loader",
            options: {
              // eslint options (if necessary)
            }
          }
        ]
      }
    ]
  }
};
