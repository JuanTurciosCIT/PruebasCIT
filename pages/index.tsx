import type { NextPage } from 'next'

import HeroHome from './components/Home/HeroHome'
import CompaniesSlider from './components/Home/CompaniesSlider'

import Layout from '../components/Layout'
import styles from '../styles/home.module.scss';
import About from './components/Home/About';

const Home: NextPage = () => {
  return (
    <Layout>
      <main>
        <HeroHome />
        <CompaniesSlider />
        <div className={styles.aboutAndServices}>
          <About />
        </div>
      </main>
    </Layout>
  )
}

export default Home
