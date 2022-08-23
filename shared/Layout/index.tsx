import Footer from '../Footer';
import { NextRouter, useRouter } from 'next/router';
import { ReactNode } from 'react';

import { navLinks } from 'utils/constants/navLink.constant';
import { Pages } from 'utils/types/pages.enum';
import Header from '../Header';
import { FooterSection } from 'utils/types/homeContent.interface';

interface LayoutProps {
	children: ReactNode;
	footerContent: FooterSection;
}

export default function Layout({ children, footerContent }: LayoutProps) {
	const router: NextRouter = useRouter();

	const headerLinks = navLinks.filter((link) => {
		const pathname: Pages = router.pathname as Pages;
		return link.visibleIn.includes(pathname);
	});

	return (
		<>
			<Header navLinks={headerLinks} />
				{children}
			<Footer content={footerContent} />
		</>
	);
}
