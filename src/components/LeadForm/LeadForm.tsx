import { useState, type SubmitEventHandler } from "react";

import {
  estimateModeLabels,
  type EstimateMode,
  type EstimateResult,
} from "../../model/estimate";
import type { Material } from "../../model/material";

import styles from "./LeadForm.module.scss";

const areaFormatter = new Intl.NumberFormat("ru-RU", {
  maximumFractionDigits: 2,
});

const priceFormatter = new Intl.NumberFormat("ru-RU", {
  maximumFractionDigits: 0,
});

interface LeadFormProps {
  material: Material | null;
  estimate: EstimateResult | null;
  mode: EstimateMode;
}

export function LeadForm({ material, estimate, mode }: LeadFormProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const canSubmit =
    material !== null && estimate !== null && contact.trim() !== "";

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!canSubmit) {
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className={styles.card} aria-labelledby="lead-success-title">
        <div className={styles.success}>
          <p className={styles.eyebrow}>Заявка подготовлена</p>

          <h2 id="lead-success-title">
            Осталось подключить отправку на сервер
          </h2>

          <p>
            Сейчас форма работает как frontend-прототип. Когда подключим Go API,
            эти данные будут уходить в backend и сохраняться как заявка.
          </p>

          <button
            className={styles.secondaryButton}
            type="button"
            onClick={() => setSubmitted(false)}
          >
            Изменить заявку
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.card} aria-labelledby="lead-title">
      <div className={styles.content}>
        <div>
          <p className={styles.eyebrow}>Заявка по расчёту</p>

          <h2 id="lead-title">Получить консультацию по покрытию</h2>

          <p className={styles.description}>
            Оставьте контакт, а позже мы отправим этот расчёт в backend и
            превратис его в настоящую заявку.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.field}>
            <span>Имя</span>

            <input
              type="text"
              value={name}
              placeholder="Например, Алексей"
              autoComplete="name"
              onChange={(event) => setName(event.target.value)}
            />
          </label>

          <label className={styles.field}>
            <span>Телефон или Telegram</span>

            <input
              type="text"
              value={contact}
              placeholder="+7... или @username"
              autoComplete="tel"
              onChange={(event) => setContact(event.target.value)}
            />
          </label>

          <label className={styles.field}>
            <span>Комментарий</span>

            <textarea
              value={comment}
              placeholder="Например, нужна парковка на даче, основание пока грунт"
              rows={4}
              onChange={(event) => setComment(event.target.value)}
            />
          </label>

          <button
            className={styles.submitButton}
            type="submit"
            disabled={!canSubmit}
          >
            Подготовить заявку
          </button>
        </form>
      </div>

      <aside className={styles.summary}>
        <p className={styles.summaryTitle}>Ваш расчёт</p>

        {material === null || estimate === null ? (
          <p className={styles.emptySummary}>
            Выберите покрытие и укажите размеры участка, чтобы здесь появилась
            выжимка расчёта.
          </p>
        ) : (
          <dl className={styles.values}>
            <div>
              <dt>Покрытие</dt>
              <dd>{material.title}</dd>
            </div>

            <div>
              <dt>Режим</dt>
              <dd>{estimateModeLabels[mode]}</dd>
            </div>

            <div>
              <dt>Площадь</dt>
              <dd>{areaFormatter.format(estimate.area)} м²</dd>
            </div>

            <div className={styles.total}>
              <dt>Ориентир</dt>
              <dd>от {priceFormatter.format(estimate.totalPrice)} ₽</dd>
            </div>
          </dl>
        )}
      </aside>
    </section>
  );
}
