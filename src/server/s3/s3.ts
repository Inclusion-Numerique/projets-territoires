import { S3 } from 'aws-sdk'
import { PrivateConfig } from '@pt/config'

export const s3 = new S3({
  accessKeyId: PrivateConfig.S3.accessKey,
  secretAccessKey: PrivateConfig.S3.secretKey,
  region: PrivateConfig.S3.bucketLocation,
  s3BucketEndpoint: true,
  endpoint: `${PrivateConfig.S3.bucketId}.${PrivateConfig.S3.host}`,
  signatureVersion: 'v4',
  params: { Bucket: PrivateConfig.S3.bucketId },
})
