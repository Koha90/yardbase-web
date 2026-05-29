import { Container } from '../Container/Container';

import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div>
          <p className={styles.brand}>Основа Двора</p>
          <p className={styles.description}>
            Подбор покрытий и материалов для благоустройства участка.
          </p>
        </div>

        <p className={styles.copyright}>
          © 2026 Yardbase
        </p>
      </Container>
    </footer>
  );
}
