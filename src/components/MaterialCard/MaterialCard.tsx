import type { Material } from '../../model/material';

import styles from './MaterialCard.module.scss';

const priceFormatter = new Intl.NumberFormat('ru-RU');

interface MaterialCardProps {
  material: Material;
}

export function MaterialCard({ material }: MaterialCardProps) {
  return (
    <article className={styles.card}>
      <div>
        <h3 className={styles.title}>{material.title}</h3>

        <p className={styles.description}>{material.description}</p>

        <ul className={styles.purposes} aria-label="Подходит для">
          {material.purposes.map((purpose) => (
            <li key={purpose}>{purpose}</li>
          ))}
        </ul>
      </div>

      <div className={styles.footer}>
        <p className={styles.price}>
          <span>от {priceFormatter.format(material.priceFrom)} ₽</span>
          <small>/ {material.unit}</small>
        </p>

        <a className={styles.link} href="#calculator">
          Рассчитать
        </a>
      </div>
    </article>
  );
}
