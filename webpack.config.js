const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './client/src/main.js',
  output: {
    path: path.resolve(__dirname, './client/dist')
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.esm-bundler.js',
      '@': path.resolve(__dirname, 'client/src'),
      '@components': path.resolve(__dirname, 'client/src/components'),
      '@pages': path.resolve(__dirname, 'client/src/pages'),
      '@utils': path.resolve(__dirname, 'client/src/utils'),
      '@assets': path.resolve(__dirname, 'client/src/assets')
    },
    extensions: ['.*', '.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            }
          },
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `
                @import "./client/src/styles/_global.scss";
              `
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, './client', 'index.html'),
      favicon: './client/src/assets/images/favicon.ico'
    }),
    new CleanWebpackPlugin()
  ],
  mode: 'development',
  devServer: {
    static: path.join(__dirname, './client/dist'),
    historyApiFallback: true,
    client: {
      overlay: true
    },
    proxy: {
      '/api/': 'http://localhost:5001'
    }
  }
};
