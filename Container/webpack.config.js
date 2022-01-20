const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: 'development',
    devServer: {
        port: 8080,
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
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
                test: /\.scss$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin(
            {
                name: 'Container',
                filename:
                    'main.js',
                remotes: {
                    Components:
                        'Components@http://localhost:8081/principalTable.js',
                },
            }
        ),
        new HtmlWebpackPlugin({
            template:
                './public/index.html',
        }),
    ],
};