import Footer from '../Footer';
import { ReactNode } from 'react';

import { Header } from '../Header';
import { FooterSection } from 'utils/types/commonContent.interface';

interface LayoutProps {
	children: ReactNode;
	footerContent: FooterSection;
}

export const Layout = ({ children, footerContent }: LayoutProps) => {
	return (
		<>
			<Header />
				{children}
			<Footer content={footerContent} />
		</>
	);
}
