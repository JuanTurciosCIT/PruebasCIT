import { motion } from 'framer-motion';
import Footer from '../Footer';

import Header from '../Header';

export default function Layout({ children }: { children: React.ReactNode }) {
	const variants = {
		hidden: { opacity: 0, x: -200, y: 0 },
		enter: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: 0, y: -100 },
	};

	return (
		<>
			<Header />
			<motion.main
				variants={variants}
				initial='hidden'
				animate='enter'
				exit='exit'
				transition={{ type: 'linear' }}
			>
				{children}
			</motion.main>
			<Footer />
		</>
	);
}
