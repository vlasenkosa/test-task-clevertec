const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const distPath = path.join(__dirname, '/public');

module.exports = (env) => {
    const isDevelopment = env.mode === 'development';
    return {
        entry: './src/index.jsx',
        output: {
            path: distPath,
            filename: 'bundle.js'
        },
        devtool: isDevelopment ? 'inline-source-map' : false,
        devServer: {
            contentBase: distPath,
            port: 8080,
            open: true
        },
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.s?[ac]ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.svg$/,
                    loader: 'svg-inline-loader'
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css'
            }),
            new CleanWebpackPlugin([distPath]),
            new webpack.ProvidePlugin({
                React: 'react'
            })
        ]
    };
};