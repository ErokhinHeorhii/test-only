import {builderLoaders} from "./builLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import webpack from "webpack";
import {BuildOptions} from "./types/types";
import {buildDevServer} from "./buildDevServer";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {paths, mode, isDev} = options

    return {
        entry: paths.entry,
        mode: mode,
        output: {
            filename: '[contenthash].[name].js',
            path: paths.build,
            clean: true,
        },
        module: {
            rules: builderLoaders(),
        },
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev ? 'inline-source-map' : undefined,
        resolve: buildResolvers(),
        plugins: buildPlugins(paths)
    }
}
