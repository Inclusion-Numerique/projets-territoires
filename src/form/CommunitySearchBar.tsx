'use client'

import { ChangeEventHandler, useDeferredValue, useState } from 'react'
import styled from 'styled-components'
import { useQuery } from '@tanstack/react-query'
import { Spinner } from '@pt/ui/Spinner'
import {
  categoriesJuridiques,
  Etablissement,
  searchCommunity,
  SirenCommunitySearchResponse,
} from '@pt/siren/siren'
import { ProjectData } from '@pt/project/project'

const SearchResult = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid var(--blue-cumulus-850-200);

  &:hover {
    background-color: var(--blue-cumulus-925-125);
  }
`

export const CommunitySearchBar = ({
  onSelect,
  disabled,
  placeholder,
  id,
}: {
  id?: string
  disabled?: boolean
  placeholder?: string
  onSelect: (value: ProjectData['community']) => void | Promise<void>
}) => {
  const [searchQuery, setSearchQuery] = useState('')

  const deferredQuery = useDeferredValue(searchQuery)
  const queryEnabled = deferredQuery.trim().length >= 2

  const { data, isLoading, isError, error } = useQuery<
    SirenCommunitySearchResponse,
    Error
  >(['community', deferredQuery], () => searchCommunity(deferredQuery), {
    enabled: queryEnabled,
    keepPreviousData: true,
  })

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchQuery(event.target.value)
  }

  const onClick = ({
    nic,
    siret,
    siren,
    uniteLegale,
    adresseEtablissement,
  }: Etablissement) => {
    const value: ProjectData['community'] = {
      siret,
      siren,
      nic,
      ...uniteLegale,
      ...adresseEtablissement,
    }
    console.log('CLICK', value)
    onSelect(value)
    setSearchQuery('')
  }

  console.log('SEARCH', { deferredQuery, data, isLoading, isError, error })

  return (
    <div
      className="fr-search-bar"
      style={{ flex: 1, position: 'relative' }}
      id="header-search"
      role="search"
    >
      <input
        className="fr-input"
        placeholder={placeholder ?? 'Rechercher'}
        type="search"
        disabled={disabled}
        id={id}
        autoFocus
        onChange={onChange}
      />
      <button className="fr-btn" title="Rechercher">
        Rechercher
      </button>
      {queryEnabled ? (
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 0,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '0 0 4px 4px',
          }}
          className="fr-background-default--grey fr-card--shadow fr-py-2v"
        >
          {isLoading ? (
            <div className="fr-mx-auto">
              <Spinner size="sm" />
            </div>
          ) : null}
          {error ? <p>{error.message}</p> : null}
          {data ? (
            data.etablissements.length === 0 ? (
              <p>Aucun résultat pour &quot;{deferredQuery}&quot;</p>
            ) : (
              <div style={{ width: '100%' }}>
                {data.etablissements.map((etablissement) => (
                  <SearchResult
                    onClick={() => onClick(etablissement)}
                    key={etablissement.siret}
                    className="fr-py-2v fr-px-4v"
                  >
                    <span style={{ flex: 1 }}>
                      <strong>
                        {etablissement.uniteLegale.denominationUniteLegale}
                      </strong>
                      <span className="fr-my-0 fr-ml-2v fr-text--sm">
                        {
                          etablissement.adresseEtablissement
                            .codePostalEtablissement
                        }{' '}
                        {
                          etablissement.adresseEtablissement
                            .libelleCommuneEtablissement
                        }
                      </span>
                    </span>
                    <span className="fr-badge fr-badge--sm fr-badge--blue-cumulus">
                      {
                        categoriesJuridiques[
                          etablissement.uniteLegale
                            .categorieJuridiqueUniteLegale
                        ]
                      }
                    </span>
                  </SearchResult>
                ))}
              </div>
            )
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
