module.exports = {
  srcDir: __dirname,
  env: {
    foo: 'bar',
    bar: 'baz'
  },
  dev: false,
  render: {
    resourceHints: false
  },
  modules: [
    ['~/../..', {
      only: ['baz', 'foo', 'more1']
    }]
  ]
}
