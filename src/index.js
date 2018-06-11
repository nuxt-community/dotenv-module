import { readFileSync, accessSync, constants as fsconstants } from 'fs'
import { join } from 'path'
import { parse } from 'dotenv'

export default function DotEnvModule (moduleOptions) {
  const defaultOptions = {
    only: [],
    path: this.options.srcDir,
    fileName: '.env'
  }

  const options = Object.assign({}, defaultOptions, moduleOptions)

  const envFilePath = join(options.path, '/', options.fileName)
  try {
    accessSync(envFilePath, fsconstants.R_OK)
  } catch (err) {
    // file not found, just return
    return
  }
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
