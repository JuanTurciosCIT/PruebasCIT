import type {
	GetStaticProps,
	NextPage,
	InferGetStaticPropsType,
	GetStaticPropsContext,
} from 'next';
import { ReactNode } from 'react';

import styles from 'styles/caseStudiesPage.module.scss';

// Components
import { Layout } from 'shared/Layout';
import { HeroHome } from 'components/CaseStudies/HeroCaseStudies';
import { HeroFooter } from '@/shared/HeroFooter';
import { CaseStudiesContent } from 'utils/types/caseStudies.interface';
import { PaginatedCaseStudies } from 'components/CaseStudies/PaginatedCaseStudies';

// Services
import { getCaseStudiesContent } from 'utils/services';

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
				<HeroHome heroContent={hero} />
			</main>
			<section className={styles.section}>
				<PaginatedCaseStudies caseStudies={caseStudies} caseStudiesCategories={caseStudiesCategories} />
			</section>
			<HeroFooter content={footerHero} />
		</Layout>
	);
};

export default CaseStudiesPage;
