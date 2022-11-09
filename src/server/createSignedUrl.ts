import { nanoid } from 'nanoid'
import { PrivateConfig } from '@pt/config'
import { s3 } from '@pt/server/s3/s3'

export const createSignedGetUrl = async ({
  key,
}: {
  key: string
}): Promise<{ url: string }> => {
  const fileParams = {
    Key: key,
    // Expires: 3600,
  }

  // Signed URL
  const url = await s3.getSignedUrlPromise('getObject', fileParams)
  return { url }
}

export const createSignedUploadUrl = async ({
  directory,
  name,
  type,
}: {
  name: string
  type: string
  directory: string
}): Promise<{ url: string; key: string }> => {
  // TODO current git branch and more info on user
  const key = `${PrivateConfig.NodeEnv}/${directory}/${nanoid()}_${name}`

  const fileParams = {
    Key: key,
    // Expires: 3600,
    ContentType: type,
  }

  // Signed URL
  const url = await s3.getSignedUrlPromise('putObject', fileParams)
  return { url, key }
}
