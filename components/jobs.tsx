import React from 'react'
import { config } from '@/lib/config'

export default function Jobs() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold">
        Recent Jobs
      </h2>

      {config.jobs?.slice(0, 3).map((job, idx) => (
        <div className="border-l-2 border-neutral-600 px-2 mt-2" key={idx}>
          <p className="font-bold">{job.title}</p>
          <p className="text-neutral-400">{job.company}</p>
          <p className="text-neutral-400">{job.date}</p>
        </div>
      ))}

      <div className="mt-2">
        <a href="/jobs" className="hover:text-orange-500 mt-2">
          View all jobs
        </a>
      </div>
    </section>
  )
}
