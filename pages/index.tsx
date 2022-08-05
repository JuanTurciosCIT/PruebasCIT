import type { NextPage } from 'next'

import HeroHome from './components/Home/HeroHome'
import CompaniesSlider from './components/Home/CompaniesSlider'

import Layout from '../components/Layout'
import styles from '../styles/home.module.scss';
import About from './components/Home/About';
import OurServices from './components/Home/OurServices';
import Technologies from './components/Home/Technologies';
import Portfolio from './components/Home/Portfolio';

const Home: NextPage = () => {
  return (
    <Layout>
      <main>
        <HeroHome />
      </main>
      <CompaniesSlider />
      <div className={styles.aboutAndServices}>
        <About />
        <OurServices />
        <div className={styles.diamond}></div>
      </div>
      <Technologies />
      <Portfolio />
    </Layout>
  )
}

export default Home
