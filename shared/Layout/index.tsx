import Footer from '../Footer';
import { ReactNode } from 'react';

import Header from '../Header';
import { FooterSection } from 'utils/types/homeContent.interface';

interface LayoutProps {
	children: ReactNode;
	footerContent: FooterSection;
}

export default function Layout({ children, footerContent }: LayoutProps) {
	return (
		<>
			<Header />
				{children}
			<Footer content={footerContent} />
		</>
	);
}
