import { DefaultSession } from 'next-auth'

declare module '*.scss'
declare module '*.css'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
    } & DefaultSession['user']
  }
}
