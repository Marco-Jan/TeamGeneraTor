const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader','css-loader'],
    },
    ],
},
};