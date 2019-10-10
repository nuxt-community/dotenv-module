module.exports = {
  dev: false,
  rootDir: __dirname,
  render: {
    resourceHints: false
  },
  env: {
    foo: 'bar',
    bar: 'baz'
  },
  buildModules: [
    { handler: require('../../../') }
  ],
  dotenv: {
    only: ['baz', 'foo', 'more1'],
    systemvars: true
  }
}
