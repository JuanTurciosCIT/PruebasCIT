import { CareerEmployeeInterface } from "../careerContent.interface";
import { FooterHeroSection, FooterSection } from "../commonContent.interface";
import { AboutHeroInterface, AboutMetricsInterface, AboutMetricsSectionInterface } from "./aboutUsContent.interfaces";

export interface AboutContent {
    aboutHero: AboutHeroInterface;
    // aboutMetrics: AboutMetricsInterface[];
    // aboutMetricsSection: AboutMetricsSectionInterface;
    employees: CareerEmployeeInterface[];
    footerHero: FooterHeroSection;
    footerContent: FooterSection;
}