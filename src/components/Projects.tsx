import { RESUME_DATA } from '@/data/resume-data'
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui'
import { cn } from '@/lib/utils'

type Tags = readonly string[]

interface ProjectLinkProps {
  title: string
  link?: string
}

const ProjectLink: React.FC<ProjectLinkProps> = ({ title, link }) => {
  if (!link) {
    return <span>{title}</span>
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 hover:underline"
    >
      {title}
      <span className="size-1 rounded-full bg-green-500" />
    </a>
  )
}

interface ProjectTagsProps {
  tags: Tags
}

const ProjectTags: React.FC<ProjectTagsProps> = ({ tags }) => {
  if (tags.length === 0) return null

  return (
    <ul className="flex list-none flex-wrap gap-1">
      {tags.map((tag) => (
        <li key={tag}>
          <Badge className="px-1 py-0 text-[10px]" variant="secondary">
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  tags: Tags
  link?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  link,
}) => {
  return (
    <Card
      className="flex h-full flex-col overflow-hidden border"
      role="article"
    >
      <CardHeader>
        <CardTitle className="text-base">
          <ProjectLink title={title} link={link} />
        </CardTitle>
        <CardDescription className="text-pretty font-mono text-xs">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <ProjectTags tags={tags} />
      </CardContent>
    </Card>
  )
}

interface ProjectsProps {
  projects: (typeof RESUME_DATA)['projects']
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className={cn('flex min-h-0 flex-col gap-y-3 scroll-mb-16')}>
      <h2 className="text-xl font-bold">Projects</h2>
      <div
        className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"
        role="feed"
      >
        {projects.map((project) => (
          <article key={project.title} className="h-full">
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.techStack}
              link={'link' in project ? project.link.href : undefined}
            />
          </article>
        ))}
      </div>
    </section>
  )
}

export { Projects }
