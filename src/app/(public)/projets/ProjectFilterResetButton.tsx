import styles from './ProjectFilterResetButton.module.scss'

export const ProjectFilterResetButton = ({
  label,
  onClick,
}: {
  label: string
  onClick: () => void
}) => {
  return (
    <p
      className={`fr-link fr-link--sm fr-mt-8v ${styles.projectFilterResetButton}`}
      onClick={onClick}
      style={{
        cursor: 'pointer',
      }}
    >
      {label}
    </p>
  )
}
