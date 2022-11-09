'use client'
import { ThreeDots } from 'react-loader-spinner'
import { getHtmlTheme } from '@pt/dsfr/dsfrTheme'

const sizes = { sm: 20, md: 40, lg: 60 }

export const Spinner = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const theme = getHtmlTheme()

  const color = theme === 'dark' ? '#8585f6' : '#000091'

  return (
    <ThreeDots
      height={sizes[size]}
      width={sizes[size]}
      radius={sizes[size] / 5}
      color={color}
      ariaLabel="chargement"
      visible
    />
  )
}
