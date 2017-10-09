import { readFileSync } from 'fs'
import { join } from 'path'
import { parse } from 'dotenv'

export default function DotEnvModule (moduleOptions) {
  const defaultOptions = {
    only: [],
    path: this.options.srcDir
  }

  const options = Object.assign({}, defaultOptions, moduleOptions)

  const envFilePath = join(options.path, '/.env')
  const envConfig = parse(readFileSync(envFilePath))

  const isAllowed = key => {
    return options.only.length === 0 || options.only.includes(key)
  }

  Object.keys(envConfig).forEach((key) => {
    if (isAllowed(key)) {
      this.options.env[key] = this.options.env[key] || envConfig[key]
    }
  })
}
