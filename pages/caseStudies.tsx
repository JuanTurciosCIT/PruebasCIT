import type { GetStaticProps, NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next';

import Layout from 'shared/Layout';
import { HomeContent } from 'utils/types/homeContent.interface';
import { ReactNode, Suspense } from 'react';
import HomeContentService from 'utils/services/HomeContentService';
import { CaseStudies, HeroCaseStudiesInterface } from 'utils/types/caseStudies.interface';
import HeroCaseStudies from 'components/CaseStudies/HeroCaseStudies';
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
      <HeroCaseStudies heroContent={data} />
		</Layout>
	);
};

// Home.skeletonLoader = <SkeletonLoader />;

export default CaseStudiesPage;
