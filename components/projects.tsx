import React from 'react'
import { config } from '@/lib/config'
import Link from 'next/link'

export default function Projects() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold">
        Recent Personal Projects
      </h2>

      {config.projects?.slice(0, 3).map((project, idx) => (
        <div className="border-l-2 border-neutral-600 px-2 mt-2" key={idx}>
          <Link href={project.link ?? "#"} className="hover:text-orange-500" target="_blank">
            {project.title}
          </Link>
          <p className="text-neutral-400">{project.description}</p>
        </div>
      ))}

      <div className="mt-2">
        <Link href="/projects" className="hover:text-orange-500 mt-2">
          View all projects
        </Link>
      </div>
    </section>
  )
}
