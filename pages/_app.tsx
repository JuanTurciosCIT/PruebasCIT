import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.scss';
import { useGlobalLoading } from '@/hooks/useGlobalLoading';
import { SkeletonLoader } from 'Animations/SkeletonLoader';

function MyApp({ Component, pageProps }: AppProps) {
	const isLoading = useGlobalLoading();
	
	return (
		<>
			<Head>
				<title>Creative Information Technologies</title>
				<meta
					name='description'
					content='We are nearshore software development lab with a team of top-notch software developers and designers on the latin America region.'
				/>
			</Head>
			{isLoading && <SkeletonLoader />}
			{/* <AnimatedContainer hidden={{ y: '80px', opacity: 0 }} visible={{ y: 0, opacity: 1 }}>
				<Component {...pageProps} />
			</AnimatedContainer> */}
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
