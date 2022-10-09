const path = require('path');

module.exports = {
  entry: {
    main: './src/js/main.js',
    sub: './src/js/sub.js',
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'js/[name].bundle.js',
  },
  plugins: [
  ],
};
