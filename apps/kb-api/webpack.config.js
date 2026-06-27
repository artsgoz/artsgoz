const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');

const main =
  process.env.NODE_ENV === 'development'
    ? './src/local.ts'
    : './src/vercel-handler.ts';

module.exports = {
  output: {
    path: join(__dirname, 'dist'),
    clean: true,
    libraryTarget: 'commonjs2',
    ...(process.env.NODE_ENV !== 'production' && {
      devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    }),
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main,
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: false,
      outputHashing: 'none',
      generatePackageJson: false,
      sourceMap: true,
    }),
  ],
};
