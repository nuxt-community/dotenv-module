const { resolve } = require('path')

module.exports = {
  dev: false,
  rootDir: resolve(__dirname),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  env: {
    foo: 'bar',
    bar: 'baz'
  },
  modules: [
    { handler: require('../../../') }
  ],
  dotenv: {
    only: ['baz', 'foo', 'more1'],
    systemvars: true
  }
}
