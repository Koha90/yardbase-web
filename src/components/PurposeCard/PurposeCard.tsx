import type { Purpose } from '../../model/purpose';

import styles from './PurposeCard.module.scss';

interface PurposeCardProps {
  purpose: Purpose;
}

export function PurposeCard({ purpose }: PurposeCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.icon} aria-hidden="true">
        {purpose.title.slice(0, 1)}
      </div>

      <h3 className={styles.title}>{purpose.title}</h3>

      <p className={styles.description}>{purpose.description}</p>

      <a className={styles.link} href="#materials">
        Смотреть материалы
        <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}
