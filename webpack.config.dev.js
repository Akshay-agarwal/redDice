import path from 'path';
import webpack from 'webpack';

export default {
    devtools: 'eval-source-map',
    entry: [
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors/
        'webpack-hot-middleware/client',
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index.js')
    ],
    output: {
        filename: 'bundle.js',
        path: '/',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                loaders: ['babel-loader'],

            }
        ]
    },
    resolve: {
        extension: ['*','.js']
    },
}