jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000
process.env.PORT = process.env.PORT || 5060
process.env.NODE_ENV = 'production'

const { Nuxt, Builder } = require('nuxt')
const request = require('request-promise-native')

const config = require('./fixture/nuxt.config')

const url = path => `http://localhost:${process.env.PORT}${path}`
const get = path => request(url(path))

describe('Module', () => {
  let nuxt

  beforeAll(async () => {
    config.modules.unshift(function () {
      // Add test specific test only hooks on nuxt life cycle
    })

    // Build a fresh nuxt
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    await nuxt.listen(process.env.PORT)
  })

  afterAll(async () => {
    // Close all opened resources
    await nuxt.close()
  })

  test('Variables from the .env file should have been loaded', async () => {
    let html = await get('/')
    expect(html).toContain('foo:bar')
    expect(html).toContain('bar:baz')
    expect(html).toContain('baz:foo')
  })

  test('Variables from the .env file should NOT override existing values from nuxt.config.js', async () => {
    let html = await get('/')
    expect(html).not.toContain('foo:baz')
  })

  test('When an only array is passed, the variables not included should not be loaded', async () => {
    let html = await get('/')
    expect(html).toContain('more1:yep')
    expect(html).not.toContain('more2:nope')
  })
})
