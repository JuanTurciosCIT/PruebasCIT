import type { GetStaticProps, NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { ReactNode } from 'react';

import styles from 'styles/home.module.scss';

// Components
import { Layout } from 'shared/Layout';
import { HeroHome } from 'components/Home/HeroHome';
import { CompaniesSlider } from 'components/Home/CompaniesSlider';
import { About } from 'components/Home/About';
import { OurServices } from 'components/Home/OurServices';
import { Technologies } from 'components/Home/Technologies';
import { CaseStudyCards } from 'components/Home/CaseStudyCards';
import { CustomerFeedback } from 'components/Home/CustomerFeedback';
import { Portfolio } from 'components/Home/Portfolio';
import { Gallery } from 'components/Home/Gallery';
import { HeroFooter } from 'shared/HeroFooter';

// Services
import { HomeContent } from 'utils/types/homeContent.interface';
import { getHomePageContent } from 'utils/services';

export const getStaticProps: GetStaticProps<HomeContent> = async (context: GetStaticPropsContext) => {
	const homeContent: HomeContent = await getHomePageContent(context.locale) as HomeContent;

	return {
		revalidate: 10,
		props: {
			...homeContent,
		}
	};
};

const Home: NextPage<HomeContent> & { skeletonLoader?: ReactNode } = ({
	hero,
	customers,
	about,
	services,
	technologies,
	caseStudies,
	customerFeedback,
	portfolio,
	gallery,
	footerHero,
	footer
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	console.log(footerHero, 'index')
	return (
		<Layout footerContent={footer}>
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
			<CaseStudyCards content={caseStudies} />
			<CustomerFeedback feedback={customerFeedback} />
			{/* <Portfolio content={portfolio} /> */}
			<Gallery gallery={gallery}/>
			<HeroFooter content={footerHero} />
		</Layout>
	);
};

export default Home;
