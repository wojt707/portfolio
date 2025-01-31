import { RESUME_DATA } from '@/data/resume-data'
import { cn } from '@/lib/utils'
import { GlobeIcon } from 'lucide-react'

type SingleEducation = (typeof RESUME_DATA)['education'][number]

interface EducationPeriodProps {
  start: SingleEducation['start']
  monthStart: SingleEducation['monthStart']
  end?: SingleEducation['end']
  monthEnd?: SingleEducation['monthEnd']
}

const EducationPeriod: React.FC<EducationPeriodProps> = ({
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

interface EducationItemProps {
  education: SingleEducation
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
  const {
    school,
    location,
    locationLink,
    link,
    start,
    monthStart,
    end,
    monthEnd,
    degree,
  } = education

  return (
    <div className="py-1">
      <div className="flex items-center justify-between gap-x-4 text-base">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold leading-none">
            <a
              className=" hover:underline"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {school}
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
          </div>
        </div>
        <EducationPeriod
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
      </div>
      <div className="mt-2 text-pretty font-mono text-sm text-foreground/80">
        {degree}
      </div>
    </div>
  )
}

interface EducationListProps {
  education: readonly SingleEducation[]
}

const Education: React.FC<EducationListProps> = ({ education }) => {
  return (
    <section className={cn('flex min-h-0 flex-col gap-y-3')}>
      <h2 className="text-xl font-bold">Education</h2>
      <div className="space-y-4" role="feed">
        {education.map((item) => (
          <article key={`${item.school}-${item.start}`} role="article">
            <EducationItem education={item} />
          </article>
        ))}
      </div>
    </section>
  )
}
export { Education }
