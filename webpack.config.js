const cleanPlugin = require('clean-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');
const extractPlugin = require('extract-text-webpack-plugin');

const root = `${__dirname}/src`;
const dist = `${__dirname}/dist`;
const paths = {
    app: `${root}/app/root.module.js`,
    styles: `${root}/styles`,
    static: {
        index: `${root}/index.html`,
        images: `${root}/img/**/*`,
    },
};

// Plugins
const prep = {
    clean: new cleanPlugin([
        dist,
    ]),
    copy: new copyPlugin([
        {
            from: paths.static.index,
        },
        {
            from: paths.static.images,
            to: 'img/',
            flatten: true,
        }]),
};

const extract = {
    styles: new extractPlugin('css/styles.css'),
};

// Config object
const config = {
    entry: {
        bundle: paths.app,
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['ng-annotate', 'babel'],
            },
            {
                test: /\.scss$/,
                loader: extractPlugin.extract('style', 'css?sourceMap!sass?sourceMap'),
            },
            {
                test: /\.html$/,
                loader: 'ngtemplate!html',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=fonts/[name].[ext]',
            },
        ],
    },
    plugins: [
        prep.clean,
        prep.copy,
        extract.styles,
    ],
    sassLoader: {
        includePaths: [paths.styles],
    },
    output: {
        path: `${dist}/`,
        publicPath: '/',
        filename: 'js/app.[name].js',
    },
    devServer: {
        port: 8080,
        historyApiFallback: true,
    },
};

module.exports = config;