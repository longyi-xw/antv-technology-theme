const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/theme/index.less',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'theme.css'
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        {
          loader: 'less-loader', options: {
            lessOptions: {
              math: 'always',
              javascriptEnabled: true
            }
          }
        }
      ]
    }],
  },
}