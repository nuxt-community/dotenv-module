# nuxtjs-dotenv-module

[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxtjs-dotenv-module/latest.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/dotenv)
[![npm](https://img.shields.io/npm/dt/nuxtjs-dotenv-module.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/dotenv)
[![CircleCI](https://img.shields.io/circleci/project/github/nuxt-community/dotenv-module.svg?style=flat-square)](https://circleci.com/gh/nuxt-community/dotenv-module)
[![Codecov](https://img.shields.io/codecov/c/github/nuxt-community/dotenv-module.svg?style=flat-square)](https://codecov.io/gh/nuxt-community/dotenv-module)
[![Dependencies](https://david-dm.org/nuxt-community/dotenv-module/status.svg?style=flat-square)](https://david-dm.org/nuxt-community/dotenv-module)


[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

> A nuxt.js module that loads your .env file into your context options

[📖 **Release Notes**](./CHANGELOG.md)

## Features

The module loads variables from your .env file directly into your nuxt.js application `context` and `process.env`. 

## Setup
- Add `@nuxtjs/dotenv` dependency using yarn or npm to your project
- Add `@nuxtjs/dotenv` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@nuxtjs/dotenv',

    // With options
    ['@nuxtjs/dotenv', { /* module options */ }],
 ]
}
```

## Usage

After creating your .env file in the project root, simply run your usual `npm run dev`. The variable inside the .env file will be added to the context (`context.env`) and process (`process.env`)

## Options

### only

If you want to restrict what's accessible into the context, you can can pass to the module options an `only` array with the keys you want to allow.

```js
{
  modules: [
    ['@nuxtjs/dotenv', { only: ['some_key'] }],
  ]
}
```

### path

By default, the we'll be loading the `.env` file from the root of your project. If you want to change the path of the folder where we can find the `.env` file, then use the `path` option.

```js
{
  modules: [
    ['@nuxtjs/dotenv', { path: '/path/to/my/global/env/' }],
  ]
}
```

Note that this is the path to the **folder** where the `.env` file live, not the the `.env` file itself.

The path can be absolute or relative.

## Using .env file in nuxt.config.js

The `dotenv-module` won't overload the environment variables of the process running your build.

If you need to use variables from your .env file at this moment, just append `require('dotenv').config()` to your `nuxt.config.js` :

```js
require('dotenv').config()

module.exports = {
    // your usual nuxt config.
}
```

This will works thanks to the `dotenv` library provided by this module as a dependency. If you decided to ignore some values from your `.env` file in the module configuration, this won't apply here.


## License

[MIT License](./LICENSE)

Copyright (c) Julien Tant <julien@craftyx.fr>
