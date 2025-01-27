import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface SkillsProps {
  skills: readonly string[]
  className?: string
}

const Skills: React.FC<SkillsProps> = ({ skills, className }) => {
  return (
    <section className={cn('flex min-h-0 flex-col gap-y-3', className)}>
      <h2 className="text-xl font-bold">Skills</h2>
      <ul className={cn('flex list-none flex-wrap gap-1', className)}>
        {skills.map((skill) => (
          <li key={skill}>
            <Badge
              variant="outline"
              className="hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              {skill}
            </Badge>
          </li>
        ))}
      </ul>
    </section>
  )
}

export { Skills }
