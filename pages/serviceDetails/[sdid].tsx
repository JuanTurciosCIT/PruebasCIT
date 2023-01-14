import { Layout } from '@/shared/Layout';
import { useRouter } from 'next/router'
import { DetailCaseStudyPage } from 'utils/types/caseStudy.interface';
import {
	NextPage,
} from 'next';
import { HeroHome } from 'components/CaseStudies/HeroCaseStudies';
import HeroServiceDetail from 'components/ServiceDetails/HeroServiceDetails';
import QuoteAndResume from 'components/ServiceDetails/QuoteAndResume';

const ServiceDetailPage: NextPage<DetailCaseStudyPage> = ({
  footer
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
  return (
    <Layout footerContent={theFooter} >
      <div>

      <HeroServiceDetail></HeroServiceDetail>
      <QuoteAndResume></QuoteAndResume>
      </div>
    </Layout>

  );
}

export default ServiceDetailPage;