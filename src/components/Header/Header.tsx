import { Button } from "../Button/Button";
import { Container } from "../Container/Container";

import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <a className={styles.brand} href="/" aria-label="Основа Двора, на главную">
          <span className={styles.mark}>O</span>

          <span className={styles.name}>
            Основа <strong>Двора</strong>
          </span>
        </a>

        <nav className={styles.navigation} aria-label="Основная навигация">
          <a href="#solutions">Решения</a>
          <a href="#materials">Материалы</a>
          <a href="#calculator">Расчёт</a>
        </nav>

        <div className={styles.action}>
          <Button href="#calculator" size="small">
            Расчитать
          </Button>
        </div>
      </Container>
    </header>
  );
}
