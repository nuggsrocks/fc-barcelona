const nodeExternals = require('webpack-node-externals');

module.exports = (env, argv) => {
    const serverPath = argv.mode === 'production' ? './src/server/server-prod.js' : './src/server/server-dev.js';
    return {
        entry: {
            server: serverPath
        },
        output: {
            path: __dirname + '/dist',
            publicPath: '/',
            filename: '[name].js'
        },
        target: 'node',
        node: {
            __dirname: false,
            __filename: false
        },
        externals: [nodeExternals()],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }
            ]
        }
    }
}