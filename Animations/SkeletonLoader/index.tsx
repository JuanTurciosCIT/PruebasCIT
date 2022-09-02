import ContentLoader from 'react-content-loader';
import styles from './skeleton.module.scss';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

export const SkeletonLoader = (props: any) => {
	useLockBodyScroll();

	return (
		<div className={styles.skeleton}>
			<ContentLoader
        width={1440}
        height={800}
        viewBox={'0 0 1440 800'}
        backgroundColor="#232323"
        foregroundColor="#2F2F2F"
        {...props}
      >
				<rect x='20' y='57' rx='4' ry='4' width='1440' height='84' />
				<rect x='217' y='157' rx='4' ry='4' width='1024' height='291' />
				<rect x='400' y='515' rx='4' ry='4' width='650' height='25' />
				<circle cx='420' cy='620' r='40' />
				<circle cx='560' cy='620' r='45' />
				<circle cx='725' cy='620' r='50' />
				<circle cx='900' cy='620' r='45' />
				<circle cx='1025' cy='620' r='40' />
				<rect x='400' y='725' rx='4' ry='4' width='650' height='25' />
			</ContentLoader>
		</div>
	);
};
