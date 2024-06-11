import Link from 'next/link'
import { config } from '@/lib/config'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Projects - Nahuel Gomez",
  description: "All projects I've worked on"
}

export default function Projects() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold">
        All Projects
      </h2>

      {config.projects?.map((project, idx) => (
        <div className="border-l-2 border-neutral-600 px-2 mt-2" key={idx}>
          <Link href={project.link ?? "#"} className="hover:text-orange-500" target="_blank">
            {project.title}
          </Link>
          <p className="text-neutral-400">{project.description}</p>
        </div>
      ))}

      <div className="mt-2 text-right">
        <Link href="/" className="hover:text-orange-500 mt-2">
          Back to home
        </Link>
      </div>
    </section>
  )
}
