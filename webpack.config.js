const path = require("path");
const entryPath = "./";
const entryFile = "main.js";
const scssFile = "main.scss";

module.exports = {
    devtool: 'source-map',
    entry: [
        `${entryPath}src/js/${entryFile}`,
        `${entryPath}src/scss/${scssFile}`
    ],
    output: {
        filename: "js/out.js",
        path: path.resolve(__dirname, `${entryPath}`)
    },
    devServer: {
        contentBase: path.join(__dirname, `${entryPath}`),
        publicPath: "/",
        compress: true,
        inline: true,
        port: 3001,
    },
    module: {
        rules: [
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: path.resolve(__dirname, `${entryPath}/assets`),
                            outputPath: './assets/'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {

                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    }]
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './css/[name].css'
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader?-url',
                        options: {
                            sourceMap:true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')],
                            sourceMap: true

                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap:true
                        }
                    }
                ]
            }
        ]
    },
};