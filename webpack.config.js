const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = (env) => {

  return{
    entry: [
      '@babel/polyfill', 
      './src/index.js'
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',  // https://webpack.js.org/guides/public-path/
      filename: '[name].bundle.[hash:4].js',
      chunkFilename: '[name].bundle.[hash:4].js',
    },
    module: {
      rules:[{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },{
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: false }
          }
        ]
      },{
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },{
        test: /\.(png|jpe?g|ico|svg|webp)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][name].[ext]',
              limit: 25000
            }
          },
          {
            loader: 'img-loader'
          }
        ]
      },{
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html',
        favicon: './src/images/favicon-1.0.0.png'
      }),
      new MiniCssExtractPlugin({
        filename: '[name].bundle.[hash:4].css',
        chunkFilename: '[name].bundle.[hash:4].css',
      }),
      new Dotenv({}),
      new webpack.EnvironmentPlugin({}),
      new CopyPlugin([
        { from: './src/robots.txt', to: './' },
      ]),
    ],
    devServer: {
      port: 3000,
      host: '0.0.0.0',
      historyApiFallback: true
    }
  };
}
