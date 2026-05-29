import type { Material } from '../../model/material';
import type { PurposeID } from '../../model/purpose';

import styles from './MaterialCard.module.scss';

const priceFormatter = new Intl.NumberFormat('ru-RU');

const purposeLabels: Record<PurposeID, string> = {
  parking: 'Парковка',
  path: 'Дорожка',
  playground: 'Детская зона',
  terrace: 'Терраса',
};

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
          {material.purposes.map((purposeID) => (
            <li key={purposeID}>
              {purposeLabels[purposeID]}
            </li>
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
