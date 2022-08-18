import { motion, useAnimation } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  isVisible: boolean;
}

export const ScrollReveal = ({ children, isVisible } : ScrollRevealProps) => {
  const animationControl = useAnimation();

  if (isVisible) {
		animationControl.start({
			y: 0,
			opacity: 1,
			transition: {
				delay: 0.5
			}
		})
	}

	return (
    <motion.div initial={{ y: '80px', opacity: 0}} animate={animationControl}>
      {children}
    </motion.div>
	);
};
