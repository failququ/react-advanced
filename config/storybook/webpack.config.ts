import path from "path";
import webpack, { RuleSetRule } from "webpack";

import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../loaders/buildCssLoader";
import { buildSvgLoader } from "../loaders/buildSvgLoader";


export default ({ config } :{config: webpack.Configuration}) => {

  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }

  config.resolve.modules.push(paths.src);
  config.resolve.modules.push('.ts', '.tsx');

  config.module.rules = config.module.rules.map(( rule: RuleSetRule) => {
    if(/svg/.test(rule.test as string)) {
      return {...rule, exclude: /\.svg$/i };
    }

    return rule
  })

  config.module.rules.push(buildSvgLoader())
  config.module.rules.push(buildCssLoader(true));

  return config;
}