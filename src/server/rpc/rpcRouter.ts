import { initTRPC, TRPCError } from '@trpc/server'
import { RpcContext } from '@pt/server/rpc/rpcContext'
import { SessionUser } from '@pt/auth/sessionUser'
import { ProjectDataValidation } from '@pt/project/project'
import { createProjectRecord } from '@pt/grist/grist'
import { customAlphabet } from 'nanoid'

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
          files,
        },
        ctx: { user },
      }) => {
        const reference = referenceGenerator()
        await createProjectRecord({
          Référence: reference,
          Date: new Date().toISOString(),
          Technique: tech,
          Solution: solution,
          Email: email,
          Dates: dates,
          Domaine: domain,
          Description: description,
          Téléphone: phone,
          Partenaires: partners,
          Qualité: quality,
          Test: false,
          Nom: name,
          'Pièces jointes': files,
        })

        return { quality, name }
      },
    ),
})
// export type definition of API
export type AppRouter = typeof appRouter
