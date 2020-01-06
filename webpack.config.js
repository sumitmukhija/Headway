const path = require('path');

module.exports = {
    entry: "./src/app.tsx",
    output: {
        path: path.join(__dirname, "public/dist"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: false,
        historyApiFallback: true,
        port: 8080
    },
    module: {
        rules: [
            { test: /\.(jpg|png)$/, use: { loader: 'url-loader' } },
            { test: /\.js$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ },
            {test: /\.mp3$/,loader: 'file-loader'},
            {test: /\.s?css$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }, {
                loader: "sass-loader"
            }]
            },
            { test: /\.(ts|tsx)?$/, include: path.resolve(__dirname, 'src'), use: 'ts-loader'}
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".ts", ".tsx"],
    }
}