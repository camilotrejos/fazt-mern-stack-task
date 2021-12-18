var path = require('path');

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.resolve(__dirname, './src/public'),
        filename: 'bundle.js'
    },

    module:{
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: path.resolve(__dirname, './node_modules')
            }
        ]
    },

}