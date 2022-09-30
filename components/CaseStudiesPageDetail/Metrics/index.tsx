import CountUp from 'react-countup';
import { useMemo } from 'react';

import styles from './caseStudyMetrics.module.scss';
import utils from 'styles/utils.module.scss';
import { CaseStudyMetricsInterface } from 'utils/types/caseStudy.interface';

export const CaseStudyMetrics = ({
	metrics,
}: {
	metrics: CaseStudyMetricsInterface[];
}) => {

	const formatValue = (value: number) => {
		return value % 2 === 0 ? String(value.toLocaleString('en-US')) : value.toLocaleString('en-US');
	}

	const memoizedValue = useMemo(() => formatValue, []);

	return (
		<section className={styles.section}>
			<div className={styles.wrapper}>
				{metrics.map((metric) => (
					<div className={styles.card} key={metric.id}>
						<h3 className={`${utils.headingMedium} ${styles.title}`}>
							<CountUp
								end={metric.metricValue}
								duration={1}
								enableScrollSpy
								decimals={1}
								decimal="."
								separator=","
								formattingFn={memoizedValue}
							/>{' '}
							{metric.suffixEN || metric.suffixES}
						</h3>
						<p className={`${utils.textMedium} ${styles.desc}`}>
							{metric.descriptionEN || metric.descriptionES}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};
