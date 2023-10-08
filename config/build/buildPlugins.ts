import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {IBuildOptions} from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
export const buildPlugins = (options: IBuildOptions): webpack.WebpackPluginInstance[] => {
    const {paths, isDev} = options
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin,
        new MiniCssExtractPlugin(
            {
                filename: 'css/[name].[contenhash:8].css',
                chunkFilename: 'css/[name].[contenhash:8].css'
            }
        ),
        ...(isDev ? [new ReactRefreshWebpackPlugin()] : [new webpack.HotModuleReplacementPlugin()]),
        new webpack.DefinePlugin({
            __IS_DEV__: isDev
        })
        ]
}