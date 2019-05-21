let path = require('path');

// import { resolve } from 'path';

module.exports = {
  
    // mode: 'development',
    entry: './src/app.js',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, './dist'),
      publicPath: 'dist/'
    },
    devServer: {
      overlay:true
    },
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components/'),
        utils: path.resolve(__dirname, 'src/utils/'),
        css: path.resolve(__dirname, 'src/css/')
      }
    },
    
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    }
  }



