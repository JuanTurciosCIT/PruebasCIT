import type { GetStaticProps, NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next';

import Layout from 'shared/Layout';
import { ReactNode, Suspense } from 'react';
import HomeContentService from 'utils/services/HomeContentService';
import { HeroCaseStudiesInterface } from 'utils/types/caseStudies.interface';
import HeroCaseStudies from 'components/CaseStudies/HeroCaseStudies';
import { CaseStudiesCategory } from 'components/CaseStudies/CaseStudyCategories';
import styles from 'styles/caseStudiesPage.module.scss';
import { CaseStudiesList } from 'components/CaseStudies/PaginatedCaseStudies/CaseStudiesList';
// import { SkeletonLoader } from 'Animations/SkeletonLoader';


export const getStaticProps: GetStaticProps<any> = async (context: GetStaticPropsContext) => {
	const footerContent = await HomeContentService.getFooterContent();

	return {
		props: {
      // ...case studies here
			footerContent
		},
		revalidate: 10
	};
};

const CaseStudiesPage: NextPage<any> & { skeletonLoader?: ReactNode } = ({ footerContent }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const data: HeroCaseStudiesInterface = {backgroundImage: '', descriptionEN: '', titleEN: ''};
	return (
		<Layout footerContent={footerContent}>
      <main>
				<HeroCaseStudies heroContent={data} />
			</main>
			<section className={styles.section}>
				<div className={styles.wrapper}>
					<CaseStudiesCategory />
					<CaseStudiesList />
				</div>
			</section>
		</Layout>
	);
};

// Home.skeletonLoader = <SkeletonLoader />;

export default CaseStudiesPage;
