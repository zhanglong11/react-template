const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:{
        app:path.resolve(__dirname,'../src/index.js')
    },
    output: {
        filename:'[name].js',
        path:path.resolve(__dirname,'../dist')
    },
    // 解析
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', 'css']
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(:?jpg|gif|png|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1200
                        }
                    }
                ]
            }
        ]
    },
    resolve:{
      alias:{
          '@Components': path.resolve(__dirname,'../src/components'),
          '@Pages': path.resolve(__dirname,'../src/pages'),
      }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Manage',
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html')
        })
    ]
}