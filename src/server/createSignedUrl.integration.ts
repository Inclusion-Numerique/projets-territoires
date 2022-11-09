import { resolve } from 'path'
import { execa } from 'execa'
import { PrivateConfig } from '@pt/config'
import {
  createSignedGetUrl,
  createSignedUploadUrl,
} from '@pt/server/createSignedUrl'

describe('createSignedUrl', () => {
  describe('createSignedGetUrl', () => {
    it('can createSignedUrl', async () => {
      const key = 'test/small-test-image.png'

      const { url } = await createSignedGetUrl({
        key,
      })

      expect(url).toBeString()
      expect(url).toStartWith('https://')
      expect(url).toInclude('test/small-test-image.png')
      expect(url).toInclude(PrivateConfig.S3.bucketId)
      expect(url).toInclude(key)

      // Try with system lib, should always work if url is correct
      const { stdout, exitCode } = await execa('curl', [url])

      expect(exitCode).toEqual(0)
      expect(stdout).not.toInclude('<Code>AccessDenied</Code>')
      expect(stdout).not.toInclude('Error')
    }, 30000)
  })

  describe('createSignedUploadUrl', () => {
    it('canCreateSignedUrl', async () => {
      const fileName = '2022-11-test.png'
      const type = 'image/png'
      const filePath = resolve(__dirname, '../../test/small-test-image.png')

      const { url, key } = await createSignedUploadUrl({
        directory: `test/${new Date().getTime()}`,
        name: fileName,
        type,
      })

      expect(key).toBeString()
      expect(key).toInclude(fileName)
      expect(url).toBeString()
      expect(url).toStartWith('https://')
      expect(url).toInclude(PrivateConfig.S3.bucketId)
      expect(url).toInclude(fileName)

      // Try with system lib, should always work if url is correct
      // Then js code for uploading is independent of this test
      const { stdout, exitCode } = await execa('curl', [
        '-X',
        'PUT',
        '-T',
        filePath,
        url,
      ])

      expect(exitCode).toEqual(0)
      expect(stdout).not.toInclude('<Code>AccessDenied</Code>')
      expect(stdout).not.toInclude('Error')
    }, 30000)
  })
})
