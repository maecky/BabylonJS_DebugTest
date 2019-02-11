var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const VENDOR_LIBS = [
    'babylonjs',
    'babylonjs-loaders',
    // 'babylonjs-gui'
];

module.exports = {
    entry: {
        bundle: './src/index.ts',
        vendor: VENDOR_LIBS
    },

    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader',
                exclude: /node_modules/
            },
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
                include: [
                    '/node_modules/babylonjs',
                    '/node_modules/babylonjs-loaders'
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),

        new webpack.SourceMapDevToolPlugin({
            filename:'[file].map',
            include:['vendor.js']
        }),

    ],

    devtool: 'source-map',

    devServer: {
        host: 'localhost',
        port: 8090
    }

};
