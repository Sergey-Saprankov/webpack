import {IBuildOptions} from "./types/types";
import type { Configuration as DevServerConfiguration} from 'webpack-dev-server'

export const buildDevServer = (options: IBuildOptions): DevServerConfiguration => {
    const {port} = options
    return {
        port,
        open: true,
        hot: true,
        historyApiFallback: true
    }
}