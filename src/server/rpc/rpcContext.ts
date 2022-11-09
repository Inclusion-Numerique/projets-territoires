import { inferAsyncReturnType, TRPCError } from '@trpc/server'
import { CreateNextContextOptions } from '@trpc/server/src/adapters/next'
import { sessionUserFromSessionToken } from '@pt/auth/sessionUserFromSessionToken'

export const createContext = async ({ req, res }: CreateNextContextOptions) => {
  const sessionToken =
    req.cookies['__Secure-next-auth.session-token'] ??
    req.cookies['next-auth.session-token']

  if (!sessionToken) {
    return { req, res, user: null }
  }
  const user = await sessionUserFromSessionToken(sessionToken)
  if (!user) {
    // Not Signed in
    throw new TRPCError({
      code: 'FORBIDDEN',
      message: 'Not authorized.',
    })
  }
  return { req, res, user }
}

export type RpcContext = inferAsyncReturnType<typeof createContext>
