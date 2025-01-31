import { RESUME_DATA } from '@/data/resume-data'
import {
  Education,
  Header,
  ModeToggle,
  Projects,
  Skills,
  Summary,
  WorkExperience,
} from '@/components'

const ResumePage: React.FC = () => {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto pt-4 px-4 print:p-11 md:px-16 md:pt-16">
      <div className="sr-only">
        <h1>{RESUME_DATA.name}&apos;s Resume</h1>
      </div>

      <section
        className="mx-auto w-full max-w-3xl space-y-8 print:space-y-4"
        aria-label="Resume Content"
      >
        <Header />

        <div className="space-y-8 print:space-y-4">
          <Summary summary={RESUME_DATA.summary} />

          <Education education={RESUME_DATA.education} />

          <WorkExperience work={RESUME_DATA.work} />

          <Skills skills={RESUME_DATA.skills} />

          <Projects projects={RESUME_DATA.projects} />
        </div>
        <div className="py-4 font-mono text-center">
          © Wojciech Dolibóg {new Date().getFullYear()}
        </div>
      </section>
      <div className="fixed top-4 right-4">
        <ModeToggle />
      </div>
    </main>
  )
}

export { ResumePage }
