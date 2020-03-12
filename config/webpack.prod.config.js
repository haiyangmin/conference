/**
 * module dependencies for webpack production configuration
 */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    mode: 'production',
    target  : 'web',

    entry: [
        mainAppPath,
    ],

    output: {
        filename: 'bundle.js',
        path: buildPath,
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: [ 'react-hot-loader/webpack','babel-loader' ],
                exclude: [nodeModulesPath],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
            { test: /\.svg$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ],

    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
};
