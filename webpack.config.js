"use strict";

const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');

const srcDir = path.join(__dirname, './src');

const envConfig = () => {
    const dotEnvVars = dotenv.config();
    return Object.keys(dotEnvVars)
        .reduce((memo, key) => {
            memo[`__${key.toUpperCase()}__`] = JSON.stringify(dotEnvVars[key]);
            return memo;
        }, {
            __NODE_ENV__: JSON.stringify(process.env.NODE_ENV),
            __AUTH0_DOMAIN__: process.env.AUTH0_DOMAIN,
            __AUTH0_CLIENT_ID__: process.env.AUTH0_CLIENT_ID
        });
};

module.exports = {
    debug: true,
    devtool: "inline-source-map",

    entry: `${srcDir}/public/main.js`,

    output: {
        path: path.join(__dirname, './public'),
        filename: 'js/bundle.js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: srcDir
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.png$/,
            loader: "url-loader?limit=100000"
        }, {
            test: /\.jpg$/,
            loader: "file-loader"
        }, {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}]
    },

    plugins: [
        new webpack.DefinePlugin(envConfig())
    ]
};
