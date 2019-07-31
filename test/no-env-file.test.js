const { Nuxt, Builder } = require('nuxt-edge')
const getPort = require('get-port')
const logger = require('../lib/logger')

logger.mockTypes(() => jest.fn())

describe('no .env file', () => {
  let nuxt

  beforeAll(async () => {
    nuxt = new Nuxt(require('./fixture/no-env-file/nuxt.config'))
    await nuxt.ready()
    await new Builder(nuxt).build()
    await nuxt.listen(await getPort())
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('should warn if not found the .env file', () => {
    expect(logger.warn).toHaveBeenCalledWith(expect.stringMatching(/^No `(.*)` file found in `(.*)`.$/))
  })

  test('when no .env file, variable from system env should be loaded', async () => {
    const { html } = await nuxt.renderRoute('/')
    expect(html).toContain('foo: oof')
  })
})
