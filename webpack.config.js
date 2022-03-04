var path = require("path");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode: "production",
    target: "node",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js",
        libraryTarget: "commonjs2"
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx'],
        modules: ['node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                // use: ExtractTextPlugin.extract({
                //     fallback: "style-loader",
                //     use: "css-loader"
                // })
                // use: ["style-loader", "css-loader"]
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: "file-loader",
            }
        ]
    },
    externals: {
        react: "react"
    },
    plugins: [
        // new ExtractTextPlugin("styles.css"),
        // new ExtractTextPlugin("styles.css", {
        //     allChunks: true,
        //  })
    ]
};