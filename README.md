# webpack-config-vue [![build status](https://img.shields.io/circleci/project/egoist/webpack-config-vue/master.svg)](https://circleci.com/gh/egoist/webpack-config-vue)

> Reusable Webpack config for Vue.js

## Install

You use install [webpack-config-babel6](https://github.com/egoist/webpack-config-babel6) first.

```bash
$ npm install --save-dev webpack-config-vue
```

## Example

In your `webpack.config.js`:

```js
const babel = require('webpack-config-babel6')
const vue = require('webpack-config-vue')

let config = {
  entry: './main.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  }
}

config = babel(config)
config = vue(config)

// apply postcss plugins
config.vue.postcss = [
  require('precss')
]

module.exports = config
```

## License

MIT &copy; [EGOIST](https://github.com/egoist)
