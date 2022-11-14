const anctProjectCategoryLink = (id: number): string =>
  `https://agence-cohesion-territoires.gouv.fr/la-projetotheque-15?field_thematics_term_m[${id}]=${id}&title=&op=Filtrer`

export const allProjectsLink =
  'https://agence-cohesion-territoires.gouv.fr/la-projetotheque-15'

export const projectCategoriesLinks: {
  image: string
  title: string
  url: string
}[] = [
  {
    title: 'Accès au numérique',
    image: '/artwork/pictograms/environment/environment.svg',
    url: anctProjectCategoryLink(8),
  },
  {
    title: 'Services au public',
    image: '/artwork/pictograms/environment/environment.svg',
    url: anctProjectCategoryLink(30),
  },
  {
    title: 'Transport et mobilités',
    image: '/artwork/pictograms/environment/environment.svg',
    url: anctProjectCategoryLink(18),
  },
  {
    title: 'Tiers-lieux',
    image: '/artwork/pictograms/environment/environment.svg',
    url: anctProjectCategoryLink(31),
  },
  {
    title: 'Soutien aux associations',
    image: '/artwork/pictograms/environment/environment.svg',
    url: anctProjectCategoryLink(173),
  },
  {
    title: 'Logement et cadre de vie',
    image: '/artwork/pictograms/environment/environment.svg',
    url: anctProjectCategoryLink(22),
  },
  {
    title: 'Développement économique et industriel',
    image: '/artwork/pictograms/environment/environment.svg',
    url: anctProjectCategoryLink(41),
  },
  {
    title: 'Ingénierie sur mesure',
    image: '/artwork/pictograms/environment/environment.svg',
    url: anctProjectCategoryLink(177),
  },
  {
    title: 'Infrastructures locales',
    image: '/artwork/pictograms/environment/environment.svg',
    url: anctProjectCategoryLink(25),
  },
  {
    title: 'Inclusion sociale',
    image: '/artwork/pictograms/environment/environment.svg',
    url: anctProjectCategoryLink(50),
  },
  {
    title: 'Education et jeunesse',
    image: '/artwork/pictograms/environment/environment.svg',
    url: anctProjectCategoryLink(48),
  },
  {
    title: 'Attractivité',
    image: '/artwork/pictograms/environment/environment.svg',
    url: anctProjectCategoryLink(184),
  },
]
