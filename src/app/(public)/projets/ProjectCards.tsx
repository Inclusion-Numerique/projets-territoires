'use client'

import { LegacyProject } from '@prisma/client'
import { animated, useSprings } from '@react-spring/web'
import { LegacyProjectCard } from '@pt/app/(public)/projets/LegacyProjectCard'

const AnimatedLegacyProjectCard = animated(LegacyProjectCard)

export const ProjectCards = ({ projects }: { projects: LegacyProject[] }) => {
  const [trails, api] = useSprings(
    projects.length,
    () => ({
      from: { opacity: 0.5 },
      to: { opacity: 1 },
      reset: true,
    }),
    [projects],
  )
  console.log('PROJECT CARDS REDERENREDERING')
  //
  // useEffect(() => {
  //   console.log('STARTING API EFFECT')
  //   api.start()
  // }, [projects, api])

  return (
    <>
      {trails.map((props, i) => (
        <AnimatedLegacyProjectCard
          key={projects[i].id}
          style={props}
          project={projects[i]}
        />
      ))}
    </>
  )
}
