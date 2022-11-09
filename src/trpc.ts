import 'client-only'
import { AppRouter } from '@pt/server/rpc/rpcRouter'
import { createTRPCReact } from '@trpc/react-query'

export const trpc = createTRPCReact<AppRouter>()
