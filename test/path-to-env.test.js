const { setup, loadConfig, get } = require('@nuxtjs/module-test-utils')

describe('path to .env', () => {
  let nuxt

  beforeAll(async () => {
    ({ nuxt } = await setup(loadConfig(__dirname, 'path-to-env')))
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('variables from the alternative .env file should have been loaded', async () => {
    const html = await get('/')
    expect(html).toContain('foo: baz')
  })
})
