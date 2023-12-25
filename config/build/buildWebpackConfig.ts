import webpack from "webpack";

import {builderLoaders} from "./builLoaders";
import {buildDevServer} from "./buildDevServer";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/types";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {isDev, mode, paths} = options

    return {
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev ? 'inline-source-map' : undefined,
        entry: paths.entry,
        mode: mode,
        module: {
            rules: builderLoaders(),
        },
        output: {
            clean: true,
            filename: '[contenthash].[name].js',
            path: paths.build,
        },
        plugins: buildPlugins(paths),
        resolve: buildResolvers()
    }
}
