import { isBrowser } from '@pt/utils/isBrowser'

export const getBaseUrl = () => {
  if (isBrowser) {
    // browser should use relative path
    return ''
  }
  if (process.env.BASE_URL) {
    return `https://${process.env.BASE_URL}`
  }
  if (process.env.APP) {
    // for Scalingo
    return `https://${process.env.APP}.osc-fr1.scalingo.io`
  }
  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`
}

export const getUrl = (path: string) => {
  return `${getBaseUrl()}${path}`
}
