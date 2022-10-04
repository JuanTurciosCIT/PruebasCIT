import { Layout } from "@/shared/Layout";
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import { getAboutUsContent } from "utils/services/AboutUs";
import { CommonContentService } from "utils/services/CommonContentService";
import { AboutContent } from "utils/types/AboutUs";
import { AboutUsHero } from "components/AboutUs/AboutUsHero";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const  AboutUs: NextPage<AboutContent> = ({ aboutHero, footerContent, footerHero }) => {
    console.log(aboutHero);
    return <Layout footerContent={ footerContent }>
        <AboutUsHero content={aboutHero} />
    </Layout>
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
    const aboutUsContent =  await getAboutUsContent(context.locale);

    console.log(aboutUsContent);
    return {
        props: {
            ...aboutUsContent
        }
    }
}

export default AboutUs;