import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

export default function DotEnvModule (moduleOptions) {
  const envFilePath = path.join(this.options.srcDir, '/.env')
  const envConfig = dotenv.parse(fs.readFileSync(envFilePath))

  for (let key in envConfig) {
    if (!this.options.env[key]) {
      this.options.env[key] = envConfig[key]
    }
  }
}
