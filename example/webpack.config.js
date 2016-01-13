const vue = require('../')

module.exports = vue({
  entry: __dirname + '/main.vue',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  }
})
