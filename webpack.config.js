const path = require('path');

module.exports = {
  entry: './src/memory.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'memory.js',
    path: path.resolve(__dirname, 'app/js'),
  },
};