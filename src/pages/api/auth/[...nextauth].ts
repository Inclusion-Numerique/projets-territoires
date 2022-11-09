import '@pt/auth/nextAuthSetup'
import EmailProvider from 'next-auth/providers/email'

import NextAuth, { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prismaClient } from '@pt/prisma'
import { PrivateConfig } from '@pt/config'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismaClient),
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
    // signOut: '/auth/signout',
    verifyRequest: '/auth/verify',
  },
  providers: [EmailProvider(PrivateConfig.Auth.Email)],
  callbacks: {
    signIn: ({ user }) => {
      return !!user.email?.endsWith('@anct.gouv.fr')
    },

    session: ({ session, user }) => {
      session.user.id = user.id
      return session
    },
  },
}

export default NextAuth(authOptions)
