import Image from 'next/future/image';

import styles from './achievements.module.scss';
import utils from 'styles/utils.module.scss';
import { CaseStudyAchievement } from 'utils/types/caseStudy.interface';

export const Achievements = ({ achievements }: { achievements: CaseStudyAchievement[] }) => {
	return (
		<div className={styles.listWrapper}>
			{achievements.map((achievement) => (
				<div className={styles.container} key={achievement.id}>
					<div className={styles.image}><Image src={achievement.picture} alt={achievement.titleEN || achievement.titleES + ''} quality={100} fill /></div>
					<div className={styles.text}>
						<h2 className={utils.headingMedium}>
							{achievement.titleEN || achievement.titleES}
						</h2>
						{(achievement.descriptionEN || achievement.descriptionES)
							?.split('\n\n')
							.map((paragraph, index) => (
								<div className={utils.textSmall} key={paragraph+index}>
									<p>{paragraph}</p>
									<br />
								</div>
							))}
					</div>
				</div>
			))}
		</div>
	);
};
