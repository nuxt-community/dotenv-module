module.exports = {
  dev: false,
  rootDir: __dirname,
  render: {
    resourceHints: false
  },
  buildModules: [
    { handler: require('../../../') }
  ],
  env: {
    foo: 'oof'
  }
}
