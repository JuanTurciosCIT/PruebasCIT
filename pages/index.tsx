import type { GetStaticProps, NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next';

import HeroHome from 'components/Home/HeroHome';
import CompaniesSlider from 'components/Home/CompaniesSlider';

import Layout from 'shared/Layout';
import styles from 'styles/home.module.scss';
import About from 'components/Home/About';
import OurServices from 'components/Home/OurServices';
import Technologies from 'components/Home/Technologies';
import Portfolio from 'components/Home/Portfolio';
import CustomerFeedback from 'components/Home/CustomerFeedback';
import Gallery from 'components/Home/Gallery';
import HeroFooter from 'shared/HeroFooter';
import { HomeContent } from 'utils/types/homeContent.interface';
import { getHomeContent } from 'utils/services/getHomeContent';

const Home: NextPage<HomeContent> = ({
	hero,
	customers,
	about,
	services,
	technologies,
	customerFeedback,
	gallery,
	footerHero,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<Layout>
			<main>
				<HeroHome heroContent={hero} />
			</main>
			<CompaniesSlider customers={customers} />
			<div className={styles.aboutAndServices}>
				<About aboutContent={about} />
				<OurServices services={services} />
				<div className={styles.diamond}></div>
			</div>
			<Technologies technologies={technologies} />
			<Portfolio />
			<CustomerFeedback />
			<Gallery />
			<HeroFooter />
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<HomeContent> = async (context: GetStaticPropsContext) => {
	const homeContent: HomeContent = await getHomeContent(context.locale);

	return {
		props: {
			...homeContent,
		},
		revalidate: 10
	};
};

export default Home;
