import Footer from '../Footer';
import { NextRouter, useRouter } from 'next/router';

import { navLinks } from 'utils/constants/navLink.constant';
import { Pages } from 'utils/types/pages.enum';
import Header from '../Header';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
	const router: NextRouter = useRouter();

	const headerLinks = navLinks.filter((link) => {
		const pathname: Pages = router.pathname as Pages;
		return link.visibleIn.includes(pathname);
	});

	return (
		<>
			<Header navLinks={headerLinks} />
				{children}
			<Footer />
		</>
	);
}
