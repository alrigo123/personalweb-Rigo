import React from 'react'
import COMPORTGENOTIPOS from '../public/assets/projects/COMPORTAMIENTO81GENOTIPOS.png'
import INIA440 from '../public/assets/projects/INIA440.png'
import EVALUACION100ACCESIONES from '../public/assets/projects/EVALUACION100.png'
import METABOLIC from '../public/assets/projects/METABOLIC.png'
import YIELD from '../public/assets/projects/YIELD.png'
import MULTIENVIROMENT from '../public/assets/projects/MULTIENVIROMENT.png'
import PublicationItem from './PublicationItem'


const Publications = () => {
    return (
        <div id='publications' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='uppercase text-lg font-bold tracking-widest text-[#316523]'>Publicaciones Científicas</p>
                <h2 className='py-4'>Mis Publicaciones</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    {/* ADD FUNCTION TO SEE MORE PROJECTS AND SEE LESS OR CAROUSEL*/}
                    <PublicationItem
                        typePublished='Artículo en revista científica'
                        descAuthor="Primer Autor"
                        backgroundImg={INIA440}
                        title='"New wheat variety INIA 440 - KANCHAREQ: Selection and agronomic and commercial characterization in Cusco, Peru"'
                        year='2023'
                        projectUrl="http://www.doi.org/10.1016/J.HELIYON.2022.E12712" />

                    <PublicationItem
                        typePublished='Artículo en revista'
                        descAuthor="Autor"
                        backgroundImg={COMPORTGENOTIPOS}
                        title='"Comportamiento agronómico de 81 genotipos de quinua (Chenopodium quinoa Willd) en el Perú"'
                        year='2022'
                        projectUrl="http://www.doi.org/10.19136/era.a9n1.3134" />

                    <PublicationItem
                        typePublished='Artículo en revista '
                        descAuthor="Autor"
                        backgroundImg={EVALUACION100ACCESIONES}
                        title='"Evaluación morfoagronómica de 100 accesiones de quinua (Chenopodium quinoa Willd.) por su respuesta a mildiu (Peronospora variabilis Gäum), rendimiento y contenido de saponina en Cusco, Perú"'
                        year='2022'
                        projectUrl="http://ojs.ucol.mx/index.php/agropecuaria/article/view/211" />

                    <PublicationItem
                        typePublished='Artículo en revista científica'
                        descAuthor="Colaborador"
                        backgroundImg={METABOLIC}
                        title='"Metabolomic profile and discrimination of white quinoa seeds from Peru based on UHPLC-HRMS and multivariate analysis"'
                        year='2021'
                        projectUrl="https://www.sciencedirect.com/science/article/pii/S073352102100148X?via%3Dihub" />

                    <PublicationItem
                        typePublished='Artículo en revista'
                        descAuthor="Colaborador"
                        backgroundImg={YIELD}
                        title='"Yield and agromorphological evaluation of quinoa genotypes (Chenopodium quinoa Willd.) in Huancayo, Perú"'
                        year='2021'
                        projectUrl="https://revistas.unitru.edu.pe/index.php/agroindscience/article/view/3448" />

                    <PublicationItem
                        typePublished='Artículo en revista científica'
                        descAuthor="Colaborador"
                        backgroundImg={MULTIENVIROMENT}
                        title='"Multi-environment multi-QTL association mapping identifies disease resistance QTL in barley germplasm from Latin America"'
                        year='2015'
                        projectUrl="http://www.doi.org/10.1007/s00122-014-2448-y" />
                    
                    
                    
                    {/* <PublicationItem
                        typePublished='Artículo en revista'
                        descAuthor="Autor"
                        backgroundImg={COMPORTGENOTIPOS}
                        title='"Comportamiento agronómico de 81 genotipos de quinua (Chenopodium quinoa Willd) en el Perú"'
                        year='2022'
                        projectUrl="/page404" /> */}

                </div>
            </div>
        </div>
    )
}

export default Publications