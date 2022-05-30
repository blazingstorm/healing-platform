import HtmlWebpackPlugin from "html-webpack-plugin";

module.exports = {
  entry: "./src/index.tsx",
  output: {
    publicPath: "/",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    port: 9000,
    open: true,
    hot: true,
  },
};
