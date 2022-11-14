import { searchCommunity } from '@pt/siren/siren'

describe('siren', () => {
  it('Searches SIREN', async () => {
    const result = await searchCommunity('Lyon 1er')
  })
})
