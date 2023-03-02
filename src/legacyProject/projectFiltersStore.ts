import { create } from 'zustand'
import { District } from '@pt/projethoteque/legacyProjects'
import { Category } from '@pt/anctProjects'

type FiltersState<T> = {
  selected: Set<T>
  toggle: (district: T) => void
  reset: () => void
}

const createFilterStore = <T = string>() =>
  create<FiltersState<T>>((set) => ({
    selected: new Set<T>(),
    toggle: (value: T) =>
      set((state) => {
        const cloned = new Set(state.selected)
        if (cloned.has(value)) {
          cloned.delete(value)
        } else {
          cloned.add(value)
        }
        return { selected: cloned }
      }),
    reset: () => set({ selected: new Set() }),
  }))

export const useDistrictFilters = createFilterStore<District>()

export const useCategoriesFilters = createFilterStore<Category>()
