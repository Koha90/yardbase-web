import type { Material, MaterialID } from "../../model/material";
import type { PurposeID } from "../../model/purpose";

import styles from "./MaterialCard.module.scss";

const priceFormatter = new Intl.NumberFormat("ru-RU");

const purposeLabels: Record<PurposeID, string> = {
  parking: "Парковка",
  path: "Дорожка",
  playground: "Детская зона",
  terrace: "Терраса",
};

interface MaterialCardProps {
  material: Material;
  selected: boolean;
  onCalculate: (materialID: MaterialID) => void;
}

export function MaterialCard({
  material,
  selected,
  onCalculate,
}: MaterialCardProps) {
  const classNames = [styles.card, selected ? styles.selectedCard : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={classNames}>
      <div>
        <h3 className={styles.title}>{material.title}</h3>

        <p className={styles.description}>{material.description}</p>

        <ul className={styles.purposes} aria-label="Подходит для">
          {material.purposes.map((purposeID) => (
            <li key={purposeID}>{purposeLabels[purposeID]}</li>
          ))}
        </ul>
      </div>

      <div className={styles.footer}>
        <p className={styles.price}>
          <span>от {priceFormatter.format(material.priceFrom)} ₽</span>
          <small>/ {material.unit}</small>
        </p>

        <button
          className={styles.link}
          type="button"
          aria-pressed={selected}
          onClick={() => onCalculate(material.id)}
        >
          {selected ? "В расчёте" : "Рассчитать"}
        </button>
      </div>
    </article>
  );
}
