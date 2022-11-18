import { listProjects } from '@pt/projethoteque/scrapper'

describe('scrapper', () => {
  it('Get the lists of all projects', async () => {
    const result = await listProjects()

    expect(result.projectItems.length).to.be.gte(100)
    expect(result.districts.length).to.be.gte(10)
    expect(result.districts).to.include('Martinique')
  })
})

export {}
