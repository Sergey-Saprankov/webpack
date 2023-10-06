import webpack from "webpack";
import {IBuildOptions} from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildLoaders = (options: IBuildOptions): webpack.RuleSetRule[] => {
    const {isDev} = options
    const fileLoader = {
            test: /\.(png|jpe?g|gif|woff)$/i,
            use: [
                {
                    loader: 'file-loader',
                    // options: {
                    //     name: '[path][name].[ext]',
                    // },
                },
            ],
        }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const cssLoader  = {
        test: /\.css|s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                }
            },
            "sass-loader",
            ]
        }

    const tsLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }

    return [ tsLoader, cssLoader, svgLoader, fileLoader ]
}