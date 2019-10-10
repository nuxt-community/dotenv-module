const { setup, loadConfig, get } = require('@nuxtjs/module-test-utils')
const logger = require('../lib/logger')

logger.mockTypes(() => jest.fn())

describe('no .env file', () => {
  let nuxt

  beforeAll(async () => {
    ({ nuxt } = await setup(loadConfig(__dirname, 'no-env-file')))
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('should warn if not found the .env file', () => {
    expect(logger.warn).toHaveBeenCalledWith(expect.stringMatching(/^No `(.*)` file found in `(.*)`.$/))
  })

  test('when no .env file, variable from system env should be loaded', async () => {
    const html = await get('/')
    expect(html).toContain('foo: oof')
  })
})
