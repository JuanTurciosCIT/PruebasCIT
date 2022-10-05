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

const  AboutUs: NextPage<AboutContent> = ({ aboutHero, footerContent, footerHero, employees }) => {
    return <Layout footerContent={ footerContent }>
        <AboutUsHero content={aboutHero} />
        <AboutUsMetrics />
        <MisionVisionComponent />
        <TheTeam employees={employees} theme='theme2' />
    </Layout>
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
    const aboutUsContent =  await getAboutUsContent(context.locale);
    const employees = await CareerContentService.getEmployees(context.locale as string);

    return {
        props: {
            ...aboutUsContent,
            employees
        }
    }
}

export default AboutUs;