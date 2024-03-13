'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import sertifikatAkademik from './data/sertifikatAkademik'

const Page = () => {

    return (
        <div className='my-20'>
            <div className='mt-10'>
                <div className='flex w-[290px] gap-4 text-lg mx-auto rounded-full'>

                    <Link href='/Achievements/akademik' className='px-4 bg-slate-400 py-1.5 rounded-full'>Akademik</Link>
                    <Link href='/Achievements/non-akademik' className='pr-4 py-1.5' >Non-Akademik</Link>

                </div>
            </div>

            <div className='w-6/12 mx-auto'>
                {sertifikatAkademik.map((sertifikat) => (
                    < React.Fragment key={sertifikat.id}>
                        <div className='mt-20'>
                            <div className='mb-2 text-lg text-center'>
                                <h3>{sertifikat.nama}</h3>
                            </div>
                            <div className=''>
                                <Image src={sertifikat.imagePath} alt={sertifikat.nama} width={680} height={200} />
                            </div>
                        </div>
                    </React.Fragment>

                ))}
            </div>
        </div>
    )
}

export default Page
