import { AboutMetric, AboutMetricContent } from 'utils/types/AboutUs/aboutUsContent.interfaces'
import styles from './metrics.module.scss'
import { ScrollReveal } from 'Animations/ScrollReveal';
import { useInView } from 'react-intersection-observer';



export const AboutUsMetrics = ({ content, metrics }: {content: AboutMetricContent, metrics:AboutMetric[] } ) => {
    const { inView, entry, ref } = useInView();
    return ( 
        <section className={styles.section} ref={ref}>
			<ScrollReveal isVisible={inView}> 
                <div className={styles.wrapper}>

                    <div className={styles.descriptionContainer}>
                        <p className={styles.title}>{content.titleES || content.titleEN}</p>
                        <p>{content.captionEN || content.captionES}</p>
                    </div>
                    {/*       Metrics     */}
                    <div className={styles.metricsContainer}>  

                        {
                            metrics.map((metric) => (
                                <div>
                                    <h3 className={styles.metricTitle}>{ metric.prefix === '+'? metric.prefix + metric.value : metric.value + metric.prefix}</h3>
                                    <p>{metric.descriptionEN || metric.descriptionES}</p>
                                </div>   
                            ))
                        }          
                                            
                    </div>

                </div>
            
            </ScrollReveal>

        </section>
    )
}