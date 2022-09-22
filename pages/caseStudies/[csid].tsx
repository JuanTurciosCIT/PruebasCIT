import {
	GetStaticPaths,
	GetStaticProps,
	GetStaticPropsContext,
	NextPage,
} from 'next';
import { useRouter } from 'next/router';

// Components
import { Layout } from '@/shared/Layout';
import { CaseStudyHero } from 'components/CaseStudiesPageDetail/CaseStudyHero';
import { CaseStudyMetrics } from 'components/CaseStudiesPageDetail/Metrics';
import { GeneralInfo } from 'components/CaseStudiesPageDetail/GeneralInfo';
import { Achievements } from 'components/CaseStudiesPageDetail/Achievements';
import { AppStack } from 'components/CaseStudiesPageDetail/AppStack';
// import { OurServices } from 'components/Home/OurServices';
import { HeroFooter } from '@/shared/HeroFooter';

// Services
import { CaseStudiesContentService } from 'utils/services/CaseStudiesContentService';
import { getCaseStudyContent } from 'utils/services';
import { OurProcess } from 'components/CaseStudiesPageDetail/OurProcess';

export const getStaticPaths: GetStaticPaths = async () => {
	const caseStudies = await CaseStudiesContentService.getCaseStudies('en');

	const paths = caseStudies.map((caseStudy) => {
		return {
			params: { csid: String(caseStudy.id) },
		};
	});

	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async (
	context: GetStaticPropsContext
) => {
	const caseStudyContent = await getCaseStudyContent(context.locale);

	return {
		props: {
			// ...case studies here
			...caseStudyContent,
		},
		revalidate: 10,
	};
};

const CaseStudyPageDetail: NextPage<any> = ({ services, footerHero, footer }) => {
	const router = useRouter();
	const { csid } = router.query; // csid is the case study id

	if (router.isFallback) {
		return (
			<div
				style={{
					fontSize: '32px',
					color: '#fff',
					width: '100vw',
					height: '100vh',
					display: 'grid',
					placeContent: 'center',
				}}
			>
				Loading...
			</div>
		);
	}

	return (
		<Layout footerContent={footer}>
			<CaseStudyHero />
      <CaseStudyMetrics />
			<section style={{backgroundColor: '#232323', paddingTop: '36px'}}>
				<GeneralInfo />
				<Achievements />
			</section>
			<AppStack />
			<div style={{paddingInline: '34px'}}>
				{/* <OurServices services={services} /> */}
			</div>
			<OurProcess />
			<HeroFooter content={footerHero} />
		</Layout>
	);
};

export default CaseStudyPageDetail;
