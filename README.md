# webpack-config-vue ![build status](https://img.shields.io/circleci/project/egoist/webpack-config-vue/master.svg)

> Reusable Webpack config for Vue.js

## Install

```bash
$ npm install --save-dev webpack-config-vue
```

## Example

In your `webpack.config.js`:

```js
const vue = require('webpack-config-vue')

module.exports = vue({
  entry: './main.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  }
})
```

## License

MIT &copy; [EGOIST](https://github.com/egoist)
