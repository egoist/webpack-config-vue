const path = require('path')

function safetify(config) {
  return Object.assign({}, config, {
    resolve: {
      extenstions: ['', '.js']
    },
    resolveLoader: {
      modulesDirectories: []
    },
    module: {
			loaders: []
    }
  })
}

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
