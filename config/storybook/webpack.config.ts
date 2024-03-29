import path from 'path';
import webpack, { RuleSetRule } from 'webpack';

import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../loaders/buildCssLoader';
import { buildSvgLoader } from '../loaders/buildSvgLoader';

export default ({ config } :{config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  const isDev = config.mode === 'development';

  config.resolve.modules.push(paths.src);
  config.resolve.modules.push('.ts', '.tsx');

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.plugins.push(new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
  }));

  config.module.rules.push(buildSvgLoader());
  config.module.rules.push(buildCssLoader(true));

  return config;
};
