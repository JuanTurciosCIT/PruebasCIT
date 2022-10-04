import { FooterHeroSection, FooterSection } from "../commonContent.interface";
import { AboutHeroInterface, AboutMetricsInterface, AboutMetricsSectionInterface } from "./aboutUsContent.interfaces";

export interface AboutContent {
    aboutHero: AboutHeroInterface;
    // aboutMetrics: AboutMetricsInterface[];
    // aboutMetricsSection: AboutMetricsSectionInterface;
    footerHero: FooterHeroSection;
    footerContent: FooterSection;
}