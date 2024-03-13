import React from 'react'
import Links from './Links'
import Link from 'next/link'

function Navbar() {
  return (
    <div className=' m-[auto] px-[100px] w-[1290] flex flex-col'>

    <div className='font-poppins w-full flex justify-between items-center py-4'>
        <div className='font-bold text-5xl'>
          <Link href='/'>My Website</Link>
        </div>
        <div className='font-semibold text-[25px]'>
          <Links />
        </div>
      </div>
    </div>
  )
}

export default Navbar