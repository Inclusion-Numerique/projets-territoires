'use client'
import { categories } from '@pt/anctProjects'
import { ProjectFilterResetButton } from '@pt/app/(public)/projets/ProjectFilterResetButton'
import { useCategoriesFilters } from '@pt/legacyProject/projectFiltersStore'

export const ProjectsCategories = () => {
  const selectedCategories = useCategoriesFilters(({ selected }) => selected)
  const toggleCategory = useCategoriesFilters(({ toggle }) => toggle)
  const reset = useCategoriesFilters(({ reset }) => reset)

  return (
    <div className="fr-px-2w fr-px-md-4w">
      <p className="fr-text--regular fr-text--bold fr-text--lg fr-mt-8v fr-mb-2v">
        Thématiques
      </p>
      {categories.map((category) => {
        const isSelected = selectedCategories.has(category)
        return (
          <button
            type="button"
            key={category}
            className={`fr-tag fr-mt-2v fr-mr-2v `}
            onClick={() => toggleCategory(category)}
            aria-pressed={isSelected ? 'true' : 'false'}
            aria-label={`Retirer ${category}`}
          >
            {category}
          </button>
        )
      })}
      <br />
      <div className="fr-mt-4v">
        <ProjectFilterResetButton
          label={'Voir toutes les thématiques'}
          onClick={reset}
        />
      </div>
    </div>
  )
}
