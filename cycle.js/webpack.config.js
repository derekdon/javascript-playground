'use strict';

var webpack = require('webpack'),
    BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
    entry: {
        vendor: [
            'rx',
            '@cycle/core',
            '@cycle/dom',
            'lodash'
        ],
        app: './app'
    },
    output: {
        path: __dirname + '/www',
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'vendor', 'app', 'app/module']
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel", query: {cacheDirectory: true, presets: ['es2015', 'stage-2']}},
            { test: /\.json$/, loader: 'json' },
            { test: /\.(png|jpg|gif)$/, loader: 'url?limit=8192' },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.scss$/, loader: 'style!css!sass' },
            { test: /\.(woff|woff2)($|\?)/, loader: 'url?limit=10000&minetype=application/font-woff' },
            { test: /\.(ttf|eot|svg)($|\?)/, loader: 'file-loader' },
            { test: /\.(htm|html)$/, loader: 'html-loader' }
        ]
    },
    plugins: [
        new BowerWebpackPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ]
};