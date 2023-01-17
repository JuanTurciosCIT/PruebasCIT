import styles from './quoteAndResume.module.scss';


const QuoteAndResume = () => {
    return(
        <div className={styles.QuoteAndResume}  >

            <div className={styles.container} >
                
                {/** Frase */}

                <section className={styles.quoteContainer} >

                    <div  className={styles.quote}  >
                        Planning before development, saved Us more that 50k in reprocess.

                        <div className={styles.doubleQuotes}  ></div>
                    </div>

                    <div  className={styles.quoteFooter} >
                        <section  className={styles.name} >Luis Fernández</section>
                        <section  className={styles.jobTittle}  >CEO at Pizza Hut</section>
                    </div>
                </section>

                {/** Review */}
                <section className={styles.reviewContainer}  >
                    
                    <div className={styles.TitleReview}  >
                        In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc.
                    </div>

                    <div  className={styles.content} >
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </div>

                    <div>
                        <ul className={styles.unorderedList}   >
                            <li className={styles.listItem}   >UX Research</li>
                            <li className={styles.listItem}   >Benchmarking</li>
                            <li className={styles.listItem}   >Design Sprint</li>
                            <li className={styles.listItem}   >User Personas </li>
                            <li className={styles.listItem}   >User Journey Maps</li>
                            <li className={styles.listItem}   >Affinity Diagram</li>
                            <li className={styles.listItem}   >User flows</li>
                            <li className={styles.listItem}   >Navigation Tree</li>
                            <li className={styles.listItem}   >Prototype</li>
                        </ul>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default  QuoteAndResume;