module.exports = {
  srcDir: __dirname,
  dev: false,
  render: {
    resourceHints: false
  },
  modules: [
    ['~/../..']
  ],
  dotenv: {
    filename: '.env.two'
  }
}
