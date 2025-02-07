import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen w-full p-[20px] mb-[50px] sm:px-[100px] sm:py-[20px] flex flex-col">
      <div className="flex  justify-between w-full ">
        <div className="font-bold text-xl text-white">
          Sunetya PDF
        </div>

        <Link href={"/build"} className="bg-blue-500 p-2 px-6 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white  transition duration-300 ease-in-out  hover:scale-105 hover:shadow-lg">
          Comenzar
        </Link>

      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center grow gap-16 lg:gap-32">

        <h1 className=" font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-6xl mt-[50px] text-center sm:text-start sm:text-[120px] ">Genera  Tu<br /> Informe Tecnico</h1>
        <div className="m-auto">
         {/*  <img src="/informe-tecnico.png" alt="" className="h-[500px] mr-[100px] shadow-lg shadow-blue-500/50 rounded-sm" /> */}
         <Image src={"/informe-tecnico.png"} width={300} height={500} alt="imagen de ficha tecnica" className="md:mr-[100px] shadow-lg shadow-blue-500/50 rounded-sm m-auto"/>
        </div>
      </div>

    </div>
  );
}
