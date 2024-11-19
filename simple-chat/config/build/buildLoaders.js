const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const buildLoaders = (isDev) => {
    const babelLoader = {
        test: /\.js$/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                },
            },
        ],
    };

    const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
        ],
    };

    return [
        babelLoader,
        sassLoader
    ];
};

module.exports = buildLoaders;
