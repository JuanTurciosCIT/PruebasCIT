import { CareerEmployeeInterface } from "../careerContent.interface";
import { FooterHeroSection, FooterSection } from "../commonContent.interface";
import { AboutHeroInterface, AboutMetric, AboutCompanyValue, AboutMetricContent, AboutCoComment, AboutCustomers } from "./aboutUsContent.interfaces";

export interface AboutContent {
    aboutHero: AboutHeroInterface;
    metricContent: AboutMetricContent;
    aboutMetrics: AboutMetric[];
    companyValue: AboutCompanyValue;
    coComment : AboutCoComment;
    employees: CareerEmployeeInterface[];
    aboutCustomers?: AboutCustomers;
    footerHero: FooterHeroSection;
    footerContent: FooterSection;
}