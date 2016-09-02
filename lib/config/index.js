import path from 'path'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const baseConfig = {
  // configure base info here
}

export const config = Object.assign({}, baseConfig, require(path.join(__dirname, process.env.NODE_ENV + '.js')).default)

global.config = config
