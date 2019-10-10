const { setup, loadConfig, get } = require('@nuxtjs/module-test-utils')

describe('.env file name', () => {
  let nuxt

  beforeAll(async () => {
    ({ nuxt } = await setup(loadConfig(__dirname, 'env-file-name')))
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('variables from .env.two file should have been loaded', async () => {
    const html = await get('/')
    expect(html).toContain('foo: bar2')
  })
})
