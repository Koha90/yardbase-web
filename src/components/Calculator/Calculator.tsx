import { useState } from "react";

import type { Material } from "../../model/material";

import styles from "./Calculator.module.scss";

const areaFormatter = new Intl.NumberFormat("ru-RU", {
  maximumFractionDigits: 2,
});

const priceFormatter = new Intl.NumberFormat("ru-RU", {
  maximumFractionDigits: 0,
});

interface CalculatorProps {
  material: Material | null;
}

function positiveNumber(value: string): number | null {
  const normalizedValue = value.trim().replace(",", ".");

  if (normalizedValue === "") {
    return null;
  }

  const number = Number(normalizedValue);

  if (!Number.isFinite(number) || number <= 0) {
    return null;
  }

  return number;
}

export function Calculator({ material }: CalculatorProps) {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");

  const lengthValue = positiveNumber(length);
  const widthValue = positiveNumber(width);

  const area =
    lengthValue !== null && widthValue !== null
      ? lengthValue * widthValue
      : null;

  const estimatePrice =
    material !== null && area !== null ? material.priceFrom * area : null;

  if (material === null) {
    return (
      <div className={styles.card}>
        <div className={styles.empty}>
          <h3>Сначала выберите покрытие</h3>

          <p className={styles.emptyDescription}>
            Выберите подходящий материал выше, а затем укажите размеры участка
            для предварительного расчёта.
          </p>

          <a className={styles.selectLink} href="#materials">
            Перейти к материалам
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.layout}>
        <div className={styles.controls}>
          <p className={styles.selectedLabel}>Выбрано покрытие</p>

          <h3 className={styles.materialTitle}>{material.title}</h3>

          <p className={styles.materialDescription}>{material.description}</p>

          <div className={styles.fields}>
            <label className={styles.fields}>
              <span>Длина участка, м</span>

              <input
                className={styles.input}
                inputMode="decimal"
                type="text"
                value={length}
                placeholder="Например, 6"
                autoComplete="off"
                onChange={(event) => setLength(event.target.value)}
              />
            </label>

            <label className={styles.fields}>
              <span>Ширина участка, м</span>

              <input
                className={styles.input}
                inputMode="decimal"
                type="text"
                value={width}
                placeholder="Например, 4,5"
                autoComplete="off"
                onChange={(event) => setWidth(event.target.value)}
              />
            </label>
          </div>
        </div>

        <aside className={styles.summary}>
          <p className={styles.summaryTitle}>Предварительный расчёт</p>

          <dl className={styles.values}>
            <div className={styles.row}>
              <dt>Площадь участка</dt>
              <dd>
                {area === null
                  ? "Укажите размеры"
                  : `${areaFormatter.format(area)} м²`}
              </dd>
            </div>

            <div className={styles.row}>
              <dt>Цена покрытия</dt>
              <dd>
                от {priceFormatter.format(material.priceFrom)} ₽ /{" "}
                {material.unit}
              </dd>
            </div>

            <div className={styles.total}>
              <dt>Стоимость материала</dt>
              <dd>
                {estimatePrice === null
                  ? "—"
                  : `от ${priceFormatter.format(estimatePrice)} ₽`}
              </dd>
            </div>
          </dl>

          <p className={styles.note}>
            Расчёт ориментировочный: без подготовки основания, доставки,
            расходных материалов и стоимости работ.
          </p>
        </aside>
      </div>
    </div>
  );
}
