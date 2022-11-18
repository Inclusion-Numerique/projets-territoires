'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { ChangeEventHandler, MouseEventHandler } from 'react'
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

  const activeCategoriesFilters = new Set(params.getAll('thematiques'))
  const activeDistrictsFilters = new Set(params.getAll('regions'))

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

  const onClickClearDistrictFilters: MouseEventHandler<
    HTMLButtonElement
  > = () => {
    router.replace(
      createFilteredProjectsUrl(activeCategoriesFilters, new Set()),
    )
  }

  const onClickClearCategoryFilters: MouseEventHandler<
    HTMLButtonElement
  > = () => {
    router.replace(createFilteredProjectsUrl(new Set(), activeDistrictsFilters))
  }

  return (
    <div className="fr-p-8v">
      <div className="fr-form-group">
        <fieldset className="fr-fieldset">
          <button
            className="fr-btns-group--inline"
            onClick={onClickClearDistrictFilters}
          >
            Effacer les filtres
          </button>

          <legend
            className="fr-fieldset__legend fr-text--regular"
            id="checkboxes-legend"
          >
            Régions
          </legend>

          <div className="fr-fieldset__content">
            {districts.map((district) => (
              <div
                key={district}
                className="fr-checkbox-group fr-checkbox-group--sm"
              >
                <input
                  onChange={onCheckDistrict}
                  type="checkbox"
                  id={`district_${district}`}
                  name={district}
                  checked={activeDistrictsFilters.has(district)}
                />
                <label
                  className="fr-label fr-pt-3v fr-pb-0 fr-text--sm"
                  htmlFor={`district_${district}`}
                >
                  {district}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
        <fieldset className="fr-fieldset">
          <button
            className="fr-btns-group--inline"
            onClick={onClickClearCategoryFilters}
          >
            Effacer les filtres
          </button>
          <legend
            className="fr-fieldset__legend fr-text--regular"
            id="checkboxes-legend"
          >
            Thématiques
          </legend>
          <div className="fr-fieldset__content">
            {categories.map(({ title }) => (
              <div
                key={title}
                className="fr-checkbox-group fr-checkbox-group--sm"
              >
                <input
                  onChange={onCheckCategory}
                  type="checkbox"
                  id={`category_${title}`}
                  name={title}
                  checked={activeCategoriesFilters.has(title)}
                />
                <label
                  className="fr-label fr-pt-3v fr-pb-0 fr-text--sm"
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
