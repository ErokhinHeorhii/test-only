import webpack from "webpack"

export const builderLoaders = (): webpack.RuleSetRule[] => {
    const tsLoader = {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: 'ts-loader',
    }
    const scssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader",
            ],
        }

    return [tsLoader, scssLoader]
}


