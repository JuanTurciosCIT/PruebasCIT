import type {
	GetStaticProps,
	NextPage,
	InferGetStaticPropsType,
	GetStaticPropsContext,
} from 'next';
import { ReactNode } from 'react';

import Layout from 'shared/Layout';
import HeroFooter from '@/shared/HeroFooter';
import HeroCaseStudies from 'components/CaseStudies/HeroCaseStudies';
import { CaseStudiesCategory } from 'components/CaseStudies/CaseStudyCategories';
import styles from 'styles/caseStudiesPage.module.scss';
import { CaseStudiesList } from 'components/CaseStudies/PaginatedCaseStudies/CaseStudiesList';
import { getCaseStudiesContent } from 'utils/services';
import { CaseStudiesContent } from 'utils/types/caseStudies.interface';
import { PaginatedCaseStudies } from 'components/CaseStudies/PaginatedCaseStudies';
// import { SkeletonLoader } from 'Animations/SkeletonLoader';

export const getStaticProps: GetStaticProps<CaseStudiesContent> = async (
	context: GetStaticPropsContext
) => {
	const caseStudiesContent = (await getCaseStudiesContent(
		context.locale
	)) as CaseStudiesContent;

	return {
		props: {
			// ...case studies here
			...caseStudiesContent,
		},
		revalidate: 10,
	};
};

const CaseStudiesPage: NextPage<CaseStudiesContent> & {
	skeletonLoader?: ReactNode;
} = ({
	hero,
	caseStudiesCategories,
	caseStudies,
	footerHero,
	footer,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<Layout footerContent={footer}>
			<main>
				<HeroCaseStudies heroContent={hero} />
			</main>
			<section className={styles.section}>
				<PaginatedCaseStudies caseStudies={caseStudies} caseStudiesCategories={caseStudiesCategories} />
			</section>
			<HeroFooter content={footerHero} />
		</Layout>
	);
};

// Home.skeletonLoader = <SkeletonLoader />;

export default CaseStudiesPage;
