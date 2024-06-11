import React from 'react'
import { config } from '@/lib/config'

export default function Skills() {
  return (
    <>
      <h2 className="text-2xl font-bold mt-8">Skills</h2>

      <div className="border-l-2 px-2 mt-4">
        <h3 className="text-lg font-semibold mt-4">Backend</h3>
        <p className='font-light'>{config.skills.backend}</p>
      </div>

      <div className="border-l-2 px-2 mt-4">
        <h3 className="text-lg font-semibold mt-4">Frontend</h3>
        <p className='font-light'>{config.skills.frontend}</p>
      </div>

      <div className="border-l-2 px-2 mt-4">
        <h3 className="text-lg font-semibold mt-4">Database</h3>
        <p className='font-light'>{config.skills.database}</p>
      </div>

      <div className="border-l-2 px-2 mt-4">
        <h3 className="text-lg font-semibold mt-4">Design</h3>
        <p className='font-light'>{config.skills.design}</p>
      </div> 
    </>
  )
}
