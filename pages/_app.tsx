import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.scss';

// Components
import { useGlobalLoading } from '@/hooks/useGlobalLoading';
import { GlobalLoader } from '@/shared/GlobalLoader';
import { AnimatedContainer } from 'Animations/AnimatedContainer';

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
			<AnimatedContainer
				hidden={{ y: '-90px', opacity: 0 }}
				visible={{
					y: 0,
					opacity: 1,
					transition: { delay: 0.3, duration: 1 },
				}}
				>
				{isLoading && <GlobalLoader />}
				<Component {...pageProps} />
			</AnimatedContainer>
		</>
	);
}

export default MyApp;
