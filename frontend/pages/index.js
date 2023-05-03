import Head from 'next/head'
import About from 'rigo/components/About'
import Contact from 'rigo/components/Contact'
import Main from 'rigo/components/Main'
import Publications from 'rigo/components/Publications'
import Rewards from 'rigo/components/Rewards'
import Footer from 'rigo/components/Footer'
import Projects from 'rigo/components/Projects'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rigoberto Estrada Zuniga Web Page</title>
        <meta name="description" content="Sitio web del ingeniero agrónomo Rigoberto Estrada Zuniga, especializado en " />
        <meta name="keywords" content="agronomía, cultivos, cereales, hortalizas, agricultura, investigacion, Cusco, INIA, contacto, blog, personal" />
        <meta name="author" content="Rigoberto Estrada Zuniga" />
        <meta property="og:description" content="Sitio web del ingeniero agrónomo Rigoberto Estrada Zuniga, especializado en " />
        <meta property="og:image" content="https://www.inia.gob.pe/wp-content/uploads/2019/03/036-2019-1200x642.jpg" />
        <link rel="icon" type="image/x-icon" href="https://agraria.pe/imgs/a/lx/inia-presento-resultados-de-investigacion-que-permite-identi-18700.jpg"></link>
      </Head>
      <Main />
      <About />
      <Rewards />
      <Publications />
      {/* <Projects/> */}
      <Contact /> 
    </div>
  )
}
