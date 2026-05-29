import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Perwira Dzakwan Ramadhani — Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Perwira Dzakwan Ramadhani, a full-stack developer from Madiun, Indonesia. Specializing in web development with Laravel, ReactJS, CodeIgniter, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
