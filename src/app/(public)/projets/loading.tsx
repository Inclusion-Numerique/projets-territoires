import { Spinner } from '@pt/ui/Spinner'

const ProjectsLoading = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        minHeight: 600,
        flex: 1,
      }}
    >
      <Spinner />
    </div>
  )
}

export default ProjectsLoading
