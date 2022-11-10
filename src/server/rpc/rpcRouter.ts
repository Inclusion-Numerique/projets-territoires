import { initTRPC, TRPCError } from '@trpc/server'
import { RpcContext } from '@pt/server/rpc/rpcContext'
import { SessionUser } from '@pt/auth/sessionUser'
import { ProjectDataValidation } from '@pt/project/project'
import { customAlphabet } from 'nanoid'
import { prismaClient } from '@pt/prisma'
import { v4 } from 'uuid'

const t = initTRPC.context<RpcContext>().create()

const referenceGenerator = customAlphabet(
  'ABCDEFGHJKLMNPQRSTUVWXYZ123456789',
  10,
)

const enforceUserIsLoggedIn = (
  user: SessionUser | null,
): user is SessionUser => {
  if (!user) {
    throw new TRPCError({
      code: 'FORBIDDEN',
      message: 'User is not authenticated',
    })
  }
  return true
}

export const appRouter = t.router({
  createProject: t.procedure
    .input(ProjectDataValidation)
    .mutation(
      async ({
        input: {
          reference,
          community,
          quality,
          name,
          description,
          domain,
          email,
          partners,
          phone,
          tech,
          solution,
          dates,
          attachments,
        },
        ctx: { user },
      }) => {
        const id = v4()
        const project = await prismaClient.project.create({
          data: {
            id,
            reference,
            community: { create: community },
            quality,
            name,
            description,
            domain,
            email,
            partners,
            phone,
            tech,
            solution,
            dates,
            attachments: { createMany: { data: attachments } },
          },
        })

        return { project }
      },
    ),
})
// export type definition of API
export type AppRouter = typeof appRouter
