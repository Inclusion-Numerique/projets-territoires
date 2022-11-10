import { PublicConfig } from '@pt/config'

type SirenCommunitySearchResponse = {}

export const searchCommunity = async (
  searchQuery: string,
): Promise<SirenCommunitySearchResponse> => {
  const result = await fetch(
    `https://api.insee.fr/entreprises/sirene/V3/siren?q=raisonSociale:${encodeURIComponent(
      searchQuery,
    )}&nombre=10`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${PublicConfig.sirenApiKey}`,
      },
      cache: 'no-cache',
    },
  )

  return result.json()
}
