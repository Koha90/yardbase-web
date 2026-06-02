import { useEffect, useMemo, useState } from "react";

import type { Material } from "../../model/material";

import {
  calculateEstimate,
  type EstimateMode,
  type EstimateResult,
} from "../../model/estimate";

import styles from "./Calculator.module.scss";

interface EstimateModeOption {
  id: EstimateMode;
  title: string;
  description: string;
}

interface CalculatorProps {
  material: Material | null;
  onEstimateChange: (
    estimate: EstimateResult | null,
    mode: EstimateMode,
  ) => void;
}

const estimateModes: EstimateModeOption[] = [
  {
    id: "material",
    title: "Только материал",
    description: "Покрытие с учётом небольшого запаса.",
  },
  {
    id: "base",
    title: "Материал + основание",
    description: "Покрытие и ориентировочная подготовка основания.",
  },
  {
    id: "turnkey",
    title: "Под ключ",
    description: "Материал, основание и работы по укладке.",
  },
];

const areaFormatter = new Intl.NumberFormat("ru-RU", {
  maximumFractionDigits: 2,
});

const priceFormatter = new Intl.NumberFormat("ru-RU", {
  maximumFractionDigits: 0,
});

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

function modeClassName(selected: boolean) {
  return [styles.modeButton, selected ? styles.selectedMode : ""]
    .filter(Boolean)
    .join(" ");
}

export function Calculator({ material, onEstimateChange }: CalculatorProps) {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [mode, setMode] = useState<EstimateMode>("material");

  const lengthValue = positiveNumber(length);
  const widthValue = positiveNumber(width);

  const area =
    lengthValue !== null && widthValue !== null
      ? lengthValue * widthValue
      : null;

  const estimate = useMemo(() => {
    if (material === null || area === null) {
      return null;
    }

    return calculateEstimate({
      material,
      area,
      mode,
    });
  }, [area, material, mode]);

  useEffect(() => {
    onEstimateChange(estimate, mode);
  }, [estimate, mode, onEstimateChange]);

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
            <label className={styles.field}>
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

            <label className={styles.field}>
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

          <div className={styles.modeGroup}>
            <p className={styles.modeGroupTitle}>Что считать</p>

            <div className={styles.modes}>
              {estimateModes.map((estimateMode) => (
                <button
                  className={modeClassName(mode === estimateMode.id)}
                  key={estimateMode.id}
                  aria-pressed={mode === estimateMode.id}
                  onClick={() => setMode(estimateMode.id)}
                >
                  <span>{estimateMode.title}</span>
                  <small>{estimateMode.description}</small>
                </button>
              ))}
            </div>
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
              <dt>Запас материала</dt>
              <dd>{material.wastePercent}%</dd>
            </div>

            <div className={styles.row}>
              <dt>Расчётная площадь</dt>
              <dd>
                {estimate === null
                  ? "—"
                  : `${areaFormatter.format(estimate.materialArea)} м²`}
              </dd>
            </div>

            <div className={styles.row}>
              <dt>Материал</dt>
              <dd>
                {estimate === null
                  ? "—"
                  : `от ${priceFormatter.format(estimate.materialPrice)} ₽`}
              </dd>
            </div>

            {mode !== "material" && (
              <div className={styles.row}>
                <dt>Основание</dt>
                <dd>
                  {estimate?.basePrice == null
                    ? "—"
                    : `от ${priceFormatter.format(estimate.basePrice)} ₽`}
                </dd>
              </div>
            )}

            {mode === "turnkey" && (
              <div className={styles.row}>
                <dt>Работы</dt>
                <dd>
                  {estimate?.workPrice == null
                    ? "—"
                    : `от ${priceFormatter.format(estimate.workPrice)} ₽`}
                </dd>
              </div>
            )}

            <div className={styles.total}>
              <dt>Итого</dt>
              <dd>
                {estimate === null
                  ? "—"
                  : `от ${priceFormatter.format(estimate.totalPrice)} ₽`}
              </dd>
            </div>
          </dl>

          <p className={styles.note}>
            Расчёт ориентировочный: без подготовки основания, доставки,
            расходных материалов и стоимости работ.
          </p>
        </aside>
      </div>
    </div>
  );
}
