const buildLoaders = () => {
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

    const sassLoader =  {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    return [
        babelLoader,
        sassLoader
    ]
};

module.exports = buildLoaders;