# @nuxtjs/dotenv

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> A Nuxt.js module that loads your .env file into your context options

[📖 **Release Notes**](./CHANGELOG.md)

:warning: With Nuxt v2.13 you might want to migrate from @nuxtjs/dotenv module to use the [new runtime config](https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config).

## Features

The module loads variables from your .env file directly into your nuxt.js application `context` and `process.env`.

## Setup

1. Add `@nuxtjs/dotenv` dependency to your project

```bash
yarn add --dev @nuxtjs/dotenv # or npm install --save-dev @nuxtjs/dotenv
```

2. Add `@nuxtjs/dotenv` to the `buildModules` section of `nuxt.config.js`

:warning: If you are using a Nuxt version previous than **v2.9** you have to install module as a `dependency` (No `--dev` or `--save-dev` flags) and also use `modules` section in `nuxt.config.js` instead of `buildModules`.

```js
export default {
  buildModules: [
    // Simple usage
    '@nuxtjs/dotenv',

    // With options
    ['@nuxtjs/dotenv', { /* module options */ }]
  ]
}
```

### Using top level options

```js
export default {
  buildModules: [
    '@nuxtjs/dotenv'
  ],
  dotenv: {
    /* module options */
  }
}
```

## Options

### `only`

- Type: `Array[String]`
- Default: `null`

If you want to restrict what's accessible into the context,
you can pass to the module options an `only` array with the keys you want to allow.

```js
export default {
  buildModules: [
    ['@nuxtjs/dotenv', { only: ['some_key'] }]
  ]
}
```

### `path`

- Type: `String`
- Default: `srcDir`

By default, the we'll be loading the `.env` file from the root of your project.
If you want to change the path of the folder where we can find the `.env` file, then use the `path` option.

```js
export default {
  buildModules: [
    ['@nuxtjs/dotenv', { path: '/path/to/my/global/env/' }]
  ]
}
```

> **Note:** that this is the path to the *folder* where the `.env` file live, not to the `.env` file itself.

The path can be absolute or relative.

### systemvars

- Type: `Boolean`
- Default: `false`

By default this is false and variables from your system will be ignored.
Setting this to true will allow your system set variables to work.

```js
export default {
  buildModules: [
    ['@nuxtjs/dotenv', { systemvars: true }]
  ]
}
```

### filename

- Type: `String`
- Default: `.env`

We can override the filename when we need to use different config files for different environments.

```js
export default {
  buildModules: [
    ['@nuxtjs/dotenv', { filename: '.env.prod' }]
  ]
}
```

## Usage

After creating your .env file in the project root, simply run your usual `yarn dev` or `npm run dev`.
The variable inside the .env file will be added to the context (`context.env`) and process (`process.env`).

## Using .env file in nuxt.config.js

This module won't overload the environment variables of the process running your build.

If you need to use variables from your .env file at this moment,
just prepend `require('dotenv').config()` to your `nuxt.config.js`:

```js
require('dotenv').config()

export default {
  // your usual nuxt config.
}
```

This will works thanks to the `dotenv` library provided by this module as a dependency.
If you decided to ignore some values from your `.env` file in the module configuration, this won't apply here.

## License

[MIT License](./LICENSE)

Copyright (c) Nuxt Community

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/dotenv/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@nuxtjs/dotenv

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/dotenv.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/dotenv

[circle-ci-src]: https://img.shields.io/circleci/project/github/nuxt-community/dotenv-module.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/nuxt-community/dotenv-module

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/dotenv-module.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/nuxt-community/dotenv-module

[license-src]: https://img.shields.io/npm/l/@nuxtjs/dotenv.svg?style=flat-square
[license-href]: https://npmjs.com/package/@nuxtjs/dotenv
