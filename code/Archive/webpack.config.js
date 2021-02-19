const path = require('path');
module.exports = {
    mode: "development",
    context: __dirname,
    entry: './disc.js',
    watch: true,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './mytest.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader',
        }]
    }
};