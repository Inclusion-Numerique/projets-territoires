import 'server-only'
import { cookies } from 'next/headers'
import { SessionUser } from '@pt/auth/sessionUser'
import { sessionUserFromSessionToken } from '@pt/auth/sessionUserFromSessionToken'

const sessionTokenCookie = 'next-auth.session-token'
const secureSessionTokenCookie = '__Secure-next-auth.session-token'

export const getSessionUser = async (): Promise<SessionUser | null> => {
  const allCookies = cookies()
  const sessionToken =
    allCookies.get(secureSessionTokenCookie) ??
    allCookies.get(sessionTokenCookie)

  if (!sessionToken) {
    return null
  }
  return sessionUserFromSessionToken(sessionToken.value)
}

export const getAuthenticatedSessionUser = () =>
  getSessionUser().then((user) => {
    if (!user) {
      throw new Error('Unauthenticated user')
    }
    return user
  })
