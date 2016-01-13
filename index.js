const path = require('path')
const safetify = require('webpack-config-safetify')

module.exports = function (config) {
  config = safetify(config)
  config.module.loaders.push({
    test: /\.vue$/,
    loaders: ['vue']
  })
  config.resolveLoader.modulesDirectories.push(
    path.join(__dirname, 'node_modules')
  )
  config.resolve.extenstions.push('.vue')
  return config
}
