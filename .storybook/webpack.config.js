const path = require('path');

module.exports = async ({ config }) => {
  config.entry.unshift('normalize.css');

  config.devtool = 'cheap-module-source-map';

  config.module.rules.push({
    test: /\.(stories|story)\.jsx?$/,
    use: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: {
          uglyCommentsRegex: [/^eslint-.*/, /^global.*/],
        },
      },
    ],
    enforce: 'pre',
  });

  config.resolve.modules.unshift(path.join(__dirname, '../src'));

  // config.module.rules.push({
  //   test: /\.tsx?$/,
  //   use: [
  //     {
  //       loader: require.resolve('awesome-typescript-loader'),
  //     },
  //     {
  //       loader: require.resolve('react-docgen-typescript-loader'),
  //     },
  //   ],
  // });
  //
  // config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
