import type { GetStaticProps, NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { ReactNode } from 'react';

import Layout from 'shared/Layout';
import HeroFooter from '@/shared/HeroFooter';
import { HomeContentService } from 'utils/services/HomeContentService';
import { HeroCaseStudiesInterface } from 'utils/types/caseStudies.interface';
import HeroCaseStudies from 'components/CaseStudies/HeroCaseStudies';
import { CaseStudiesCategory } from 'components/CaseStudies/CaseStudyCategories';
import styles from 'styles/caseStudiesPage.module.scss';
import { CaseStudiesList } from 'components/CaseStudies/PaginatedCaseStudies/CaseStudiesList';
import { FooterHeroSection } from 'utils/types/homeContent.interface';
import { getCaseStudiesContent } from 'utils/services';
// import { SkeletonLoader } from 'Animations/SkeletonLoader';


export const getStaticProps: GetStaticProps<any> = async (context: GetStaticPropsContext) => {
	const caseStudiesContent = await getCaseStudiesContent(context.locale);

	return {
		props: {
      // ...case studies here
			...caseStudiesContent
		},
		revalidate: 10
	};
};

const CaseStudiesPage: NextPage<any> & { skeletonLoader?: ReactNode } = ({ footerHero, footer }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const data: HeroCaseStudiesInterface = {backgroundImage: '', descriptionEN: '', titleEN: ''};
	return (
		<Layout footerContent={footer}>
      <main>
				<HeroCaseStudies heroContent={data} />
			</main>
			<section className={styles.section}>
				<div className={styles.wrapper}>
					<CaseStudiesCategory />
					<CaseStudiesList />
				</div>
			</section>
			<HeroFooter content={footerHero} />
		</Layout>
	);
};

// Home.skeletonLoader = <SkeletonLoader />;

export default CaseStudiesPage;
