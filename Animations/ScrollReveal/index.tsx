import { motion, useAnimation } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  isVisible: boolean;
	className?: string;
}

export const ScrollReveal = ({ children, isVisible, className } : ScrollRevealProps) => {
  const animationControl = useAnimation();

  if (isVisible) {
		animationControl.start({
			y: 0,
			opacity: 1,
			transition: {
				delay: 0.3,
				duration: 0.5
			}
		})
	}

	return (
    <motion.div className={className} initial={{ y: '110px', opacity: 0}} animate={animationControl}>
      {children}
    </motion.div>
	);
};
