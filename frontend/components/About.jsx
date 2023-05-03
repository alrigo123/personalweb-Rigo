import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full md:h-full p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2 text-justify'>
                    <p className='uppercase text-lg font-bold tracking-widest text-[#316523]'>Acerca de Mi</p>
                    <h2 className='py-4'>¿Quién Soy?</h2>

                    {/* <p className='py-4 text-gray-950'>Investigador Agrario especialista en cereales y granos Andinos,
                        formulación de proyectos de desarrollo rural y mejoramiento genético, aptitudes para trabajo en equipos
                        multidisciplinarios, gestión de proyectos con entidades público y privadas, entre otras actividades vinculadas
                        al sector agropecuario. <br /> <strong>Cursos de especialización:</strong> Mejoramiento Genético para Resistencia Durable
                        a patógenos especializados dictado por instructores de la Universidad de Wageningen Holanda, en la Universidad
                        de Cienfuegos de Cuba y La Universidad Agraria La Molina, Análisis Bioquímico de semillas en la Universidad
                        de Costa Rica, Costos y presupuestos en el Instituto Abaco del Cusco, Agrobiodiversidad y Cambio Climático
                        a través de la Corporación PBA  NUFFIC en Colombia. <br /><strong>Diplomados:</strong> Gestión Pública Regional y Local, Adaptación
                        y Mitigación del Cambio Climático, Gestión de la Innovación Agraria, Cadenas productivas</p>

                    <p className='py-4 text-gray-950'>Ejecución de proyectos colaborativos de investigación a nivel nacional con la
                        <strong> UPCH, CIRNMA, UNSAAC, UNALM</strong> y a nivel internacional con <strong> PROINPA la Corporación PBA,
                            Bioversity Internacional, RDA de Corea el INIAP de Ecuador. </strong>  Soy miembro del Consorcio Andino de los países de américa Latina asumiendo la Coordinación Nacional
                        en el Perú desde el 2008 al 2012. Representación institucional en eventos científicos, cursos de capacitación,
                        congresos, fórum, seminarios nacionales e internacionales. He desarrollado publicaciones de artículos científicos
                        en revistas indizadas y manuales para técnicos y productores.</p> */}

                    <p className='py-4 text-gray-950'>
                        Procedente de la Ciudad de Cusco, Soy de profesión Ingeniero Agrónomo, Magister en Estadística
                        con <strong >27 años de experiencia </strong> enfocado al mejoramiento genético y participativo para el desarrollo
                        de tecnologías en granos andinos y cereales sobre todo en la búsqueda de resistencia genética a
                        patógenos <strong className='italic'> especializados en los cultivos de trigo, cebada, quinua y kiwicha.</strong> Con habilidades y
                        experiencia en la formulación y ejecución de proyectos de investigación y productivos en el sector
                        agrario con la cooperación técnica nacional e internacional, habilidades para redacción de
                        artículos científicos, otras publicaciones, así como la enseñanza y capacitación con el uso de
                        metodologías participativas con expectativas de asumir nuevos retos en la docencia en los que
                        pueda desarrollar mi capacidad de liderazgo y en los que pueda aportar mis conocimientos.
                        <br /> Estudios concluidos de Maestría en Desarrollo Rural y estudios en el Programa de
                        doctorado en Desarrollo Rural Sostenible, Agroplasticultura y Agrónica de la Universidad de
                        Almería España, especialización en Mejoramiento Genético para Resistencia Durable a patógenos
                        especializados en la Universidad de Cienfuegos de Cuba y La Universidad Agraria La Molina,
                        Análisis Bioquímico de semillas en la Universidad de Costa Rica, Agrobiodiversidad y Cambio
                        Climático a través de la Corporación PBA – NUFFIC en Colombia, Diplomados en Gestión Pública
                        Regional y Local, Adaptación y Mitigación del Cambio Climático, Gestión de la Innovación Agraria,
                        Agronegocios con orientación a cadenas de valor (CEOL – UNALM), entre otros. <br />
                        En la trayectoria profesional, mi principal función es de <strong> investigador agrario en Granos Andinos y
                        cereales en mejoramiento genético y tecnología de producción de semillas</strong>, habiendo
                        desarrollado variedades mejoradas en los cultivos de quinua, kiwicha, trigo y cebada, tecnologías
                        de producción, multiplicación de semillas y capacitación a profesionales, técnicos y productores,
                        asesor de Tesis de Pregrado. <br />
                        En la actualidad desempeño el cargo de <strong> Coordinador del Programa Nacional de Cereales, granos
                        andinos y leguminosas del INIA </strong>
                        A través de la Cooperación Nacional e Internacional se ha logrado el financiamiento para
                        desarrollar proyectos de desarrollo de tecnologías, la puesta en valor de especies olvidadas y
                        subutilizadas a fin de contribuir al mejoramiento de la calidad de vida de la población rural
                        principalmente en la sierra del Perú. Se ha realizado publicaciones de documentos técnicos y
                        artículos científicos e informativos en revistas e indexado a documentos informativos nacionales
                        e internacionales y cursos virtuales por la Web del INIA. Participación en conferencias,
                        seminarios, congresos nacionales e internacionales en granos andinos y Cereales entre otros.

                    </p>

                    <p className='font-bold text-orange-600'>* Scopus Author ID: <a className='underline' href="https://www.scopus.com/authid/detail.uri?authorId=56182093700" target='_blank'>56182093700</a> </p>
                    <p className='font-bold text-green-700'>* ID ORCID: <a className='underline' href="https://orcid.org/0000-0002-0652-9437">0000-0002-0652-9437</a></p>
                    <p className='font-bold text-blue-500'>* Investigador Concytect<br />
                        <span className='text-black'>  Código Renacyt: P0000135
                            <br />
                            Vigencia: 27/05/2021 - 27/05/2023
                            <br />
                            Grupo: MR
                            <br />
                            Nivel: III</span>
                    </p>

                    <a href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=135" target='_blank'><p className='py-4 text-blue-700 underline cursor-pointer font-bold'>Click para mas informacion</p></a>

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