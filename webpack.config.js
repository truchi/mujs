const path = require('path')
const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = {
  entry: './src/main.js'
, devtool: 'inline-source-map'
, devServer: {
    contentBase: path.join(__dirname, 'dist')
  , host: '0.0.0.0'
  , port: 9000
  , compress: true
  , clientLogLevel: 'none'
  , overlay: true
  , useLocalIp: true
  }
, output: {
    filename: 'mujs.js'
  , path: path.resolve(__dirname, 'dist')
  , library: 'MuJS'
  , libraryTarget: 'umd'
  }
, module: {
  rules: [{
      test: /\.yml$/
    , use: [
        { loader: 'json-loader' }
      , { loader: 'yaml-loader' }
      ]
    }]
  }
, plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/
    , failOnError: true
    })
  ]
}
