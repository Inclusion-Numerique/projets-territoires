'use client'
import { categories } from '@pt/anctProjects'
import styles from './styles.module.scss'
import { useCategoriesFilters } from '@pt/app/(public)/projets/projectFiltersStore'
import { CSSProperties } from 'react'

const selectedStyle: CSSProperties = {}
const unselectedStyle: CSSProperties = {
  backgroundColor: 'var(--green-emeraude-975-75)',
  opacity: 0.7,
}

export const ProjectsCategories = () => {
  const selectedCategories = useCategoriesFilters(({ selected }) => selected)
  const toggleCategory = useCategoriesFilters(({ toggle }) => toggle)
  const reset = useCategoriesFilters(({ reset }) => reset)

  return (
    <div className="fr-px-8v">
      <p className="fr-text--regular fr-text--bold fr-text--lg fr-mt-8v">
        Thématiques
      </p>
      {categories.map((category) => {
        const isSelected =
          selectedCategories.size === 0 || selectedCategories.has(category)
        return (
          <p
            key={category}
            className={`fr-badge ${
              isSelected
                ? 'fr-badge--green-emeraude'
                : 'fr-badge--green-emeraude'
            } fr-badge--sm fr-mr-2v ${styles.categoryFilterTag}`}
            onClick={() => toggleCategory(category)}
            style={isSelected ? selectedStyle : unselectedStyle}
          >
            {category}
          </p>
        )
      })}
      <br />
      <button
        type="button"
        className="fr-mt-4v fr-btn fr-btn--tertiary-no-outline fr-text--regular fr-btn--sm"
        onClick={reset}
      >
        Voir toutes les thématiques
      </button>
    </div>
  )
}
