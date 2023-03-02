import { prismaClient } from '@pt/prisma'

export const getShowcaseProjects = () =>
  prismaClient.legacyProject.findMany({
    where: {
      showcase: {
        not: null,
      },
    },
    orderBy: { showcase: 'asc' },
  })

export type ShowcaseProject = Awaited<
  ReturnType<typeof getShowcaseProjects>
>[number]
