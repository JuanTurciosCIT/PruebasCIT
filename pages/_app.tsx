import type { AppProps } from 'next/app';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';

import GlobalLoader from '@/shared/GlobalLoader';
import '@/styles/globals.scss';
import { useGlobalLoading } from '@/hooks/useGlobalLoading';
import { useRouter } from 'next/router';
import { AnimatedContainer } from 'Animations/AnimatedContainer';

function MyApp({ Component, pageProps }: AppProps) {
	const isLoading = useGlobalLoading();
  const router = useRouter();

	return (
		<>
			<Head>
				<title>Creative Information Technologies</title>
				<meta
					name='description'
					content='We are nearshore software development lab with a team of top-notch software developers and designers on the latin America region.'
				/>
			</Head>
			{isLoading && <GlobalLoader />}
			<AnimatedContainer hidden={{ y: '80px', opacity: 0 }} visible={{ y: 0, opacity: 1 }}>
				<Component {...pageProps} />
			</AnimatedContainer>
		</>
	);
}

export default MyApp;
