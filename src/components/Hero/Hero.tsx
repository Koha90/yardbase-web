import { Button } from "../Button/Button";
import { Container } from "../Container/Container";

import styles from './Hero.module.scss';

const benefits = [
  'Подбор покрытия',
  'Расчёт материалов',
  'Решения для участка',
];

const previewMaterials = [
  {
    title: 'Тротуарная плитка',
    price: 'от 1 250 ₽ / м²',
    selected: true,
  },
  {
    title: 'Каменный ковёр',
    price: 'от 2900 ₽ / м²',
    selected: false,
  },
];

export function Hero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.layout}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            Благоустройство частных территорий
          </p>

          <h1 className={styles.title}>
            От идеи во дворе до точного расчёта материалов
          </h1>

          <p className={styles.description}>
            Подберём подходящее покрытие для дорожки, парковки,
            детской зоны или террасы и поможем понять объём материалов.
          </p>

          <div className={styles.buttons}>
            <Button href="#solution">
              Подобрать покрытие
            </Button>

            <Button href="#materials" variant="secondary">
              Смотреть материалы
            </Button>
          </div>

          <ul className={styles.benefits} aria-label="Возможности сервиса">
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div className={styles.preview} aria-label="Пример подбора покрытия">
          <div className={styles.previewHeader}>
            <div>
              <p className={styles.previewLabel}>Пример расчёта</p>
              <h2 className={styles.previewTitle}>Парковка у дома</h2>
            </div>

            <span className={styles.status}>Демо</span>
          </div>

          <div className={styles.parameters}>
            <div className={styles.parameter}>
              <span>Площадь</span>
              <strong>42 м²</strong>
            </div>

            <div className={styles.parameter}>
              <span>Нагрузка</span>
              <strong>Легковой автомобиль</strong>
            </div>
          </div>

          <p className={styles.materialsTitle}>Подходящие материалы</p>

          <div className={styles.previewMaterials}>
            {previewMaterials.map((material) => (
              <div
                className={[
                  styles.previewMaterial,
                  material.selected ? styles.selected : '',
                ].join(' ')}
                key={material.title}
              >

                <div>
                  <p>{material.title}</p>
                  <span>{material.price}</span>
                </div>

                <span className={styles.radio} aria-label="true" />
              </div>
            ))}
          </div>

          <div className={styles.total}>
            <span>Ориентироваочная стоимость</span>
            <strong>от 52 500  ₽</strong>
          </div>
        </div>
      </Container >
    </section >
  )
}

