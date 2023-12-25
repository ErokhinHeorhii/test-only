import path from 'path'

import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv, BuildMode, BuildPase } from './config/build/types/types'

export default (env: BuildEnv) => {
  const paths: BuildPase = {
    build: path.resolve(__dirname, 'dist'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }
  const mode: BuildMode = env.mode || 'development'
  const isDev: boolean = mode === 'development'
  const PORT = env.port || 3000

  return buildWebpackConfig({
    isDev,
    mode,
    paths,
    port: PORT,
  })
}
