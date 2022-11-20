'use client'

import { LegacyProject } from '@prisma/client'
import { animated, config, useTrail } from '@react-spring/web'
import { LegacyProjectCard } from '@pt/app/(public)/projets/LegacyProjectCard'

const AnimatedLegacyProjectCard = animated(LegacyProjectCard)

export const ProjectCards = ({ projects }: { projects: LegacyProject[] }) => {
  const [trails] = useTrail(
    projects.length,
    () => ({
      from: { opacity: 0, translateY: -24, scale: 0.67 },
      to: { opacity: 1, translateY: 0, scale: 1 },
      config: config.default,
      reset: true,
    }),
    [projects],
  )

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
