const { Nuxt, Builder } = require('nuxt-edge')
const getPort = require('get-port')

describe('basic', () => {
  let nuxt

  beforeAll(async () => {
    nuxt = new Nuxt(require('./fixture/basic/nuxt.config'))
    await nuxt.ready()
    await new Builder(nuxt).build()
    await nuxt.listen(await getPort())
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('variables from the .env file should have been loaded', async () => {
    const { html } = await nuxt.renderRoute('/')
    expect(html).toContain('foo: bar')
    expect(html).toContain('bar: baz')
    expect(html).toContain('baz: foo')
  })

  test('variables from the .env file should NOT override existing values from nuxt.config.js', async () => {
    const { html } = await nuxt.renderRoute('/')
    expect(html).not.toContain('foo: baz')
  })

  test('when an only array is passed, the variables not included should not be loaded', async () => {
    const { html } = await nuxt.renderRoute('/')
    expect(html).toContain('more1: yep')
    expect(html).not.toContain('more2: nope')
  })
})
