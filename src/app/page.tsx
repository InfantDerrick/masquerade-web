import styles from './page.module.css';
import Image from 'next/image';

const Home = () => {
  return (
    <main className={styles.main}>
      <p className={styles.page_title}>Coming Soon</p>
      <p className={styles.description}>
        THE MASQUERADE WILL BEGIN SHORTLY
      </p>
    </main>
  );
}

export default Home;
