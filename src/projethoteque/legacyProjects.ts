// TODO MAP THIS WITH OLD NAMES
import { projethotequeUrl } from '@pt/projethoteque/projethoteque'

export const categoryToLegacyCategory = (category: string): string => {
  return category
}

// TODO MAP THIS WITH OLD NAMES
export const legacyCategoryToCategory = (legacyCategory: string): string => {
  return legacyCategory
}

export const legacyProjectUrl = (slug: string): string =>
  `${projethotequeUrl}/${slug}`

export const legacyProjectImageUrl = (imagePath: string): string =>
  `${projethotequeUrl}${imagePath}`

export const districts = [
  'Île-de-France',
  'Hauts-de-France',
  'La Réunion',
  'Bretagne',
  'Auvergne-Rhône-Alpes',
  'Grand Est',
  "Provence-Alpes-Côte d'Azur",
  'Bourgogne-Franche-Comté',
  'Martinique',
  'Guadeloupe',
  'Normandie',
  'Nouvelle-Aquitaine',
  'Occitanie',
  'Pays de la Loire',
  'Centre-Val de Loire',
]

const legacyCategories = [
  'France services',
  'Quartiers d’été',
  "Territoires d'industrie",
  'Pacte Ardennes',
  'Redynamisation commerciale',
  'Montagne',
  'Association des petites villes de France',
  'Cités éducatives',
  'Redynamisation de commerces',
  'Petites villes de demain',
  'Conseiller numérique France Services',
  'Politique de la ville',
  'Action coeur de ville',
  'Action cœur de ville',
  'Les Cordées de la réussite',
  'Ingénierie sur mesure',
  'Tremplin Asso',
  '"Nouveaux lieux, nouveaux liens"',
  'France Services',
  'Société numérique',
  'Action cœur de ville (42)',
  'Commissariat du massif central',
  'Avenir montagne',
  'France Mobile',
  'Petites Villes de demain',
  '1000 doctorants pour les territoires',
  '"Nouveaux lieux, Nouveaux liens"',
  'Action cœur de ville / Terre de jeux 2024',
]
