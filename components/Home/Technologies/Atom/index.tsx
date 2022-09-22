import { motion } from 'framer-motion';
import Image from 'next/image';

import citLogo from '@/images/cit_logo.png';
import styles from './atom.module.scss';
import { TechnologiesSection } from 'utils/types/homeContent.interface';

interface AtomProps {
	innerRingTechnologies: Required<TechnologiesSection[]>;
	middleRingTechnologies: Required<TechnologiesSection[]>;
	outerRingTechnologies: Required<TechnologiesSection[]>;
	currentTech: TechnologiesSection;
	handleTechClick: (tech: TechnologiesSection) => void;
}

export const TechnologiesAtom = ({
	innerRingTechnologies,
	middleRingTechnologies,
	outerRingTechnologies,
	currentTech,
	handleTechClick,
}: AtomProps) => {
	return (
		<motion.div
			className={styles.atomContainer}
			// drag
			// dragConstraints={{ top: -10, left: -10, bottom: 10, right: 10 }}
		>
			<div className={styles.logo}>
				<Image src={citLogo} alt='CIT Logo'
					layout='fill'
					placeholder='blur'
					quality={70}
					// blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
				/>
			</div>

			{/* Inner ring */}
			<div className={styles.innerRing}>
				{innerRingTechnologies.map((tech, index) => (
					<button
						className={styles[`innerTech${index + 1}`]}
						key={tech.id}
						onClick={() => handleTechClick(tech)}
						active-attr={(tech.name == currentTech.name).toString()}
					>
						<Image
							priority
							// lazyBoundary='600px'
							quality={70}
							className={styles.logoFilter}
							src={tech.logo}
							alt={tech.name}
							layout='fill'
							objectFit='contain'
							placeholder='blur'
							blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
						/>
					</button>
				))}
			</div>

			{/* Middle Ring */}
			<div className={styles.midRing}>
				{middleRingTechnologies.map((tech, index) => (
					<button
						className={styles[`middleTech${index + 1}`]}
						key={tech.id}
						onClick={() => handleTechClick(tech)}
						active-attr={(tech.name == currentTech.name).toString()}
					>
						<Image
							priority
							// lazyBoundary='600px'
							quality={70}
							className={styles.logoFilter}
							src={tech.logo}
							alt={tech.name}
							layout='fill'
							objectFit='contain'
							placeholder='blur'
							blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
						/>
					</button>
				))}

				{/* dots */}
				<div className={styles.dot1}></div>
				<div className={styles.dot2}></div>
				<div className={styles.dot3}></div>
				<div className={styles.dot4}></div>
				<div className={styles.dot5}></div>
			</div>

			{/* Outer ring */}
			<div className={styles.largerRing}>
				{outerRingTechnologies.map((tech, index) => (
					<button
						className={styles[`largeTech${index + 1}`]}
						key={tech.id}
						onClick={() => handleTechClick(tech)}
						active-attr={(tech.name == currentTech.name).toString()}
					>
						<Image
							priority
							// lazyBoundary='600px'
							quality={70}
							className={styles.logoFilter}
							src={tech.logo}
							alt={tech.name}
							layout='fill'
							objectFit='contain'
							placeholder='blur'
							blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
						/>
					</button>
				))}
			</div>
		</motion.div>
	);
};
