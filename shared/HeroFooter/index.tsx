import utils from 'styles/utils.module.scss';
import styles from './herofooter.module.scss';

export default function HeroFooter() {
	return (
		<section className={styles.heroFooter}>
			<div className={styles.wrapper}>
				<h1 className={`${styles.title} ${utils.headingLarge}`}>
					Ready to get started?
				</h1>
				<p className={styles.description}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus eu sit
					suspendisse aliquet arcu bibendum. Turpis commodo libero vulputate
					sed. Sagittis et, euismod sagittis, leo commodo, a amet. Metus felis
					ipsum feugiat.
				</p>
				<button className={styles.button}>Contact Us</button>
			</div>
		</section>
	);
}
