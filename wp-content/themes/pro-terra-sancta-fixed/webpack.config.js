// eslint-disable-next-line unicorn/prefer-module
const path = require('path');
// eslint-disable-next-line unicorn/prefer-module
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// eslint-disable-next-line unicorn/prefer-module
const sass = require('sass');
// eslint-disable-next-line unicorn/prefer-module
const CopyWebpackPlugin = require('copy-webpack-plugin');

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  entry: {
    main: ['./js/main.js', './scss/main.scss'],
    library: ['./js/library.js', './scss/library.scss'],
  },
  output: {
    publicPath: '/wp-content/themes/pro-terra-sancta-fixed/assets/',
    filename: '[name].min.js',
    chunkFilename: '[id].[contenthash].js',
    // eslint-disable-next-line unicorn/prefer-module
    path: path.resolve(__dirname, 'assets'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // eslint-disable-next-line global-require
              implementation: sass,
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'node_modules/jquery/dist',
          to: 'node_modules/jquery/dist',
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'node_modules/bootstrap/dist/js',
          to: 'node_modules/bootstrap/dist/js',
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'node_modules/popper.js/dist/umd/popper.min.js',
          to: 'node_modules/popper.js/dist/umd/popper.min.js',
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'node_modules/@splidejs/splide',
          to: 'node_modules/@splidejs/splide',
        },
      ],
    }),
  ],
  resolve: {
    modules: ['node_modules'],
  },
};
