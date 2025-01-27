import { RESUME_DATA } from '@/data/resume-data'
import { cn } from '@/lib/utils'

interface AboutProps {
  summary: typeof RESUME_DATA.summary
  className?: string
}

const Summary: React.FC<AboutProps> = ({ summary, className }) => {
  return (
    <section className={cn('flex min-h-0 flex-col gap-y-3', className)}>
      <h2 className="text-xl font-bold">About</h2>
      <div className="text-pretty font-mono text-sm text-foreground/80">
        {summary}
      </div>
    </section>
  )
}
export { Summary }
