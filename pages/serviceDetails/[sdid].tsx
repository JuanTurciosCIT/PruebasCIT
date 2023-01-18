import { Layout } from '@/shared/Layout';
import {
	NextPage,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext
} from 'next';
import style   from "./sdid.module.scss";
import HeroServiceDetail from 'components/ServiceDetails/HeroServiceDetails';
import QuoteAndResume from 'components/ServiceDetails/QuoteAndResume';
import HowWeDo from 'components/ServiceDetails/HowWeDo';
import { HeroFooter } from '@/shared/HeroFooter';
import { CustomerFeedback } from 'components/Home/CustomerFeedback';
import ListService from 'components/ServiceDetails/ListServices';
import { ServiceDetailContentService } from 'utils/services/ServiceDetails/ServiceDetailContentService';
import { getDetailsServiceBy } from 'utils/services/ServiceDetails';
import { ServiceDetailPage } from 'utils/types/serviceDetails.interface';

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
	const servicesDetail = await ServiceDetailContentService.getAllServiceDetail('en')

	const paths: any = [];

  servicesDetail.map((servicesDetail) => {
		paths.push({
			params: { sdid: String(servicesDetail.idService) }, locale: locales?.[0]
		});
		paths.push({
			params: { sdid: String(servicesDetail.idService) }, locale: locales?.[1]
		});
	}); 

  
	return {
		fallback: false,
		paths,
	};
};



export const getStaticProps: GetStaticProps = async (
	context: GetStaticPropsContext
) => {
	const sdid = context.params?.sdid;

	const serviceDetail = await getDetailsServiceBy(
    context.locale,
    Number(sdid)
  )

	return {
		props: {
			...serviceDetail,
		},
		revalidate: 10,
		notFound: !serviceDetail,
	};
};


const ServiceDetailPage: NextPage<ServiceDetailPage> = ({
  aboutHero,
  footer,
  customerFeedback,
  footerHero,
  services,
  summaryContent,
  servicesProcess,
  customers
}) => {
  
  return (
    <Layout footerContent={footer} >
      <div  className={style.marginTop8} >

        <HeroServiceDetail hero={aboutHero} customerList={customers} ></HeroServiceDetail>
        <QuoteAndResume  summaryContent={summaryContent} ></QuoteAndResume>
        <HowWeDo contentServicesProcess={servicesProcess}  ></HowWeDo>
        <HeroFooter content={footerHero} ></HeroFooter>
        <CustomerFeedback feedback={customerFeedback} ></CustomerFeedback>
        <ListService  listServices={services} ></ListService>
      </div>
    </Layout>

  );
}

export default ServiceDetailPage;