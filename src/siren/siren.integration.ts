import { searchCommunity } from '@pt/siren/siren'

describe('siren', () => {
  it('Searches with multiple words', async () => {
    const result = await searchCommunity('Lyon 1er')
  })

  it('Searches without duplicates', async () => {
    const result = await searchCommunity('Grenoble')
  })
})
