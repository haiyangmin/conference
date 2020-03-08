/**
 * module dependencies for webpack production configuration
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// define paths
const nodeModulesPath = path.resolve(__dirname, '../node_modules');
const buildPath = path.resolve(__dirname, '../public', 'build');
const mainAppPath = path.resolve(__dirname, '../frontend', 'index.js');
const componentsPath = path.resolve(__dirname, '../frontend', 'components');
const containersPath = path.resolve(__dirname, '../frontend', 'containers');

/**
 * webpack production configuration
 */
module.exports = {
    target  : 'web',

    entry: [
        mainAppPath,
    ],

    output: {
        filename: 'bundle.js',
        path: buildPath,
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [ 'babel-loader' ],
                exclude: [nodeModulesPath],
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader?sourceMap=inline'
                ),
            },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
            { test: /\.svg$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
        ],
    },

    postcss: [ require('autoprefixer'), require('postcss-nesting') ],

    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('style.css', { allChunks: true }),
    ],

    resolve: {
        extensions: ['', '.js', '.css'],
        alias: {
            Components: componentsPath,
            Containers: containersPath,
        },
    },

    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'redux': 'Redux',
        'react-router': 'ReactRouter',
        'moment': 'moment',
    },
};
