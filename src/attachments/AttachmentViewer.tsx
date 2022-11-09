import { useEffect, useState } from 'react'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css'
import { Spinner } from '@pt/ui/Spinner'
import axios from 'axios'
import { EcgUploadApiSuccessResponse } from '@pt/pages/api/file/upload'

export const AttachmentViewer = ({
  key,
  type,
  name,
}: {
  key: string
  type: string
  name: string
}) => {
  const [assetUrl, setAssetUrl] = useState<string | null>(null)

  useEffect(() => {
    axios
      .post<EcgUploadApiSuccessResponse>('/api/upload/get', {
        key,
      })
      .then((response) => response.data.url)
      .then(setAssetUrl)
  }, [key])

  if (!assetUrl) {
    return (
      <div>
        <Spinner />
      </div>
    )
  }

  // TODO download asset  and button to Open asset in new tab
  return (
    <div>
      <div>
        <div>{name}</div>
      </div>
    </div>
  )
}
