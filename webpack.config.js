const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
process.env_NODE_ENV = 'production'

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/build.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
         'style-loader', 
         "css-loader"
      ],
      },
      {
        test: /\.less$/i,
        use: [
          'style-loader', 
         "css-loader",
         'less-loader'
      ],
      },
    ]
  },
  optimization: {
    // minimizer: [
    //   // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
    //   // `...`,
    //   new CssMinimizerPlugin(),
    // ],
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   // 类似于 webpackOptions.output 中的选项
    //   // 所有选项都是可选的
    //   filename: 'css/abc.css',
    //   chunkFilename: '[id].css',
    // })
  ],
  mode: 'production'
}