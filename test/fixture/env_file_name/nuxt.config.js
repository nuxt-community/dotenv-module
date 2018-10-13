module.exports = {
  srcDir: __dirname,
  dev: false,
  render: {
    resourceHints: false
  },
  modules: [
    ['~/../..', {
      filename: '.env.two'
    }]
  ]
}
