import styles from './layout.module.scss';

const name = 'Obed Paz';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}