/**
 * Created by jane on 3/5/16.
 */

module.exports = {

    entry:  './src',

    output: {
        path:     'builds',
        filename: 'bundle.js',
        publicPath: 'builds'
    },

    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: ['babel'],
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};


