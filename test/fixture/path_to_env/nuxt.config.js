module.exports = {
  srcDir: __dirname,
  dev: false,
  render: {
    resourceHints: false
  },
  modules: [
    ['~/../..', {
      path: './test/fixture/path_to_env/alternativeenv'
    }]
  ]
}
