const path              = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist/js',
    filename: 'bundle.js',
    publicPath: '/js/'
  },

  mode: 'development',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    hot: true,
    port: 3000,
    publicPath: 'http://localhost:3000'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              exclude: /node_modules/,
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader?modules',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
              url: true,
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: [require('autoprefixer')({ grid: true })]
            }
          }
        ]
      },
    ]
  },

  resolve: {
    extensions: ['.css', '.js', '.json', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: '../index.html',
    }),
  ]
};
