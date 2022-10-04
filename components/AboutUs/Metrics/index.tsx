import styles from './metrics.module.scss'



export const AboutUsMetrics = () => {

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>

                <div className={styles.descriptionContainer}>
                    <h1 className={styles.title}>Top Experters working with you</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                <div className={styles.metricsContainer}>
                    <div>
                        <h3 className={styles.metricTitle}>+102</h3>
                        <p>Clients around the globe</p>
                    </div>
                    <div>
                        <h3 className={styles.metricTitle}>+48</h3>
                        <p>Seniors collaborators</p>
                    </div>
                    <div>
                        <h3 className={styles.metricTitle}>15k</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div>
                        <h3 className={styles.metricTitle}>+5</h3>
                        <p>Years of experience</p>
                    </div>
                    
                </div>

            </div>
        </section>
    )
}