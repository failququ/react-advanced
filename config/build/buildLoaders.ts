import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildCssLoader } from '../loaders/buildCssLoader';
import { buildSvgLoader } from '../loaders/buildSvgLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = buildCssLoader(isDev);

  const svgLoader = buildSvgLoader();

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff?2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [tsLoader, cssLoader, svgLoader, fileLoader];
}
