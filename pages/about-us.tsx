import { Layout } from "@/shared/Layout";
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import { getAboutUsContent } from "utils/services/AboutUs";
import { CommonContentService } from "utils/services/CommonContentService";
import { AboutContent } from "utils/types/AboutUs";
import { AboutUsHero } from "components/AboutUs/AboutUsHero";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { AboutUsMetrics } from "components/AboutUs/Metrics";
import { MisionVisionComponent } from "components/AboutUs/MisionVision";
import { TheTeam } from "@/shared/TheTeam";
import { CareerContentService } from "utils/services/CareerContentService";
import { HeroFooter } from "@/shared/HeroFooter";
import { Team } from "components/AboutUs/Team";
import CeoComment from "components/AboutUs/CeoComment";
import Customer from "components/AboutUs/Customers";

const  AboutUs: NextPage<AboutContent> = ({ aboutHero, metricContent, aboutMetrics, companyValue, coComment, employees, aboutCustomers, footerHero, footerContent }) => {
    return <Layout footerContent={ footerContent }>
        <AboutUsHero content={aboutHero} />
        <AboutUsMetrics />
        <MisionVisionComponent />
        <CeoComment />
        <TheTeam employees={employees} />
        <Customer />
        <HeroFooter content={footerHero} />
    </Layout>
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
    const aboutUsContent =  await getAboutUsContent(context.locale);

    return {
        props: {
            ...aboutUsContent,
        }
    }
}

export default AboutUs;