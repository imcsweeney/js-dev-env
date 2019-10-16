import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js' //this is not written to the src dir in dev but it will be simulated
  },
  plugins: [
    //generate an external css file with a hash in the filename
    new ExtractTextPlugin('[name].[contenthash].css'),

    //hash the files using md5 so that their names change when their content changes
    new WebpackMd5Hash(),

    //use CommonsChunkPlugin to create a separate bundle
    //of vendor libs so that they're cached separately
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // create html file that includes a reference to the bundled JS
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify:{
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),

    //eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),
    //minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
    ]
  }
}
