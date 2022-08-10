import { motion } from 'framer-motion';
import Footer from '../Footer';
import { NextRouter, useRouter } from 'next/router';

import { navLinks } from 'utils/types/navLink';
import { Pages } from 'utils/types/pages';
import Header from '../Header';

export default function Layout({ children }: { children: React.ReactNode }) {
	const router: NextRouter = useRouter();

	const variants = {
		hidden: { opacity: 0, x: -200, y: 0 },
		enter: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: 0, y: -100 },
	};

	const headerLinks = navLinks.filter((link) => {
		const pathname: Pages = router.pathname as Pages;
		return link.visibleIn.includes(pathname);
	});

	return (
		<>
			<Header navLinks={headerLinks} />
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
