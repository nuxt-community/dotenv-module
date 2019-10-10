module.exports = {
  dev: false,
  rootDir: __dirname,
  render: {
    resourceHints: false
  },
  buildModules: [
    { handler: require('../../../') }
  ],
  dotenv: {
    path: './test/fixture/path-to-env/alternativeenv'
  }
}
