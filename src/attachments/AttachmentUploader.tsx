'use client'
import { FileError, FileRejection, useDropzone } from 'react-dropzone'
import { useCallback, useState } from 'react'
import axios from 'axios'
import { Spinner } from '@pt/ui/Spinner'
import { EcgUploadApiSuccessResponse } from '@pt/pages/api/file/upload'
import styled from 'styled-components'

type UploadingFileInfo = {
  file: File
  status: 'pending' | 'uploaded' | 'error'
  key?: string
}

const UploadedFileRow = styled.li`
  display: flex;
  align-items: center;
`

const AttachmentUploader = ({
  onUploaded,
  reference,
}: {
  reference: string
  onUploaded: (files: UploadingFileInfo[]) => void
}) => {
  const [files, setFiles] = useState<UploadingFileInfo[]>([])

  const onDrop = useCallback(
    async (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      console.log('DROPPED', { acceptedFiles, fileRejections })

      setFiles(acceptedFiles.map((file) => ({ file, status: 'pending' })))

      const uploadedFiles = await Promise.all(
        acceptedFiles.map(async (file): Promise<UploadingFileInfo> => {
          // TODO Set file as uploading
          const urlResult = await axios.post<EcgUploadApiSuccessResponse>(
            '/api/file/upload',
            {
              name: file.name,
              type: file.type,
              directory: reference,
            },
          )

          await axios.put(urlResult.data.url, file, {
            headers: {
              'Content-Type': file.type,
              'Access-Control-Allow-Origin': '*',
            },
          })

          return { key: urlResult.data.key, status: 'uploaded', file }
        }),
      )

      setFiles(uploadedFiles)
      onUploaded(uploadedFiles)
    },
    [onUploaded, setFiles, reference],
  )

  const validator = (file: File): FileError | FileError[] | null => {
    console.log('VALIDATING', file)
    return null
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,

    // accept: [], TODO what is this ?
    minSize: 100,
    maxSize: 40_000_000, // 40 M
    maxFiles: 10,
    preventDropOnDocument: true,
    disabled: false, // TODO When uploading?
    onError: (err: Error) => {
      // TODO SENTRY
      console.error(err)
    },
    validator,
  })

  return (
    <>
      <div
        className="fr-card fr-background-contrast--grey"
        style={{ height: 'auto', borderRadius: '4px 4px 0 0' }}
      >
        <div
          className="fr-p-8v"
          style={{ cursor: 'pointer' }}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <p className="" style={{ pointerEvents: 'none' }}>
            Vous pouvez <strong>glisser-déposer</strong> des pièces jointes ici,{' '}
            <strong>ou cliquer</strong> pour selectionner des fichiers.
          </p>
        </div>
      </div>
      <ul className="fr-mt-4v fr-raw-list">
        {files.map((file, index) => (
          <UploadedFileRow key={file.key ?? index} className="fr-mt-2v">
            {file.status === 'pending' ? (
              <Spinner size="sm" />
            ) : (
              <span className="fr-icon-checkbox-circle-fill fr-text-label--blue-france" />
            )}
            <span className="fr-ml-4v fr-text--sm fr-m-0">
              {file.file.name}
            </span>
          </UploadedFileRow>
        ))}
      </ul>
    </>
  )
}

export default AttachmentUploader
