'use client'
import styles from '@pt/app/(public)/projets/styles.module.scss'
import {
  useCategoriesFilters,
  useDistrictFilters,
} from '@pt/app/(public)/projets/projectFiltersStore'
import { trpc } from '@pt/trpc'
import { withTrpc } from '@pt/withTrpc'
import {
  ProjectCards,
  ProjectCardsWithAnimation,
} from '@pt/app/(public)/projets/ProjectCards'
import { Spinner } from '@pt/ui/Spinner'
import { useInView } from 'react-intersection-observer'

const ProjectsList = ({}: {}) => {
  const selectedDistricts = useDistrictFilters(({ selected }) => selected)
  const selectedCategories = useCategoriesFilters(({ selected }) => selected)

  const projectsQuery = trpc.findLegacyProject.useInfiniteQuery(
    {
      limit: 10,
      districts: [...selectedDistricts],
      categories: [...selectedCategories],
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      keepPreviousData: true,
    },
  )

  const { ref } = useInView({
    onChange: (inView) => {
      if (inView) {
        projectsQuery.fetchNextPage()
      }
    },
  })

  const pages = projectsQuery.data?.pages
  const totalCount = pages ? pages[0].count : null

  if (projectsQuery.isError) {
    return (
      <div
        className={`fr-p-4v`}
        style={{
          textAlign: 'center',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h6 style={{ width: '100%' }}>
          Une erreur est survenue lors du chargement des projets, merci de
          réessayer ultérieurement.
        </h6>
      </div>
    )
  }

  if (projectsQuery.isLoading) {
    return <Spinner size="sm" />
  }

  if (totalCount === 0) {
    return (
      <div
        className={`fr-p-4v ${styles.legacyProjectCard}`}
        style={{
          textAlign: 'center',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h6 style={{ width: '100%' }}>
          Il n&apos;y a pas encore de projets pour votre recherche.
        </h6>
      </div>
    )
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <p style={{ fontWeight: 400, fontSize: '.875rem', marginBottom: 0 }}>
          {totalCount === 1
            ? `1 projet correspond à votre recherche`
            : `${totalCount} projets correspondent à votre recherche`}
        </p>
      </div>
      <ul className="fr-raw-list fr-mt-8v">
        {pages?.map((page, i) => (
          <>
            {i === 0 ? (
              <ProjectCardsWithAnimation
                key={`${i}_${page.nextCursor}`}
                projects={page.projects}
                displayCta={!page.nextCursor}
              />
            ) : (
              <ProjectCards
                key={`${i}_${page.nextCursor}`}
                projects={page.projects}
                displayCta={!page.nextCursor}
              />
            )}
          </>
        ))}
      </ul>
      {projectsQuery.hasNextPage ? (
        <div
          ref={ref}
          className="fr-mt-4v"
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Spinner />
        </div>
      ) : null}
    </>
  )
}

export default withTrpc(ProjectsList)
