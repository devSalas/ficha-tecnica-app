"use client";
import { FormEvent } from "react";
import { useTechnicalSheetStore } from "../store/technicalSheet";
import { useRouter } from "next/navigation";
import Link from "next/link";

function BuildPage() {
   const changeProperties = useTechnicalSheetStore((state) => state.changeProperties);
   const router = useRouter()
   function HandleSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const properties = Object.fromEntries(formData.entries());

      // Asegurar que los saltos de línea se reflejen en Zustand
      ["conclusion", "recomendation", "test", "observation"].forEach((key) => {
         if (properties[key]) {
            properties[key] = (properties[key] as string).replace(/\r?\n/g, "\n"); // Convierte los saltos en \n
         }
      });

      changeProperties(properties);
      router.push("/pdf")
   }

   return (
      <div className="min-h-screen w-full p-12 ">
         <div className="max-w-7xl m-auto relative flex flex-col   gap-4">
            <div className="md:absolute ">
               <Link href={"/"} className="   text-white border-white border-[1px] px-4 py-1 rounded-md transition duration-300 ease-in-out  hover:scale-105 hover:shadow-lg">👈 Ir Atras</Link>
            </div>
            <h2 className="flex-1 text-3xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ">Llena el formulario</h2>
            <form onSubmit={HandleSubmit} className=" grid grid-cols-1  md:grid-cols-2 gap-4 text-white">
               <input type="text" name="computerType" placeholder="Tipo de computadora" className="border border-gray-600  p-2 rounded-md bg-[#121212]" />
               <input type="text" name="processor" placeholder="Procesador" className="border border-gray-600 p-2 w-full h-full rounded-md bg-[#121212]" />
               <input type="text" name="memory" placeholder="Memoria RAM" className="border border-gray-600 p-2 w-full rounded-md bg-[#121212]" />
               <input type="text" name="storage" placeholder="Almacenamiento" className="border border-gray-600 p-2 w-full rounded-md bg-[#121212]" />
               <input type="text" name="operatingSystem" placeholder="Sistema operativo" className="border border-gray-600 p-2 w-full rounded-md bg-[#121212]" />
               <input type="text" name="officeProgram" placeholder="Programa de oficina" className="border border-gray-600 p-2 w-full rounded-md bg-[#121212]" />
               <input type="text" name="user" placeholder="Usuario" className="border border-gray-600 p-2 w-full rounded-md bg-[#121212]" />
               <input type="text" name="customer" placeholder="Cliente" className="border border-gray-600 p-2 w-full rounded-md bg-[#121212]" />
               <input type="text" name="city" placeholder="Ciudad" className="border border-gray-600 p-2 w-full rounded-md bg-[#121212]" />
               <input type="text" name="date" placeholder="Fecha" className="border border-gray-600 p-2 w-full rounded-md bg-[#121212]" />
               <input type="text" name="problem" placeholder="Problema" className="border border-gray-600 p-2 w-full rounded-md bg-[#121212]" />

               {/* Áreas de texto que permiten saltos de línea y guiones */}
               <textarea name="test" placeholder="Pruebas realizadas" className="border border-gray-600 p-2 w-full h-24 rounded-md bg-[#121212]" ></textarea>
               <textarea name="conclusion" placeholder="Conclusión" className="border border-gray-600 p-2 w-full h-24 rounded-md bg-[#121212]"></textarea>
               <textarea name="recomendation" placeholder="Recomendaciones" className="border border-gray-600 p-2 w-full h-24 rounded-md bg-[#121212]"></textarea>
               <textarea name="observation" placeholder="Observaciones" className="border border-gray-600 p-2 w-full h-24 rounded-md bg-[#121212]"></textarea>

               <button type="submit" className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 md:col-span-2 py-4 text-lg font-bold rounded-lg text-gray-300 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                  Generar Ficha Tecnica
               </button>
            </form>
         </div>
      </div>
   );
}

export default BuildPage;
