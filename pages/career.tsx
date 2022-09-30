import type { GetStaticProps, NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { ReactNode } from 'react';

// import styles from 'styles/home.module.scss';

// Components
import { Layout } from 'shared/Layout';
import { HeroFooter } from 'shared/HeroFooter';

// Services
import { HomeContent } from 'utils/types/homeContent.interface';
import { getCareerPageContent, getCaseStudiesContent, getHomePageContent } from 'utils/services';
import { CareerHero } from 'components/Career/CareerHero';
import { Acronym } from 'components/Career/Acronym';
import { CareerBenefits } from 'components/Career/CareerBenefits';
import { CaseStudyDetailService } from 'utils/services/CaseStudyDetailService';
import { CareerGallery } from 'components/Career/CareerGallery';
import { CaseStudyGalleryInterface } from 'utils/types/caseStudy.interface';
import { TeamFeedback } from 'components/Career/Teamfeedback';
import { HomeContentService } from 'utils/services/HomeContentService';
import { TheTeam } from 'components/Career/TheTeam';
import { CareerContentInterface } from 'utils/types/careerContent.interface';

export const getStaticProps: GetStaticProps<CareerContentInterface> = async (context: GetStaticPropsContext) => {
	// const homeContent: HomeContent = await getHomePageContent(context.locale) as HomeContent;
	const careerContent = await getCareerPageContent(context.locale) as CareerContentInterface;
	const teamFeedback = await HomeContentService.getCustomerFeedbackContent(context.locale as string) as any;


	return {
		revalidate: 10,
		props: {
			...careerContent,
			teamFeedback
		}
	};
};

const Home: NextPage<CareerContentInterface> & { skeletonLoader?: ReactNode } = ({
	hero,
  officesPictures,
	benefits,
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
			{/* <TeamFeedback feedback={teamFeedback} /> */}
			<TheTeam />
			{/* <CompaniesSlider customers={customers} />
			<div className={styles.aboutAndServices}>
				<About aboutContent={about} />
				<OurServices services={services} />
				<div className={styles.diamond}></div>
			</div>
			<Technologies technologies={technologies} />
			<CaseStudyCards content={caseStudies} />
			<CustomerFeedback feedback={customerFeedback} />
			<Portfolio content={portfolio} />
			<Gallery gallery={gallery}/> */}
			<HeroFooter content={footerHero} />
		</Layout>
	);
};

export default Home;
