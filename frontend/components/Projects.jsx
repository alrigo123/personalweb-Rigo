import React from 'react'
import COMPORTGENOTIPOS from '../public/assets/projects/COMPORTAMIENTO81GENOTIPOS.png'
import INIA440 from '../public/assets/projects/INIA440.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Proyectos</p>
                <h2 className='py-4'>What Ive Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    {/* ADD FUNCTION TO SEE MORE PROJECTS AND SEE LESS OR CAROUSEL*/}
                    <ProjectItem
                        typePublished='Artículo en revista científica'
                        descAuthor="Primer Autor"
                        backgroundImg={INIA440}
                        title='"New wheat variety INIA 440 - KANCHAREQ: Selection and agronomic and commercial characterization in Cusco, Peru"'
                        year='2023'
                        projectUrl="http://www.doi.org/10.1016/J.HELIYON.2022.E12712" />

                    <ProjectItem
                        typePublished='Artículo en revista'
                        descAuthor="Autor"
                        backgroundImg={COMPORTGENOTIPOS}
                        title='"Comportamiento agronómico de 81 genotipos de quinua (Chenopodium quinoa Willd) en el Perú"'
                        year='2022'
                        projectUrl="http://www.doi.org/10.19136/era.a9n1.3134" />

                    <ProjectItem
                        typePublished='Artículo en revista científica'
                        descAuthor="Primer Autor"
                        backgroundImg={INIA440}
                        title='"New wheat variety INIA 440 - KANCHAREQ: Selection and agronomic and commercial characterization in Cusco, Peru"'
                        year='2023'
                        projectUrl="/project" />

                    <ProjectItem
                        typePublished='Artículo en revista'
                        descAuthor="Autor"
                        backgroundImg={COMPORTGENOTIPOS}
                        title='"Comportamiento agronómico de 81 genotipos de quinua (Chenopodium quinoa Willd) en el Perú"'
                        year='2022'
                        projectUrl="/page404" />

                </div>
            </div>
        </div>
    )
}

export default Projects