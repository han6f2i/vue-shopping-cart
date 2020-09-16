const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'shopping-cart.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader'],
            },
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                // use: ['style-loader','css-loader'],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader"
                ],
                // use: [
                //   process.env.NODE_ENV !== 'production'
                //     ? 'vue-style-loader'
                //     : MiniCssExtractPlugin.loader,
                //   'css-loader'
                // ],
                test: /\.css$/
            }
        ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
            // filename: "[name].[hash].css",
            // chunkFilename: "[id].[hash].css"
        }),
        // new HtmlWebpackPlugin({
        //     template: "index.html"
        // }),
        // 请确保引入这个插件来施展魔法
        new VueLoaderPlugin()
    ]
}
