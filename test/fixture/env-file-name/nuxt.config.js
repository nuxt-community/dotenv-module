const { resolve } = require('path')

module.exports = {
  dev: false,
  rootDir: resolve(__dirname),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: [
    { handler: require('../../../') }
  ],
  dotenv: {
    filename: '.env.two'
  }
}
