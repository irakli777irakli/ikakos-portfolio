import Head from 'next/head'
import Navbar from '../components/Navbar'
import AboutPage from '../components/AboutPage'
import ProjectsPage from '../components/ProjectsPage'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    
      <AboutPage />
      <ProjectsPage />
      <Footer />
     
      
    </>
  )
}
