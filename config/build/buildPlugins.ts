import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildPase} from "./types/types";

export const buildPlugins = (path: BuildPase): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({template: path.html}),
        new webpack.ProgressPlugin()
    ]
}
