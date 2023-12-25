export type BuildMode = 'production' | 'development'

export interface BuildPase {
    entry: string,
    build: string,
    html: string,
}

export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPase,
    isDev: boolean,
    port: number,
}

export interface BuildEnv {
    mode: BuildMode,
    port: number,
}
