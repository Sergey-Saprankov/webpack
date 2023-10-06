import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';

import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildMode, IBuildEnv, IBuildPath} from "./config/build/types/types";

export default (env: IBuildEnv): webpack.Configuration  => {

    const paths: IBuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    const mode: BuildMode = env.mode || 'development'

    const isDev: boolean = mode === 'development'

    const port: number = env.port || 3000

    return buildWebpackConfig({ mode, paths, isDev, port } );
}