import { prismaClient } from '@pt/prisma'

export const getShowcaseProjects = () =>
  prismaClient.legacyProject.findMany({
    // TODO where showcase
    take: 6,
  })

export type ShowcaseProject = Awaited<
  ReturnType<typeof getShowcaseProjects>
>[number]
