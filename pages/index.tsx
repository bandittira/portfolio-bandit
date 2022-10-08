import type { NextPage } from 'next'
import Head from 'next/head';
import About from '../components/about';
import Experience from '../components/experience';
import Footer from '../components/footer';
import Navbar from '../components/nav'
import Skill from '../components/skill';
import Work from '../components/work';

const Home: NextPage = () => {
  return (
    <>
    <Head>
        <title>Bandit Tirasatian Portfolio</title>
        <meta name='description' content='Portfolio' />
        <link rel='icon' href='/favicon.ico' />
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </Head>
      
    <main>
      <Navbar></Navbar>
      <About></About>
      <Experience></Experience>
      <Skill></Skill>
      <Work></Work>
      <Footer></Footer>
  
    </main>
    </>
  )
}

export default Home
