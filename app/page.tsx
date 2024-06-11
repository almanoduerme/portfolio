import { Metadata } from 'next'
import Jobs from '@/components/jobs'
import Projects from '@/components/projects'
import Skills from '@/components/skills'

export const metadata: Metadata = {
  title: "Home - Nahuel Gomez",
  description: "Welcome to my personal website"
}

export default function Home() {
  return (
    <>
      <Jobs />
      <Projects />
      <Skills />
    </>
  )
}
