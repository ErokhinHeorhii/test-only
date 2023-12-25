import path from "path";
import webpack from "webpack";
import {BuildEnv, BuildMode, BuildPase} from "./config/build/types/types";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";

export default (env: BuildEnv) => {
    const paths: BuildPase = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html')
    };
    const mode: BuildMode = env.mode || 'development';
    const isDev: boolean = mode === 'development';
    const PORT = env.port || 3000

    return buildWebpackConfig({
        isDev,
        mode,
        paths,
        port: PORT
    })
}
