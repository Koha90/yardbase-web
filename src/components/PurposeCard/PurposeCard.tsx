import type { Purpose, PurposeID } from '../../model/purpose';

import styles from './PurposeCard.module.scss';

interface PurposeCardProps {
  purpose: Purpose;
  selected: boolean;
  onSelect: (purposeID: PurposeID) => void;
}

export function PurposeCard({
  purpose,
  selected,
  onSelect,
}: PurposeCardProps) {
  const classNames = [
    styles.card,
    selected ? styles.selected : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      className={classNames}
      type="button"
      aria-pressed={selected}
      onClick={() => onSelect(purpose.id)}
    >
      <span className={styles.icon} aria-hidden="true">
        {purpose.title.slice(0, 1)}
      </span>

      <span className={styles.title}>{purpose.title}</span>

      <span className={styles.description}>
        {purpose.description}
      </span>

      <span className={styles.action}>
        {selected ? 'Показать все решения' : 'Показать решения'}
        <span aria-hidden="true">→</span>
      </span>
    </button >
  );
}
