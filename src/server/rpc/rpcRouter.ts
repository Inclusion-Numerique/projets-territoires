import { initTRPC, TRPCError } from '@trpc/server'
import { RpcContext } from '@pt/server/rpc/rpcContext'
import { SessionUser } from '@pt/auth/sessionUser'
import { ProjectDataValidation } from '@pt/project/project'
import { prismaClient } from '@pt/prisma'
import { v4 } from 'uuid'
import z from 'zod'
import { District } from '@pt/projethoteque/legacyProjects'
import { findLegacyProjects } from '@pt/projethoteque/findLegacyProjects'
import { Category } from '@pt/anctProjects'

const t = initTRPC.context<RpcContext>().create()

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
      }) => {
        const id = v4()
        const project = await prismaClient.project.create({
          data: {
            id,
            reference,
            community: {
              connectOrCreate: {
                where: { id: community.id },
                create: { ...community, zipcodes: community.zipcodes ?? [] },
              },
            },
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
          include: { attachments: true, community: true },
        })

        return { project }
      },
    ),
  findLegacyProject: t.procedure
    .input(
      z.object({
        districts: z.array(z.string()),
        categories: z.array(z.string()),
      }),
    )
    .query(async ({ input: { districts, categories } }) => {
      const projects = await findLegacyProjects({
        activeCategoriesFilters: categories as Category[],
        activeDistrictsFilters: districts as District[],
      })
      return { projects }
    }),
})
// export type definition of API
export type AppRouter = typeof appRouter
