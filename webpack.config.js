const prod = process.env.START_MODE === "production";
const Dotenv = require("dotenv-webpack");

const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = (env) => {
  return {
    mode: prod ? "production" : "development",
    entry: "./src/index.tsx",

    output: {
      path: path.join(__dirname, "/dist")
    },

    plugins: [
      new HTMLWebpackPlugin({
        template: "./public/index.html"
      }),
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        process: {
          env: {}
        }
      })
    ],

    devServer: {
      historyApiFallback: true
    },

    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader", "ts-loader"],
          resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"]
          }
        },
        {
          test: /\.scss$/,
          use: [{ loader: "style-loader" }, { loader: "css-loader", options: { modules: true } }, { loader: "sass-loader" }]
        }
      ]
    },
    devtool: prod ? undefined : "eval",
    optimization: {
      minimize: true
    }
  };
};
