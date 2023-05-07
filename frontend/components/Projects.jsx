import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='w-full lg:h-full p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>

        <p className='uppercase text-lg font-bold tracking-widest text-[#316523]'>Proyectos</p>
        <h2 className='py-4'>Mis Proyectos</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>

          <Link href='/#project'>
            <div className='p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gray-300'>
              <div className='grid grid-cols-1 gap-4 justify-center items-center text-center'>
                <h3 className="uppercase text-black text-sm pt-4">CONSERVACIÓN Y VALORACIÓN DE MATERIALES ÉLITE DE LA DIVERSIDAD DE QUINUA (CHENOPODIUM QUINOA W.) EN ZONAS PRODUCTORAS DE AYACUCHO, CUSCO, JUNIN Y PUNO COMO LATERNATIVA AL CAMBIO CLIMÁTICO Y SU SEGURIDAD ALIMENTARIA</h3>
                <p className='text-green-700 pt-0'> <strong>Enero 2012</strong></p>
              </div>
            </div>
          </Link>

          <Link href='/#project'>
            <div className='p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gray-300'>
              <div className='grid grid-cols-1 gap-4 items-stretch justify-center py-12 text-center'>
                <h3 className="uppercase text-black text-sm">DESARROLLO DE TECNOLOGIAS EN CEREALES Y GRANOS ANDINOS</h3>
                <p className='text-green-700 pt-0'> <strong>Febrero 2008</strong></p>
              </div>
            </div>
          </Link>

          <Link href='/#project'>
            <div className='p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gray-300'>
              <div className='grid grid-cols-1 gap-4 items-stretch justify-center py-4 text-center'>
                <h3 className="uppercase text-black text-sm">MEJORAMIENTO DE LA PRODUCTIVIDAD Y EL VALOR DE LA QUINUA MEDIANTE LA MECANIZACION Y EVALUACION DE LAS PROPIEDADES FUNCIONALES</h3>
                <p className='text-green-700 pt-0'> <strong>Julio 2012</strong></p>
              </div>
            </div>
          </Link>

          <Link href='/#project'>
            <div className='p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gray-300'>
              <div className='grid grid-cols-1 gap-4 justify-center items-center text-center'>
                <h3 className="uppercase text-black text-sm">IMPLEMENTACIÓN DE LA BASE GENÉTICA Y PROCESOS DE DESARROLLO TECNOLÓGICO ORIENTADA A LA GENERACIÓN DE VARIEDADES DEL PROGRAMA DE MEJORAMIENTO GENÉTICO DEL CULTIVO DE TRIGO DEL INIA</h3>
                <p className='text-green-700 pt-0'> <strong>Agosto 2018</strong></p>
              </div>
            </div>
          </Link>

          <Link href='/#project'>
            <div className='p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gray-300'>
              <div className='grid grid-cols-1 gap-4 items-stretch justify-center py-4 text-center'>
                <h3 className="uppercase text-black text-sm">Diseño de metodologías de capacitación participativa en el cultivo de quinua en el departamento del cusco</h3>
                <p className='text-green-700 pt-0'> <strong>Abril 2016</strong></p>
              </div>
            </div>
          </Link>

          <Link href='/#project'>
            <div className='p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gray-300 '>
              <div className='grid grid-cols-1 gap-4 justify-center items-center text-center'>
                <h3 className="uppercase text-black text-sm">Estudio de la variabilidad genética de Peronospora farinosa f.sp. chenopodii (Fr.) que ocasiona el mildiu en el cultivo de quinua (Chenopodium quinua Willd) y búsqueda de accesiones diferenciales</h3>
                <p className='text-green-700 pt-0'> <strong>Abril 2016</strong></p>
              </div>
            </div>
          </Link>

          <Link href='/#project'>
            <div className='p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gray-300'>
              <div className='grid grid-cols-1 gap-4 justify-center items-center text-center'>
                <h3 className="uppercase text-black text-sm">Mejoramiento de granos andinos con potencial para asegurar la nutrición popular y el alivio a la pobreza</h3>
                <p className='text-green-700 pt-0'> <strong>Julio 2009</strong></p>
              </div>
            </div>
          </Link>




        </div>

      </div>



    </div>
  )
}

export default Projects