import type { NextPage } from 'next'

import HeroHome from './components/Home/HeroHome'
import CompaniesSlider from './components/Home/CompaniesSlider'

import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <main>
        <HeroHome />
        <CompaniesSlider />
      </main>
    </Layout>
  )
}

export default Home
