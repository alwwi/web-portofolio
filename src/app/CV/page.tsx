import React from 'react'

function CV() {
  return (
    <div className='min-h-screen bg-white mb-20 text-black px-24 py-[100px] mx-[200px]'>
      <div className='font-cambay text-center text-[50px] font-bold'>
        <h1 className=''>Alwi Achmad Alatas</h1>
      </div>
      <div className='text-center font-noto-serif text-[21px]'>
        <p>Yogyakarta City, Special Region of Yogyakarta, Indonesia | 082242114642 | alwialatas04@gmail.com</p>
        <p>Mahasiswa Universitas Islam Indonesia program studi Informatika. Aktif berorganisasi serta memiliki minat besar dibidang pengembangan aplikasi berbasis android dan web.</p>
      </div>

      <br />  <br />

      <div>
        <div className='font-noto-serif text-[35px] font-bold w-full border-b-2 border-black'>
          <h2>Pendidikan</h2>
        </div>
        <br />
        <div className='font-noto-serif text-[27px] font-bold'>
          <h2>Universitas Islam Indonesia</h2>
          <div className='text-[22px] font-normal'>
            <p>Strata 1 , Informatika, IPK 3,1 • 2021- Sekarang (Aktif)</p>
            <ul className='list-disc ml-5'>
              <li> Menjadi koordinator seluruh mahasiswa angkatan</li>
            </ul>
          </div>
        </div>

        <br /><br />

        <div className='font-noto-serif text-[27px] font-bold'>
          <h2>MAN 2 Yogyakarta</h2>
          <div className='text-[22px] font-normal'>
            <p>Jurusan IPA • 2018 - 2021</p>
            <ul className='list-disc ml-5'>
              <li>Menjadi Ketua OSIS - 2019/2020</li>
            </ul>
          </div>
        </div>
      </div>

      <br /><br />

      <div>
        <div className='font-noto-serif text-[35px] font-bold w-full border-b-2 border-black'>
          <h2>Pengalaman Organisasi</h2>
        </div>
        <br />
        <div>
          <ul className='list-disc font-normal ml-5'>
            <li>KetuaSteering Committee Pekan Olahraga, Seni, dan Edukasi MahasiswaInformatika Universitas Islam Indonesia (PORSEMATIK UII) - 2022</li>
            <li>Staff wali jamaah Pesona Taaruf Universitas Islam Indonesia (PESTA UII) - 2023</li>
            <li>Ketua Organizing Committee Informatics Unity Within Taaruf (INPUT) - 2023</li>
          </ul>
        </div>
      </div>

      <br /><br />

      <div>
        <div className='font-noto-serif text-[35px] font-bold w-full border-b-2 border-black'>
          <h2>Kemampuan</h2>
        </div>
        <br />
        <div>
          <p>
            <span className='font-bold'>Soft Skills</span> : Leadership, Teamwork, ProblemSolving, dan ManajemenWaktu.
          </p>
          <p>
            <span className='font-bold'>Skill pemrograman</span> :  Kotlin, Java Script,React.js, Bootstrap.
          </p>
          <p>
            <span className='font-bold'>Bahasa</span> : Indonesia (Fasih), English(Pemula).
          </p>
        </div>
      </div>

    </div>
  )
}

export default CV
