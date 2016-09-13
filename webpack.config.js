// Notes : https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460#.fnql85kgk

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html', 
    inject: 'body'
})

module.exports = {
    entry: [
        './app/index.js'
    ],

    output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js"
    },

    module: {
        loaders: [
            
                {   
                    test: /\.js$/,  exclude: /(node_modules|bower_components)/, 
                    loader: 'babel',
                    query:
                    {
                        presets:['es2015', 'react']
                    }
                }
        ]
    },

    plugins: [HtmlWebpackPluginConfig]
}