import z from 'zod'

/**
 * Nom et prénom du point de contact
 * Qualité du point de contact
 * Email
 * Numéro de téléphone
 * Votre idée concerne le domaine suivant : (avec les propositions  déjà présentes)
 * Nom de votre solution (max 100 caractères)
 * Pouvez-vous décrire votre projet en quelques lignes ? (max 2000 caractères)
 * Quelles ont été les dates clefs ? (max 500 caractères)
 * Qui sont les partenaires du projet ? (max 500 caractères)
 * Pouvez-vous décrire les aspects techniques du projet ? (max 1000 caractères)
 * Souhaitez-vous télécharger une PJ ?
 */

export const ProjectDataValidation = z.object({
  name: z.string({
    required_error: 'Veuillez renseigner le nom du projet',
  }),
  quality: z.string({
    required_error: 'Veuillez renseigner la qualité du point de contact',
  }),
  email: z
    .string({
      required_error: 'Veuillez renseigner un email',
    })
    .email('Veuillez renseigner un email valide'),
  phone: z.string({
    required_error: 'Veuillez renseigner un numéro de téléphone',
  }),
  domain: z.string({
    required_error: 'Veuillez renseigner le domaine de votre projet',
  }),
  solution: z
    .string({
      required_error: 'Veuillez renseigner le nom de votre projet',
    })
    .max(100, 'Veuillez entrer 100 caractères maximum'),
  description: z
    .string({
      required_error: 'Veuillez décrire votre projet',
    })
    .max(2000, 'Veuillez entrer 2000 caractères maximum'),
  dates: z
    .string({
      required_error: 'Veuillez renseigner les dates clefs de votre projet',
    })
    .max(500, 'Veuillez entrer 500 caractères maximum'),
  partners: z
    .string({
      required_error: 'Veuillez renseigner les partenaires de votre projet',
    })
    .max(500, 'Veuillez entrer 500 caractères maximum'),
  tech: z
    .string({
      required_error: 'Veuillez décrire les aspects techniques de votre projet',
    })
    .max(1000, 'Veuillez entrer 1000 caractères maximum'),
  reference: z.string(),
  // Array of storage keys
  files: z.array(z.string()),
})

export type ProjectData = z.infer<typeof ProjectDataValidation>
