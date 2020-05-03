var path = require('path');
var SRC_DIR = path.join(__dirname, '/react-client/src');
var DIST_DIR = path.join(__dirname, '/react-client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',      
        query: {
          presets: ['react', 'es2015']
       }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
                 test: /\.(png|svg|jpg|gif)$/,
                 use: [
                   'file-loader',
                 ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
                 use: [
                  'file-loader',
                 ],
      },
    ]
  }
};