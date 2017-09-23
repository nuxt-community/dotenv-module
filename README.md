# nuxtjs-dotenv-module - WIP

[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxtjs-dotenv-module/latest.svg?style=flat-square)](https://npmjs.com/package/nuxtjs-dotenv-module)
[![npm](https://img.shields.io/npm/dt/nuxtjs-dotenv-module.svg?style=flat-square)](https://npmjs.com/package/nuxtjs-dotenv-module)
[![CircleCI](https://img.shields.io/circleci/project/github/JulienTant/nuxtjs-dotenv-module.svg?style=flat-square)](https://circleci.com/gh/JulienTant/nuxtjs-dotenv-module)
[![Codecov](https://img.shields.io/codecov/c/github/JulienTant/nuxtjs-dotenv-module.svg?style=flat-square)](https://codecov.io/gh/JulienTant/nuxtjs-dotenv-module)
[![Dependencies](https://david-dm.org/JulienTant/nuxtjs-dotenv-module/status.svg?style=flat-square)](https://david-dm.org/JulienTant/nuxtjs-dotenv-module)


[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

> A nuxt.js module that loads your .env file into your context options

[📖 **Release Notes**](./CHANGELOG.md)

## Features

The module loads variables from your .env file directly into your nuxt.js application `context` and `process.env`. 

## Setup
- Add `nuxtjs-dotenv-module` dependency using yarn or npm to your project
- Add `nuxtjs-dotenv-module` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxtjs-dotenv-module',

    // With options
    ['nuxtjs-dotenv-module', { /* module options */ }],
 ]
}
```

## Usage

After creating your .env file in the project root, simply run your usual `npm run dev`. The variable inside the .env file will be added to the context (`context.env`) and process (`process.env`)

if for some reason you want to restrict what's accessible into the context, you can can pass to the module options an `only` array with the keys you want to allow.

```json
{
  modules: [
    ['nuxtjs-dotenv-module', {only: ['some_key']}],
  ]
}
```

## License

[MIT License](./LICENSE)

Copyright (c) Julien Tant <julien@craftyx.fr>