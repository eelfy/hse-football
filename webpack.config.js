const prod = process.env.START_MODE === 'production';
const Dotenv = require("dotenv-webpack");

const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin'); 

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');


module.exports = (env) => {
  return ({
    mode: prod ? 'production' : 'development',
    entry: './src/index.tsx',

    output: {
      path: path.join(__dirname, '/dist'),
    },

    plugins: [
      new HTMLWebpackPlugin({
        template: './public/index.html'
      }),
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        process: {
          env: {}
        }
      })
    ],

    devServer: {
      historyApiFallback: true,
    },

    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: "ts-loader",
          resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
          },
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    devtool: prod ? undefined : 'source-map',
  });
}