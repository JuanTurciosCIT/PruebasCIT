import { Layout } from '@/shared/Layout';
import { useRouter } from 'next/router'
import { DetailCaseStudyPage } from 'utils/types/caseStudy.interface';
import {
	NextPage,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext
} from 'next';

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
  aboutHero
}) => {

  
  const router = useRouter();
  const theFooter = {
    "locations": [
        {
            "address": "Delaware: \nCity Mall, San Pedro Sula, Cortés, Honduras",
            "isVisible": true
        },
        {
            "address": "Honduras Seguros del Pais  7th floor, aside City Mall, San Pedro Sula, Cortés, Honduras",
            "isVisible": true
        },
        {
            "address": "Estonia: Sepapaja 6 Tallin 1555",
            "isVisible": true
        }
    ],
    "contact": {
        "facebook": "https://www.facebook.com/cithnd/",
        "instagram": "https://www.instagram.com/cit.hn/",
        "linkedin": "https://www.linkedin.com/company/cithn/",
        "phone": "2544-0080 ",
        "email": "info@cit.hn"
    }
  }

  const theFeedback = [
    {
        "id": 1,
        "name": "Lore Ipsum",
        "rate": 5,
        "commentES": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nemo alias, possimus rem, consequatur voluptatum obcaecati repudiandae totam, est voluptates ab molestiae vitae. Quam explicabo eligendi iste maiores autem debitis.",
        "picture": "https://suthiuipgrzglbzvsbjv.supabase.co/storage/v1/object/public/cit-landing-page/HomePage/feedback/0.2808105197804527.png",
        "isVisible": true,
        "companyName": "Bip Bip"
    },
    {
        "id": 3,
        "name": "Lore Ipsum",
        "rate": 5,
        "commentES": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nemo alias, possimus rem, consequatur voluptatum obcaecati repudiandae totam, est voluptates ab molestiae vitae. Quam explicabo eligendi iste maiores autem debitis.",
        "picture": "https://suthiuipgrzglbzvsbjv.supabase.co/storage/v1/object/public/cit-landing-page/HomePage/feedback/0.5286248936582059.png",
        "isVisible": true,
        "companyName": "Patmed"
    }
]

const theStar = {
  "titleES": "Listo para comenzar?",
  "captionES": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus eu sit suspendisse aliquet arcu bibendum. Turpis commodo libero vulputate sed. Sagittis et, euismod sagittis, leo commodo, a amet. Metus felis ipsum feugiat.",
  "backgroundImg": "https://suthiuipgrzglbzvsbjv.supabase.co/storage/v1/object/public/cit-landing-page/Common/heroFooter/0.49751295307263255.jpg"
}
  return (
    <Layout footerContent={theFooter} >
      <div>

        <HeroServiceDetail hero={aboutHero} ></HeroServiceDetail>
        <QuoteAndResume></QuoteAndResume>
        <HowWeDo></HowWeDo>
        <HeroFooter content={theStar} ></HeroFooter>
        <CustomerFeedback feedback={theFeedback} ></CustomerFeedback>
        <ListService></ListService>
      </div>
    </Layout>

  );
}

export default ServiceDetailPage;