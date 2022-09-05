// import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.scss';
import { useGlobalLoading } from '@/hooks/useGlobalLoading';
// import { SkeletonLoader } from 'Animations/SkeletonLoader';
// import { useMediaQuery } from '@/hooks/useMediaQuery';
import GlobalLoader from '@/shared/GlobalLoader';
import { AnimatedContainer } from 'Animations/AnimatedContainer';

function MyApp({ Component, pageProps }: AppProps) {
	// const [loadingSkeleton, setLoadingSkeleton] = useState<boolean>(true);
	const isLoading = useGlobalLoading();
	// const isMobile = useMediaQuery('(max-width: 428px)');

  // setTimeout(() => {
  //   setLoadingSkeleton(false);
  // }, 2500);
	
	return (
		<>
			<Head>
				<title>Creative Information Technologies</title>
				<meta
					name='description'
					content='We are nearshore software development lab with a team of top-notch software developers and designers on the latin America region.'
				/>
			</Head>
			{/* {(loadingSkeleton && !isMobile) && <SkeletonLoader />} */}
			{isLoading && <GlobalLoader />}
			<AnimatedContainer hidden={{ y: '-90px', opacity: 0 }} visible={{ y: 0, opacity: 1, transition: { delay: 0.8, duration: 1.2 } }}>
				<Component {...pageProps} />
			</AnimatedContainer>
			{/* <Component {...pageProps} /> */}
		</>
	);
}

export default MyApp;
