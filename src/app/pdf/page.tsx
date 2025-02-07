"use client"
import Link from "next/link";
/* import DownloadPDF from "../components/DownloadPDF"; */
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/DownloadPDF'),
  { ssr: false }
)

function PdFPage() {
    return ( 
        <div className="relative">
            <DynamicComponentWithNoSSR/>
            <div className="fixed z-10 bottom-4 right-8 bg-blue-500 p-2 px-6 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              <Link href={"/"}>
                Ir a generar Otro! 😎👌
              </Link>
            </div>
        </div>
     );
}

export default PdFPage;/*  */