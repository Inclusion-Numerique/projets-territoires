import { prismaClient } from '@pt/prisma'
import { District } from '@pt/projethoteque/legacyProjects'
import { Category } from '@pt/anctProjects'

export const findLegacyProjects = ({
  activeCategoriesFilters,
  activeDistrictsFilters,
}: {
  activeCategoriesFilters: Category[]
  activeDistrictsFilters: District[]
}) =>
  prismaClient.legacyProject.findMany({
    where: {
      ...(activeCategoriesFilters.length === 0
        ? null
        : {
            categories: {
              hasSome: activeCategoriesFilters,
            },
          }),
      ...(activeDistrictsFilters.length === 0
        ? null
        : {
            district: {
              in: activeDistrictsFilters,
            },
          }),
    },
  })
