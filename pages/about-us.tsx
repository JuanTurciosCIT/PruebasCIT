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

const  AboutUs: NextPage<AboutContent> = ({ aboutHero, footerContent, footerHero, employees }) => {
    return <Layout footerContent={ footerContent }>
        <AboutUsHero content={aboutHero} />
        <AboutUsMetrics />
        <MisionVisionComponent />
        <TheTeam employees={employees} theme='theme2' />
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