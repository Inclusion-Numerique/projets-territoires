import {PublicConfig} from '@pt/config'

type SirenCommunitySearchResponse = Etablissement[]

type Etablissement = {
    uniteLegale: {
        denominationUniteLegale: string,
        categorieJuridiqueUniteLegale: FormeJuridique
    },
    adresseEtablissement: { codePostalEtablissement: string, codeCommuneEtablissement: string }
}

type FormeJuridique = {
    commune: '7210'
    departement: '7220'
    domtom: '7225'
    collectiviteTerritoriales: '7229'
    region: '7230'
    communeAssociee: '7312'
    metropole: '7344'
    communauteDeCommunes: '7346'
    communauteDeVilles: '7347'
    communauteAgglo: '7348'
}

export const searchCommunity = async (
    searchQuery: string,
): Promise<SirenCommunitySearchResponse> => {
    const result = await fetch(
        `https://api.insee.fr/entreprises/sirene/V3/siret?q=raisonSociale:${encodeURIComponent(
            searchQuery,
        )}&nombre=10&champs=codePostalEtablissement,codeCommuneEtablissement,denominationUniteLegale,categorieJuridiqueUniteLegale`,
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

