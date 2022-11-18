'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { ChangeEventHandler } from 'react'
import { districts } from '@pt/projethoteque/legacyProjects'
import { categories } from '@pt/anctProjects'

const createFilterSearchParams = (
  parameter: string,
  values: Set<string>,
): string[] => {
  return [...values.values()].map(
    (value) => `${parameter}=${encodeURIComponent(value)}`,
  )
}

const createFilteredProjectsUrl = (
  activeCategoriesFilters: Set<string>,
  activeDistrictsFilters: Set<string>,
): string => {
  const searchParams = [
    ...createFilterSearchParams('thematiques', activeCategoriesFilters),
    ...createFilterSearchParams('regions', activeDistrictsFilters),
  ]

  if (searchParams.length === 0) {
    return '/projets'
  }

  return `/projets?${searchParams.join('&')}`
}

export const ProjectsFilters = () => {
  const params = useSearchParams()
  const router = useRouter()

  console.log([...params.entries()])

  const activeCategoriesFilters = new Set(params.getAll('thematiques'))
  const activeDistrictsFilters = new Set(params.getAll('regions'))

  console.log('SIDEBAR PARAMS', {
    activeCategoriesFilters,
    activeDistrictsFilters,
  })

  const onCheckDistrict: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    const selected = target.checked
    const name = target.name
    if (selected) {
      activeDistrictsFilters.add(name)
    } else {
      activeDistrictsFilters.delete(name)
    }
    router.replace(
      createFilteredProjectsUrl(
        activeCategoriesFilters,
        activeDistrictsFilters,
      ),
    )
  }

  const onCheckCategory: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    const selected = target.checked
    const name = target.name
    if (selected) {
      activeCategoriesFilters.add(name)
    } else {
      activeCategoriesFilters.delete(name)
    }
    router.replace(
      createFilteredProjectsUrl(
        activeCategoriesFilters,
        activeDistrictsFilters,
      ),
    )
  }

  return (
    <div>
      <div className="fr-form-group">
        <fieldset className="fr-fieldset">
          <legend
            className="fr-fieldset__legend fr-text--regular"
            id="checkboxes-legend"
          >
            Régions
          </legend>
          <div className="fr-fieldset__content">
            {districts.map((district) => (
              <div key={district} className="fr-checkbox-group">
                <input
                  onChange={onCheckDistrict}
                  type="checkbox"
                  id={`district_${district}`}
                  name={district}
                />
                <label
                  className="fr-label fr-pt-3v fr-pb-1v"
                  htmlFor={`district_${district}`}
                >
                  {district}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
        <fieldset className="fr-fieldset">
          <legend
            className="fr-fieldset__legend fr-text--regular"
            id="checkboxes-legend"
          >
            Thématiques
          </legend>
          <div className="fr-fieldset__content">
            {categories.map(({ title }) => (
              <div key={title} className="fr-checkbox-group">
                <input
                  onChange={onCheckCategory}
                  type="checkbox"
                  id={`category_${title}`}
                  name={title}
                />
                <label
                  className="fr-label fr-pt-3v fr-pb-1v"
                  htmlFor={`category_${title}`}
                >
                  {title}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  )
}
