const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "./src/components/index.js"),
    about: path.resolve(__dirname, "./src/components/about.js"),
    booking: path.resolve(__dirname, "./src/components/reservation.js"),
  },
  output: {
    filename: "[name].bundle.js",
    clean: true,
    assetModuleFilename: "[name][ext]",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Resorts at Oceanview - Home",
      filename: "index.html",
      template: "src/indexTemplate.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      title: "Resorts at Oceanview - About",
      filename: "about.html",
      template: "src/aboutTemplate.html",
      chunks: ["about"],
    }),
    new HtmlWebpackPlugin({
      title: "Resorts at Oceanview - Book",
      filename: "booking.html",
      template: "src/bookingTemplate.html",
      chunks: ["booking"],
    }),
  ],
};
