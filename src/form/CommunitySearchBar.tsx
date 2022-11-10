'use client'

import { ChangeEventHandler, useDeferredValue, useState } from 'react'
import styled from 'styled-components'
import { useQuery } from '@tanstack/react-query'
import { Spinner } from '@pt/ui/Spinner'
import { searchCommunity } from '@pt/siren/siren'

const SearchResult = styled.div`
  width: 100%;
  cursor: pointer;

  &:hover {
    font-weight: 600;
  }
`

export const CommunitySearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const deferredQuery = useDeferredValue(searchQuery)
  const queryEnabled = deferredQuery.trim().length >= 2

  const { data, isLoading, isError, error } = useQuery(
    ['community', deferredQuery],
    () => searchCommunity(deferredQuery),
    {
      enabled: queryEnabled,
    },
  )

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchQuery(event.target.value)
  }

  const onClick = () => {
    console.log('CLICK')
  }

  return (
    <div
      className="fr-search-bar"
      style={{ flex: 1, position: 'relative' }}
      id="header-search"
      role="search"
    >
      <label className="fr-label" htmlFor="search">
        Recherche
      </label>
      <input
        className="fr-input"
        placeholder="Rechercher"
        type="search"
        id="search"
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
          className="fr-background-default--grey fr-card--shadow fr-px-4v fr-py-2v"
        >
          {isLoading ? (
            <div className="fr-mx-auto">
              <Spinner size="sm" />
            </div>
          ) : null}
          {isError ? <p>{error.message}</p> : null}
          {data ? (
            data.TODO.length === 0 ? (
              <p>Aucun résultat pour &quot;{deferredQuery}&quot;</p>
            ) : (
              <div style={{ width: '100%' }}>
                {data.TODO.map((WHATISTHAT) => (
                  <SearchResult
                    onClick={onClick(WHATISTHAT)}
                    key={WHATISTHAT.id}
                    className="fr-py-4v"
                  >
                    {WHATISTHAT.name}
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
