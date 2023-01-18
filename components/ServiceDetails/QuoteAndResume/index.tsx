import { SummaryContent } from 'utils/types/serviceDetails.interface';
import styles from './quoteAndResume.module.scss';


const QuoteAndResume = ({summaryContent}:{summaryContent:SummaryContent}) => {
    return(
        <div className={styles.QuoteAndResume}  >

            <div className={styles.container} >
                
                {/** Frase */}

                <section className={styles.quoteContainer} >

                    <div  className={styles.quote}  >
                   

                        {summaryContent.customerFeedbackEs?.title ?? summaryContent.customerFeedbackEn?.title }
                   

                        <div className={styles.doubleQuotes}></div>
                    </div>

                    <div  className={styles.quoteFooter} >
                        <section  className={styles.name} >
                        {summaryContent.customerFeedbackEn?.author || summaryContent.customerFeedbackEs?.author}

                        </section>
                        <section  className={styles.jobTittle}  >
                            {summaryContent.customerFeedbackEn?.authorPosition ?? summaryContent.customerFeedbackEs?.authorPosition}
                        </section>
                    </div>
                </section>

                {/** Review */}
                <section className={styles.reviewContainer}  >
                    
                    <div className={styles.TitleReview}  >
                        {summaryContent.tittleEn?? summaryContent.tittleEs}
                    </div>

                    <div  className={styles.content} >
                        {summaryContent.captionEn ?? summaryContent.captionEs}
                    </div>

                    <div>
                        <ul className={styles.unorderedList}   >
                            {
                                summaryContent.featuresEn?.map((item) => (
                                    <li className={styles.listItem} key={item}   >{item}</li>

                                ))

                            }
                            {
                                summaryContent.featuresEs?.map((item) => (
                                    <li className={styles.listItem} key={item}   >{item}</li>

                                ))
                            }

                        </ul>
                        
                    </div>
                </section>

            </div>
        </div>
    )
}

export default  QuoteAndResume;