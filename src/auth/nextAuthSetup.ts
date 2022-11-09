import { getBaseUrl } from '@pt/utils/baseUrl'

// This should be setup before using next auth as url is not available in Scalingo context in env variables
process.env.NEXTAUTH_URL = getBaseUrl()
