import {
	GetStaticPaths,
	GetStaticProps,
	GetStaticPropsContext,
	NextPage,
} from 'next';
import { useRouter } from 'next/router';
// import { useEffect } from 'react';

// Components
import { Layout } from '@/shared/Layout';
import { CaseStudyHero } from 'components/CaseStudiesPageDetail/CaseStudyHero';
import { CaseStudyMetrics } from 'components/CaseStudiesPageDetail/Metrics';
import { GeneralInfo } from 'components/CaseStudiesPageDetail/GeneralInfo';
import { Achievements } from 'components/CaseStudiesPageDetail/Achievements';
import { AppStack } from 'components/CaseStudiesPageDetail/AppStack';
import { DeliveredServices } from 'components/CaseStudiesPageDetail/DeliveredServices';
import { HeroFooter } from '@/shared/HeroFooter';

// Services
import { CaseStudiesContentService } from 'utils/services/CaseStudiesContentService';
import { getCaseStudyDetailContent } from 'utils/services';
import { OurProcess } from 'components/CaseStudiesPageDetail/OurProcess';
import { DetailCaseStudyPage } from 'utils/types/caseStudy.interface';
import { CaseStudyCategory } from 'utils/types/caseStudies.interface';
import { TechnologiesSection } from 'utils/types/commonContent.interface';
import { CaseStudyGallery } from 'components/CaseStudiesPageDetail/CaseStudyGallery';

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
	const caseStudies = await CaseStudiesContentService.getCaseStudies('en');

	// const paths: any = [];
	const paths: any = [
		{
			params: { csid: String(caseStudies[0].id) },
			locale: locales?.[0],
		},
		{
			params: { csid: String(caseStudies[0].id) },
			locale: locales?.[1],
		},
	];
	// caseStudies.map((caseStudy) => {
	// 	paths.push({
	// 		params: { csid: String(caseStudy.id) }, locale: locales?.[0]
	// 	});
	// 	paths.push({
	// 		params: { csid: String(caseStudy.id) }, locale: locales?.[1]
	// 	});
	// });

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (
	context: GetStaticPropsContext
) => {
	const csid = context.params?.csid;
	const caseStudyContent = await getCaseStudyDetailContent(
		context.locale,
		Number(csid)
	);

	return {
		props: {
			// ...case studies here
			...caseStudyContent,
		},
		revalidate: 10,
		notFound: !caseStudyContent,
	};
};

const CaseStudyPageDetail: NextPage<DetailCaseStudyPage> = ({
	technologies,
	caseStudyInfo,
	achievements,
	howItWorks,
	categories,
	detailContent,
	metrics,
	services,
	ourProcess,
	gallery,
	footerHero,
	footer,
}) => {
	const heroContent = {
		heroTitleEN: detailContent.heroTitleEN,
		heroTitleES: detailContent.heroTitleES,
		heroDescriptionEN: detailContent.heroDescriptionEN,
		heroDescriptionES: detailContent.heroDescriptionES,
		pdf: detailContent.pdf,
		heroImage: caseStudyInfo.logo,
	};

	const atGlanceContent = {
		industry: categories as CaseStudyCategory[],
		companySize:
			detailContent.companySizeEN || (detailContent.companySizeES as string),
		goal: detailContent.goalEN || (detailContent.goalES as string),
		technologies: technologies as TechnologiesSection[],
	};

	return (
		<Layout footerContent={footer}>
			<CaseStudyHero heroContent={heroContent} />
			<CaseStudyMetrics metrics={metrics} />
			<section style={{ backgroundColor: '#232323', paddingTop: '36px' }}>
				<GeneralInfo content={atGlanceContent} />
				<Achievements achievements={achievements} />
			</section>
			<AppStack appStack={howItWorks.appStack} image={howItWorks.image} />
			<DeliveredServices services={services} />
			<OurProcess content={ourProcess} />
			<CaseStudyGallery content={gallery} />
			<HeroFooter content={footerHero} />
		</Layout>
	);
};

export default CaseStudyPageDetail;
