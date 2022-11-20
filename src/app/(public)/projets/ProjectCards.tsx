'use client'

import { LegacyProject } from '@prisma/client'
import { animated, config, useTrail } from '@react-spring/web'
import { LegacyProjectCard } from '@pt/app/(public)/projets/LegacyProjectCard'
import Link from 'next/link'

const AnimatedLegacyProjectCard = animated(LegacyProjectCard)

const animationTo = { opacity: 1, translateY: 0, scale: 1 }
const animationFrom =
  // Trouble with next env dev and spring not fireing on render
  process.env.NODE_ENV === 'development'
    ? animationTo
    : { opacity: 0, translateY: -24, scale: 0.67 }

export const ProjectCards = ({ projects }: { projects: LegacyProject[] }) => {
  const [trails] = useTrail(
    projects.length + 1,
    () => ({
      from: animationFrom,
      to: animationTo,
      config: config.default,
      reset: true,
    }),
    [projects],
  )

  return (
    <>
      {trails.map((props, i) =>
        i < trails.length - 1 ? (
          <AnimatedLegacyProjectCard
            key={projects[i].id}
            style={props}
            project={projects[i]}
          />
        ) : (
          <li key="last" className={`${i > 0 ? 'fr-mt-8v' : ''}`} {...props}>
            <div
              className={`fr-p-4v`}
              style={{
                textAlign: 'center',
                width: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 0 0 1px var(--border-default-grey)',
              }}
            >
              <h6 style={{ width: '100%' }}>
                Vous êtes maire ou président d&apos;intercommunalité ?
              </h6>
              <Link
                className={`fr-btn`}
                href="/projet"
                style={{ textAlign: 'center' }}
              >
                Partagez vos solutions&nbsp;!
              </Link>
            </div>
          </li>
        ),
      )}
    </>
  )
}
