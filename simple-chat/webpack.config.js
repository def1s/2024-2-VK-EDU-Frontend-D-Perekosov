'use strict';

const webpack = require('webpack');
const path = require('path');
const buildWebpackConfig = require('./config/build/buildWebpackConfig');

const paths = {
    src: path.resolve(__dirname, 'src'),
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.js'),
    html: path.resolve(__dirname, 'src', 'index.html'),
};

// можно вынести в env
const port = 3000;
const mode = 'development'; // development | production

const options = {
    paths,
    port,
    mode
}

module.exports = buildWebpackConfig(options);
