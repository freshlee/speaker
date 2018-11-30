// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展

module.exports = function(webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', {
    libraryName: 'antd',
    style: 'css',
  }]);
  console.log(webpackConfig)
  webpackConfig.module.loaders.push({
    test: /\.less$/,
    loader: 'style-loader!css-loader!less-loader'
  })
  console.log(webpackConfig.module.loaders)

  return webpackConfig;
};
