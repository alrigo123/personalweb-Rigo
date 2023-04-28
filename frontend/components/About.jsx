import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2 text-justify'>
                    <p className='uppercase text-xl tracking-widest text-[#316523]'>About Me</p>
                    <h2 className='py-4'>Who I am</h2>
                    <p className='py-4 text-gray-600'>Investigador Agrario especialista en cereales y granos Andinos, formulación de proyectos de desarrollo rural y mejoramiento genético, aptitudes para trabajo en equipos multidisciplinarios, gestión de proyectos con entidades público y privadas, entre otras actividades vinculadas al sector agropecuario. Realicé cursos de especialización en: Mejoramiento Genético para Resistencia Durable a patógenos especializados dictado por instructores de la Universidad de Wageningen Holanda, en la Universidad de Cienfuegos de Cuba y La Universidad Agraria La Molina, Análisis Bioquímico de semillas en la Universidad de Costa Rica, Costos y presupuestos en el Instituto Abaco del Cusco, Agrobiodiversidad y Cambio Climático a través de la Corporación PBA  NUFFIC en Colombia, Diplomados: Gestión Pública Regional y Local, Adaptación y Mitigación del Cambio Climático, Gestión de la Innovación Agraria, Cadenas productivas. </p>
                    <br />
                    <p className='py-4 text-gray-600'>Me desempeño como investigador agrario en el Instituto Nacional de Innovación Agraria desde 1997 habiendo generado tecnologías y variedades mejoradas en granos andinos y cereales, actualmente está a mi responsabilidad el Programa Nacional de Cereales, Granos Andinos y Leguminosas del INIA. Ejecución de proyectos colaborativos de investigación a nivel nacional con la UPCH, CIRNMA , UNSAAC, UNALM y a nivel internacional con PROINPA la Corporación PBA, Bioversity Internacional, RDA de Corea el INIAP de Ecuador. Soy miembro del Consorcio Andino de los países de américa Latina asumiendo la Coordinación Nacional en el Perú desde el 2008 al 2012. Representación institucional en eventos científicos, cursos de capacitación, congresos, fórum, seminarios nacionales e internacionales. He desarrollado publicaciones de artículos científicos en revistas indizadas y manuales para técnicos y productores.</p>

                    <p className='py-4 text-gray-600 underline cursor-pointer'>Para mas informacion revisa este link</p>
                    poner lo de su ID scopus y el otro ID
                </div>
                <div className='w-full h-auto m-auto shadow-green-950 flex items-center justify-center p-4 hover:scale-105 ease-in-out duration-300'>
                    {/* <Image
                        src="/../public/assets/rigo.jpg"
                        className="sm:w-[20%] h-[10%] border-lime-50 mx-auto my-4 rounded-2xl"
                        alt="Imagen circular"
                        width='2000'
                        height='2000'
                    /> */}
                    <img className='rounded-xl w-[90%] h-[90%]' src="https://ctivitae.concytec.gob.pe/appDirectorioCTI/UploadFotoPath.do?tipo=visualizar_archivo&id_investigador=135&ruta=/documents/docInvestigadores/135/imagenes/foto%20Rigoberto.jpg&content_type=image/jpeg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About