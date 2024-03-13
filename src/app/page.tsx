import Image from "next/image";
import profile from "../../public/profile.jpg";
import react from "../../public/react-logo.svg";
import reactBootstrap from "../../public/react-bootstrap-logo.svg";
import bootstrap from "../../public/bootstrap-logo.svg";

export default function Home() {
  return (
    <div className=" m-[auto] px-[100px] w-[1290] flex flex-col">
    <div className="font-poppins">
      <div className="grid grid-cols-2 gap-6 my-129">
        <div className="py-12">
          <h1 className="text-4xl font-semibold ">Hello Im Alwi</h1>
          <p className="text-lg text-justify py-4">Ini merupakan website yang berisi tentang diri saya.
            Disini anda akan melihat beberapa portofolio yang sudah saya kerjakan dan kemampuan yang saya miliki.
            Saya bergerak di bidang informatika dan untuk saat ini, saya merupakan seorang junior frontend web developer.
          </p>
          <button className="outline rounded-2xl p-2 px-4 mt-9 font-semibold">
            Cek Portofolio
          </button>
        </div>

        <div className="flex justify-center">
          <Image src={profile} alt="" className="rounded-full" width={410} height={410} />
        </div>
      </div>

      <div className="mb-129">
        <div className="text-center">
          <h2 className="text-4xl font-semibold">Skills</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-4">
          <div className=" flex justify-end">
            <Image src={react} width={281} height={140} alt="" />
            </div>
          <div className="flex justify-start">
            <Image src={reactBootstrap} width={381} height={140} alt="" />
            </div>
          <div className="col-span-2 flex justify-center">
          <Image src={bootstrap} width={281} height={140} alt="" />
            </div>
        </div>
      </div>

      <div className=" mb-129">
        <div className="text-center">
          <h2 className="text-4xl font-semibold">About Me</h2>
        </div>
        <div className="font-medium text-justify text-lg">
          <p className="text-justify py-4">
            Perkenalkan saya Alwi Achmad Alatas, mahasiswa informatika di Universitas Islam Indonesia. Saat ini saya sedang menempuh smester 6 dalam perkuliahaan dengan IPK sementara 3,1.  Kemampuan yang sedang saya miliki saat ini adalah sebagai frontend web developer. sebagai seorang web developer saya sudah memiliki pengalam dalam menggunakan beberapa framework seperti React.js dan Bootstrap.
          </p>

          <br />

          <p>
            Saat ini besar keinginan saya untuk mencari lowongan magang untuk menambah pengalaman saya sebagai seorang frontend developer. Karena bagi saya pengalaman dalam dunia kerja merupakan hal yang cukup penting untuk kedepannya.
          </p>
        </div>
      </div>

    </div>
    </div>
  );
}
