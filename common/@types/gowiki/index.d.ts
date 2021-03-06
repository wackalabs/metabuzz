declare const str = ''

declare module '*.css' {
  export default str
}
declare module '*.png' {
  export default str
}
declare module '*.jpg' {
  export default str
}
declare module '*.svg' {
  export default str
}
declare module '*.m4a' {
  export default str
}
declare module '*.mp4' {
  export default str
}
declare module '*.gif' {
  export default str
}

// reactssr
declare var reactssr: any

// set by webpack
declare var IS_TEST: boolean
declare var IS_DEV: boolean
declare var HASH: string
declare var ORIGIN_HOST: string
declare var ASSET_HOST: string

declare var MORALIS_SERVER: string
declare var MORALIS_APP_ID: string
declare var MORALIS_API_KEY: string
declare var MORALIS_SERVER_URL: string
interface Store {
  name?: string
  delete(key: string): void
  get(key: string): any
  set(key: string, data: any): void
}

interface Window {
  appVersion?: string
  appVersionString?: string
  authToken?: string
  clientId?: string
}

// enable common code that references window
declare module NodeJS {
  interface Global {
    window?: Window
  }
}

