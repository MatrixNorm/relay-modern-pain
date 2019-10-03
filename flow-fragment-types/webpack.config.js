const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: `./src/main.js`
  },
  output: {
    path: path.resolve(__dirname, "jsdev"),
    filename: "[name].js"
  },
  mode: "development",
  devServer: {
    contentBase: "jsdev"
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ],
  resolve: {
    extensions: [".mjs", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
