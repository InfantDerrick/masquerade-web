import styles from './page.module.css';
import Image from 'next/image';

const Home = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Coming Soon</h1>
      <p className={styles.description}>
        We're working hard to bring you Masquerade. Stay tuned!
      </p>
    </main>
  );
}

export default Home;
