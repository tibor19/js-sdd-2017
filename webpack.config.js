const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    entry: ['./src/app.js'],
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module : {
        rules : [
            { test: /\.js$/, use: 'babel-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}

module.exports = config;