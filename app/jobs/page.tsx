import React from 'react'
import { config } from '@/lib/config'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Jobs - Nahuel Gomez",
  description: "Recent jobs I've worked on"
}

export default function Jobs() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold">
        Recent Jobs
      </h2>

      {config.jobs?.map((job, idx) => (
        <div className="border-l-2 border-neutral-600 px-2 mt-2" key={idx}>
          <p className="font-bold">{job.title}</p>
          <p className="text-neutral-400">{job.company}</p>
          <p className="text-neutral-400">{job.date}</p>
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
