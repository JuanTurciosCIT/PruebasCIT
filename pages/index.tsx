import type { NextPage } from 'next'

import HeroHome from './components/Home/HeroHome'

import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <main>
        <HeroHome />
      </main>
    </Layout>
  )
}

export default Home
