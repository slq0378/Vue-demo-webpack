// 导入插件
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
var path = require('path')
console.log('path')
var config = {
    // 入口，必填
    entry: {
        main: './main'
    },
    // 出口，必填
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'main.js'
    },
    // 加载，不必填
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            }

        ]
    },
    // 插件 ，不必填
    plugins: [
        // 重命名提取后的css文件
        new ExtractTextWebpackPlugin("main.css")
    ]
};

// 导出配置
module.exports = config;