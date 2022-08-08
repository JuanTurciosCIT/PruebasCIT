import type { NextPage } from 'next'

import HeroHome from 'components/Home/HeroHome'
import CompaniesSlider from 'components/Home/CompaniesSlider'

import Layout from 'shared/Layout'
import styles from 'styles/home.module.scss';
import About from 'components/Home/About';
import OurServices from 'components/Home/OurServices';
import Technologies from 'components/Home/Technologies';
import Portfolio from 'components/Home/Portfolio';
import CustomerFeedback from 'components/Home/CustomerFeedback';
import Gallery from 'components/Home/Gallery';
import HeroFooter from 'shared/HeroFooter';

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
      <CustomerFeedback />
      <Gallery />
      <HeroFooter />
    </Layout>
  )
}

export default Home
