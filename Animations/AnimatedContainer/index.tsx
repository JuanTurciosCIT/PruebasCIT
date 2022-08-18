import { motion, AnimatePresence, AnimationControls, TargetAndTransition, Target } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import styles from './animatedContainer.module.scss';

interface AnimatedContainerProps {
	children: ReactNode;
	hidden: Target;
	visible: AnimationControls | TargetAndTransition;
	exit?: TargetAndTransition;
}

// const variants: Variants = animationVariants;

export const AnimatedContainer = ({ children, hidden, visible, exit }: AnimatedContainerProps) => {
	const { asPath, basePath, pathname } = useRouter();

	return (
		<>
			<AnimatePresence exitBeforeEnter initial={true}>
				<motion.div
					layoutScroll
					key={pathname}
					initial={hidden}
					animate={visible}
					exit={exit}
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</>
	);
};
