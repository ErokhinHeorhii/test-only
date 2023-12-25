import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'

import {BuildOptions} from "./types/types";

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
    const {port} = options

    return {
        open: true,
        port: port
    }
}
