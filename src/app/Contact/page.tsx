import React from 'react'
import Image from 'next/image'
import profile from '../../../public/profile.jpg'
import whatsApp from '../../../public/wa-logo.svg'
import instagram from '../../../public/ig-logo.svg'
import github from '../../../public/github-logo.svg'
import linkedin from '../../../public/linkedin-logo.svg'

function Contact() {
  return (
    <div className='my-[50px]'>
      <div className="flex justify-center">
        <Image src={profile} alt="" className="rounded-full" width={290} height={290} />
      </div>

      <br /><br />

      <div className=' w-[250px] mx-auto font-bold text-lg'>
        <div className='flex gap-3'>
          <div>
            <Image src={whatsApp} alt='' width={30} height={30} />
          </div>
          <div>
            <p>+62 82242114642</p>
          </div>
        </div>

        <br />

        <div className='flex gap-3'>
          <div>
            <Image src={linkedin} alt='' width={30} height={30} />
          </div>
          <div>
            <p>Alwi Achmad Alatas</p>
          </div>
        </div>

        <br />

        <div className='flex gap-3'>
          <div>
            <Image src={instagram} alt='' width={30} height={30} />
          </div>
          <div>
            <p>@alwwi</p>
          </div>
        </div>

        <br />

        <div className='flex gap-3'>
          <div>
            <Image src={github} alt='' width={30} height={30} />
          </div>
          <div>
            <p>@alwwi</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
