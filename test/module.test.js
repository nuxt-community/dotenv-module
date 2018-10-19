jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000
process.env.PORT = process.env.PORT || 5060
process.env.NODE_ENV = 'production'

const { Nuxt, Builder } = require('nuxt')
const request = require('request-promise-native')

const url = path => `http://localhost:${process.env.PORT}${path}`
const get = path => request(url(path))

describe('Module', () => {
  const config = require('./fixture/module/nuxt.config')
  let nuxt

  beforeAll(async () => {
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    await nuxt.listen(process.env.PORT)
  })

  afterAll(async () => {
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

describe('Path to .env', () => {
  const config = require('./fixture/path_to_env/nuxt.config')
  let nuxt
  beforeAll(async () => {
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    await nuxt.listen(process.env.PORT)
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('Variables from the alternative .env file should have been loaded', async () => {
    let html = await get('/')
    expect(html).toContain('foo:baz')
  })
})

describe('no .env file', () => {
  const config = require('./fixture/no_env_file/nuxt.config')
  let nuxt
  beforeAll(async () => {
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    await nuxt.listen(process.env.PORT)
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('when no .env file, variable from system env should be loaded', async () => {
    let html = await get('/')
    expect(html).toContain('foo:oof')
  })
})

describe('.env file name', () => {
  const config = require('./fixture/env_file_name/nuxt.config')
  let nuxt
  beforeAll(async () => {
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    await nuxt.listen(process.env.PORT)
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('Variables from .env.two file should have been loaded', async () => {
    let html = await get('/')
    expect(html).toContain('foo:bar2')
  })
})

describe('merged configuration', () => {
  const config = require('./fixture/merged_configuration/nuxt.config')
  let nuxt
  beforeAll(async () => {
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    await nuxt.listen(process.env.PORT)
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('Variables from .env.two file should have been loaded', async () => {
    let html = await get('/')
    expect(html).toContain('foo:bar2')
  })
})
