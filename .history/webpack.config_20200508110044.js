//符合commonjs规范
const path = require('path'); 
const glob = require('glob-all');
const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');

module.exports = {
    //入口
    // entry: './demo.js',
    entry: {
        // app: './src/app.js',
        index: './src/index.js',
        // treeShaking: './src/treeShaking.js'
    },

    //出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },

    //loader  
    //执行顺序以定义顺序从后往前
    //要处理的文件需要在入口文件中引入（关联）
    //安装loader注意依赖性要同时安装
    module: {
        rules: [{
            test: /\.less$/,
            use: [
            // {
            //     loader: "style-loader" // creates style nodes from JS strings
            // }, 
                {
                    loader: MiniCssExtractPlugin.loader,
                    // options: {
                    //     publicPath: './css',
                    // },
                },
                {
                    loader: "css-loader" // translates CSS into CommonJS
                },
                {
                    loader: 'postcss-loader',
                    
                }, 
                {
                    loader: "less-loader" // compiles Less to CSS ; need less
                }
                
            ]
        }]
    },

    //plugin(插件)
    //使用：下载 --> require --> 配置
    plugins: [
        //单独抽离css文件
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'css/[name].css',
            // chunkFilename: '[id].css',
        }),
        //css treeshaking必须放在js之前
        //匹配html和js动态插入的结构
        //用到全局匹配，下载glob-all
        //html中的注释也会被匹配到（正则匹配），要去掉
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync([path.join(__dirname, './*.html'), path.join(__dirname, './src/*.js')]),
        }),
        //js作用域深度shaking
        new WebpackDeepScopeAnalysisPlugin(),
    ],



    //development 或 production
    //可以在package.json的script配置中自定义执行的语句
    
    // mode: 'development'
}