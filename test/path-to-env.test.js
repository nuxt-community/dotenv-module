const { Nuxt, Builder } = require('nuxt-edge')
const getPort = require('get-port')

describe('path to .env', () => {
  let nuxt

  beforeAll(async () => {
    nuxt = new Nuxt(require('./fixture/path-to-env/nuxt.config'))
    await nuxt.ready()
    await new Builder(nuxt).build()
    await nuxt.listen(await getPort())
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('variables from the alternative .env file should have been loaded', async () => {
    const { html } = await nuxt.renderRoute('/')
    expect(html).toContain('foo: baz')
  })
})
