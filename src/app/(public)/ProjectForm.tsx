'use client'
import { Controller, useForm } from 'react-hook-form'
import { trpc } from '@pt/trpc'
import { zodResolver } from '@hookform/resolvers/zod/dist/zod'
import { withTrpc } from '@pt/withTrpc'
import {
  domainOptions,
  ProjectData,
  ProjectDataValidation,
} from '@pt/project/project'
import { InputFormField } from '@pt/form/InputFormField'
import { OnDropCallback } from '@pt/form/UploadDropzone'
import { useMemo, useState } from 'react'
import axios, { AxiosError } from 'axios'
import AttachmentUploader from '@pt/attachments/AttachmentUploader'
import { generateReference } from '@pt/project/generateReference'
import { RadioFormField } from '@pt/form/RadioFormField'
import { CommunitySearchFormField } from '@pt/form/CommunitySearchFormField'
import Link from 'next/link'

type FormUploadedFile =
  | {
      file: File
      status: 'uploading'
    }
  | { file: File; status: 'uploaded'; attachmentId: number }
  | { file: File; status: 'error'; error: string }

const ProjectForm = () => {
  const createProject = trpc.createProject.useMutation()
  // Unique client side reference for this forms
  const reference = useMemo(generateReference, [])

  const form = useForm<ProjectData>({
    resolver: zodResolver(ProjectDataValidation),
    reValidateMode: 'onChange',
    mode: 'all',
    defaultValues: {
      reference,
      attachments: [],
    },
  })
  const { handleSubmit, control } = form

  const onSubmit = async (data: ProjectData) => {
    try {
      const result = await createProject.mutateAsync(data)
      // TODO display success message and button to reset the page
      console.log('DONE', result)
    } catch (err) {
      // Error message will be in hook result
    }
  }

  const [uploadedFiles, setUploadedFiles] = useState<FormUploadedFile[]>([])
  const filesAreUploading = !!uploadedFiles.find(
    (file) => file.status === 'uploading',
  )
  const filesAreInError = !!uploadedFiles.find(
    (file) => file.status === 'error',
  )

  const onDrop: OnDropCallback = async (
    acceptedFiles: File[],
    fileRejections,
    event,
  ) => {
    // TODO File rejection

    console.log('ACCEPTED FILES', acceptedFiles)
    setUploadedFiles(
      acceptedFiles.map((file) => ({ file, status: 'uploading' })),
    )

    const result: FormUploadedFile[] = await Promise.all(
      acceptedFiles.map(async (file, index): Promise<FormUploadedFile> => {
        const uploadData = new FormData()
        uploadData.append('file', file)

        try {
          const uploaded = await axios.post<{ attachments: number[] }>(
            `/api/upload`,
            uploadData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
              onUploadProgress: (progressEvent) =>
                console.log('upload progress', progressEvent.loaded),
            },
          )

          return {
            file,
            status: 'uploaded',
            attachmentId: uploaded.data.attachments[0],
          }
        } catch (err) {
          if (!(err instanceof AxiosError)) {
            throw new Error('Unexpected error')
          }
          return {
            file,
            status: 'error',
            error: err.message,
          }
        }
      }),
    )

    setUploadedFiles(result)
  }

  const fieldsDisabled = createProject.isLoading

  return (
    <div className="fr-card" style={{ width: '100%' }}>
      <div className="fr-card__body">
        {createProject.isSuccess || true ? (
          <div className="fr-card__content">
            <h2>Merci pour votre participation !</h2>
            <p className="fr-text--lead fr-mb-3w">
              Nous avons bien enregistré votre projet.
            </p>
            <Link href="/" className="fr-btn fr-btn--secondary">
              Retour à l&apos;accueil
            </Link>
          </div>
        ) : (
          <div className="fr-card__content">
            <h2>Vous êtes maire ?</h2>
            <p className="fr-text--lead fr-mb-3w">
              Ce formulaire vous permet de renseigner les projets de votre
              territoire, en quelques clics.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CommunitySearchFormField
                label="Collectivité"
                disabled={fieldsDisabled}
                control={control}
                path="community"
              />
              <InputFormField
                label="Nom et prénom du point de contact"
                disabled={fieldsDisabled}
                control={control}
                path="name"
                type="text"
              />
              <InputFormField
                label="Qualité du point de contact"
                disabled={fieldsDisabled}
                control={control}
                path="quality"
                type="text"
              />
              <InputFormField
                label="Email"
                disabled={fieldsDisabled}
                control={control}
                path="email"
                type="email"
              />
              <InputFormField
                label="Numéro de téléphone"
                disabled={fieldsDisabled}
                control={control}
                path="phone"
                type="phone"
              />
              <RadioFormField
                label="Votre idée concerne le domaine suivant"
                disabled={fieldsDisabled}
                options={domainOptions}
                control={control}
                path="domain"
              />
              <InputFormField
                label="Nom de votre solution"
                hint="Maximum 100 caractères"
                disabled={fieldsDisabled}
                control={control}
                path="solution"
                type="textarea"
              />
              <InputFormField
                label="Pouvez-vous décrire votre projet en quelques lignes ?"
                hint="Maximum 2000 caractères"
                disabled={fieldsDisabled}
                control={control}
                path="description"
                type="textarea"
              />
              <InputFormField
                label="Quelles ont été les dates clefs ?"
                hint="Maximum 500 caractères"
                disabled={fieldsDisabled}
                control={control}
                path="dates"
                type="textarea"
              />
              <InputFormField
                label="Qui sont les partenaires du projet ?"
                hint="Maximum 500 caractères"
                disabled={fieldsDisabled}
                control={control}
                path="partners"
                type="textarea"
              />
              <InputFormField
                label="Pouvez-vous décrire les aspects techniques du projet ?"
                hint="Maximum 100 caractères"
                disabled={fieldsDisabled}
                control={control}
                path="tech"
                type="textarea"
              />
              <p>Souhaitez-vous ajouter des pièces jointes ?</p>
              <Controller
                control={control}
                name="attachments"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <AttachmentUploader
                    reference={reference}
                    onUploaded={(files) => {
                      onChange(
                        files.map(({ file, key }) => ({
                          type: file.type,
                          name: file.name,
                          key,
                        })),
                      )
                    }}
                  />
                )}
              />

              {createProject.isError ? (
                <p className="fr-error-text">
                  {createProject.error?.message ??
                    'Une erreur est survenue, merci de réessayer.'}
                </p>
              ) : null}

              <div className="fr-btns-group fr-btns-group--icon-left">
                <button
                  className="fr-btn fr-mt-8v fr-icon-checkbox-circle-line"
                  type="submit"
                  disabled={createProject.isLoading}
                >
                  Enregistrer le projet
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default withTrpc(ProjectForm)
