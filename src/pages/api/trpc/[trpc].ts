import * as trpcNext from '@trpc/server/adapters/next'
import { appRouter } from '@pt/server/rpc/rpcRouter'
import { createContext } from '@pt/server/rpc/rpcContext'

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
})
