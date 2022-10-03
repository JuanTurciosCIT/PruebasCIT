import type { GetStaticProps, NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { ReactNode } from 'react';

// import styles from 'styles/home.module.scss';

// Components
import { Layout } from 'shared/Layout';
import { HeroFooter } from 'shared/HeroFooter';
import { TheTeam } from 'components/Career/TheTeam';
import { CareerGallery } from 'components/Career/CareerGallery';
import { CareerHero } from 'components/Career/CareerHero';
import { Acronym } from 'components/Career/Acronym';
import { CareerBenefits } from 'components/Career/CareerBenefits';
import { TeamFeedback } from 'components/Career/Teamfeedback';

import { CareerContentInterface } from 'utils/types/careerContent.interface';

// Services
import { getCareerPageContent, getCaseStudiesContent, getHomePageContent } from 'utils/services';

export const getStaticProps: GetStaticProps<CareerContentInterface> = async (context: GetStaticPropsContext) => {
	const careerContent = await getCareerPageContent(context.locale) as CareerContentInterface;


	return {
		revalidate: 10,
		props: {
			...careerContent,
		}
	};
};

const Home: NextPage<CareerContentInterface> & { skeletonLoader?: ReactNode } = ({
	hero,
  officesPictures,
	benefits,
	employeesFeedback,
	employees,
	footerHero,
	footer
}: InferGetStaticPropsType<typeof getStaticProps>) => {

	return (
		<Layout footerContent={footer}>
			<main>
				<CareerHero content={hero} />
			</main>
			<Acronym />
			<CareerBenefits benefits={benefits} />
			<CareerGallery content={officesPictures} />
			<TeamFeedback feedback={employeesFeedback} />
			<TheTeam employees={employees} />
			<HeroFooter content={footerHero} />
		</Layout>
	);
};

export default Home;
