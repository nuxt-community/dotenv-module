const { setup, loadConfig, get } = require('@nuxtjs/module-test-utils')

describe('basic', () => {
  let nuxt

  beforeAll(async () => {
    ({ nuxt } = await setup(loadConfig(__dirname, 'basic')))
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('variables from the .env file should have been loaded', async () => {
    const html = await get('/')
    expect(html).toContain('foo: bar')
    expect(html).toContain('bar: baz')
    expect(html).toContain('baz: foo')
  })

  test('variables from the .env file should NOT override existing values from nuxt.config.js', async () => {
    const html = await get('/')
    expect(html).not.toContain('foo: baz')
  })

  test('when an only array is passed, the variables not included should not be loaded', async () => {
    const html = await get('/')
    expect(html).toContain('more1: yep')
    expect(html).not.toContain('more2: nope')
  })
})
