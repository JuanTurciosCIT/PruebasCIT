import type { NextPage } from 'next'

import HeroHome from './components/Home/HeroHome'
import CompaniesSlider from './components/Home/CompaniesSlider'

import Layout from '../components/Layout'
import styles from '../styles/home.module.scss';
import About from './components/Home/About';
import OurServices from './components/Home/OurServices';

const Home: NextPage = () => {
  return (
    <Layout>
      <main>
        <HeroHome />
      </main>
      <CompaniesSlider />
      <section className={styles.aboutAndServices}>
        <About />
        <OurServices />
      </section>
    </Layout>
  )
}

export default Home
