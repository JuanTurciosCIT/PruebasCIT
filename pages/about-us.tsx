import { Layout } from "@/shared/Layout";
import { GetStaticPropsContext, NextPage } from "next";
import { getAboutUsContent } from "utils/services/AboutUs";
import { AboutContent } from "utils/types/AboutUs";
import { AboutUsHero } from "components/AboutUs/AboutUsHero";
import { AboutUsMetrics } from "components/AboutUs/Metrics";
import { MisionVisionComponent } from "components/AboutUs/MisionVision";
import { TheTeam } from "@/shared/TheTeam";
import { HeroFooter } from "@/shared/HeroFooter";
import CeoComment from "components/AboutUs/CeoComment";
import Customer from "components/AboutUs/Customers";
import { Team } from "components/AboutUs/Team";

const  AboutUs: NextPage<AboutContent> = ({ aboutHero, metricContent, aboutMetrics, companyValue, coComment, employees, aboutCustomers, footerHero, footerContent, employeesContent }) => {
    return <Layout footerContent={ footerContent }>
        <AboutUsHero content={aboutHero} />
        <AboutUsMetrics content={metricContent} metrics={aboutMetrics} />
        <MisionVisionComponent content={companyValue}/>
        <CeoComment content={coComment}/>
        <Team employees={employees} employeesContent={employeesContent}/>
        <Customer content={aboutCustomers} />
        <HeroFooter content={footerHero} />
    </Layout>
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
    const aboutUsContent =  await getAboutUsContent(context.locale);

    return {
        revalidate: 10,
        props: {
            ...aboutUsContent,
        }
    }
}

export default AboutUs;