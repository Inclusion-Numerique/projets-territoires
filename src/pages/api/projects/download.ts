import { NextApiHandler } from 'next'
import { stringify } from 'csv-stringify'
import { sessionTokenFromCookies } from '@pt/security/authentication'
import { sessionUserFromSessionToken } from '@pt/auth/sessionUserFromSessionToken'
import {
  generateProjectsCsvData,
  projectsCsvFilename,
} from '@pt/project/projectsDownload'

const download: NextApiHandler = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).send('Method not allowed')
  }
  const user = await sessionUserFromSessionToken(
    sessionTokenFromCookies(req.cookies),
  )

  if (!user) {
    return res.status(401).send('Unauthenticated')
  }

  const data = await generateProjectsCsvData()
  const csv = stringify(data)

  res
    .setHeader('Content-Type', 'text/csv')
    .setHeader(
      'Content-Disposition',
      `attachment;filename=${projectsCsvFilename()}`,
    )
    .send(csv)
}

export default download
