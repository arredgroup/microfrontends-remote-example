const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: 'development',
    devServer: {
        port: 8081,
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", 'scss', 'css'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        '@babel/preset-env' /* to transfer any advansed ES to ES5 */,
                        '@babel/preset-react',
                        '@babel/preset-typescript',
                    ], // to compile react to ES5
                },
            },
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin(
            {
                name: 'Components',
                filename:
                    'main.js',
                exposes: {
                    './PrincipalTable':
                        './src/components/PrincipalTable/PrincipalTable',
                },
            }
        ),
        new HtmlWebpackPlugin({
            template:
                './public/index.html',
        }),
    ],
};