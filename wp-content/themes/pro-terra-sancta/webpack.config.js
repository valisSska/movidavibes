const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const sass = require('sass');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: ['./js/main.js', './scss/main.scss'],
    main_after: ['./js/main-after.js', './scss/main-after.scss'],
    style: ['./js/style.js', './scss/style.scss'],
  },
  output: {
    publicPath: '/',
    filename: '[name].min.js',
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
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
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
          from: 'node_modules/mdbootstrap-pro/js',
          to: 'node_modules/mdbootstrap-pro/js',
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'node_modules/@fortawesome/fontawesome-free',
          to: 'node_modules/@fortawesome/fontawesome-free',
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
  ],
  resolve: {
    modules: ['node_modules'],
  },
};
