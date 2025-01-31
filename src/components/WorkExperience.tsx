import { Badge } from '@/components/ui'
import { RESUME_DATA } from '@/data/resume-data'
import { cn } from '@/lib/utils'
import { GlobeIcon } from 'lucide-react'

type SingleWorkExperience = (typeof RESUME_DATA)['work'][number]
type WorkBadges = readonly string[]

interface BadgeListProps {
  className?: string
  badges: WorkBadges
}

const BadgeList: React.FC<BadgeListProps> = ({ className, badges }) => {
  if (badges.length === 0) return null

  return (
    <ul className={cn('flex flex-wrap list-none gap-1', className)}>
      {badges.map((badge) => (
        <li key={badge}>
          <Badge
            variant="secondary"
            className="align-middle text-xs hover:bg-primary hover:text-primary-foreground hover:border-primary"
          >
            {badge}
          </Badge>
        </li>
      ))}
    </ul>
  )
}

interface WorkPeriodProps {
  start: SingleWorkExperience['start']
  monthStart: SingleWorkExperience['monthStart']
  end?: SingleWorkExperience['end']
  monthEnd?: SingleWorkExperience['monthEnd']
}

const WorkPeriod: React.FC<WorkPeriodProps> = ({
  start,
  monthStart,
  end,
  monthEnd,
}) => {
  return (
    <div className="text-nowrap text-sm tabular-nums text-gray-500">
      {monthStart} {start} -{' '}
      {monthEnd && end ? `${monthEnd} ${end}` : 'Present'}
    </div>
  )
}

interface WorkExperienceItemProps {
  work: SingleWorkExperience
}

function WorkExperienceItem({ work }: WorkExperienceItemProps) {
  const {
    company,
    location,
    locationLink,
    link,
    type,
    badges,
    title,
    start,
    monthStart,
    end,
    monthEnd,
    description,
  } = work

  return (
    <div className="py-1">
      <div className="flex items-center justify-between gap-x-4 text-base">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold leading-none">
            <a
              className="text-nowrap hover:underline"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {company}
            </a>
          </h3>
          <div className="max-sm:hidden flex gap-x-4 items-center text-pretty font-mono text-xs text-gray-500">
            <a
              className="flex gap-x-1.5 leading-none hover:underline"
              href={locationLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GlobeIcon
                className="min-w-3 min-h-3 size-3"
                aria-hidden="true"
              />
              {location}
            </a>
            <Badge
              variant="secondary"
              className="text-nowrap align-middle text-xs hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              {type}
            </Badge>
          </div>
        </div>
        <WorkPeriod
          start={start}
          monthStart={monthStart}
          end={end}
          monthEnd={monthEnd}
        />
      </div>
      <div className="sm:hidden mt-1 flex gap-x-4 items-center text-pretty font-mono text-xs text-gray-500">
        <a
          className="flex gap-x-1.5 leading-none hover:underline"
          href={locationLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GlobeIcon className="min-w-3 min-h-3 size-3" aria-hidden="true" />
          {location}
        </a>
        <Badge
          variant="secondary"
          className="text-nowrap align-middle text-xs hover:bg-primary hover:text-primary-foreground hover:border-primary"
        >
          {type}
        </Badge>
      </div>
      <h4 className="mt-1 font-mono text-sm font-semibold leading-none">
        {title}
      </h4>

      <div className="mt-2 font-mono text-xs text-foreground/80 text-pretty">
        {description}
      </div>
      <div className="mt-2">
        <BadgeList className="-mx-2" badges={badges} />
      </div>
    </div>
  )
}

interface WorkExperienceProps {
  work: (typeof RESUME_DATA)['work']
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ work }) => {
  return (
    <section className={cn('flex min-h-0 flex-col gap-y-3')}>
      <h2 className="text-xl font-bold">Work Experience</h2>
      <div className="space-y-4" role="feed">
        {work.map((item) => (
          <article key={`${item.company}-${item.start}`} role="article">
            <WorkExperienceItem work={item} />
          </article>
        ))}
      </div>
    </section>
  )
}
export { WorkExperience }
