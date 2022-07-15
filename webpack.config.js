const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../public/main.js'),
    // mode: 'production',
    mode: process.env.NODE_ENV,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        static: {
            publicPath: 'public',
            directory: path.resolve(__dirname, 'build')
        },
        compress: true,
        port: 8080,
        // proxy: {
        //   '/': 'http://localhost:3000'
        // },
        // proxy: {
        //   '/api/*': {
        //     target: 'http://localhost:3000',
        //     secure: false,
        //   }
        // }
    },
    plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
};