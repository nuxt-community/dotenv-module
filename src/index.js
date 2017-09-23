import { readFileSync } from 'fs'
import { join } from 'path'
import { parse } from 'dotenv'

const defaultOptions = {
  only: [],
}

export default function DotEnvModule (moduleOptions) {
  const options = Object.assign({}, defaultOptions, moduleOptions)

  const envFilePath = join(this.options.srcDir, '/.env')
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
