
module.exports = {
    entry: __dirname + '/client/src/index.js',
    output: {
        path: __dirname + '/client/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(scss|sass|css)$/,
                exclude: /node_modules/,
                loader: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        contentBase: __dirname + '/client/dist'
    }
}