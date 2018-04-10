import { accessSync, constants as fsconstants } from 'fs'
import { join } from 'path'
import { config } from 'dotenv-safe'

export default function DotEnvModule (moduleOptions) {
  const defaultOptions = {
    only: [],
    path: this.options.srcDir,
    example: join(this.options.srcDir, '/.env.example')
  }

  const options = Object.assign({}, defaultOptions, moduleOptions)

  const envFilePath = join(options.path, '/.env')
  try {
    accessSync(envFilePath, fsconstants.R_OK)
  } catch (err) {
    // file not found, just return
    return
  }
  const envConfig = config(Object.assign(options, { path: envFilePath })).parsed

  const isAllowed = key => {
    return options.only.length === 0 || options.only.includes(key)
  }

  Object.keys(envConfig).forEach((key) => {
    if (isAllowed(key)) {
      this.options.env[key] = this.options.env[key] || envConfig[key]
    }
  })
}
