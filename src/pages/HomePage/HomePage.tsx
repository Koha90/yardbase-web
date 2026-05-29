import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero';
import { MaterialCard } from '../../components/MaterialCard/MaterialCard';
import { PurposeCard } from '../../components/PurposeCard/PurposeCard';
import { Button } from '../../components/Button/Button';
import { Container } from '../../components/Container/Container';

import { materials } from '../../mocks/materials';
import { purposes } from '../../mocks/purposes';

import styles from './HomePage.module.scss';

export function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <section className={styles.solutions} id="solutions">
          <Container>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Выберите задачу</p>

              <h2>Что вы хотите благоустроить?</h2>

              <p>
                Начните с назначения участка, а мы предложим
                подходящие виды покрытий.
              </p>
            </div>

            <div className={styles.purposeGrid}>
              {purposes.map((purpose) => (
                <PurposeCard key={purpose.id} purpose={purpose} />
              ))}
            </div>
          </Container>
        </section>

        <section className={styles.materials} id="materials">
          <Container>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Материалы</p>

              <h2>Популярные покрытия для вашего двора</h2>

              <p>
                Сравните решения по назначению и ориентировочной
                стоимости за квадратный метр.
              </p>
            </div>

            <div className={styles.materialGrid}>
              {materials.map((material) => (
                <MaterialCard key={material.id} material={material} />
              ))}
            </div>
          </Container>
        </section>

        <section className={styles.calculator} id="calculator">
          <Container>
            <div className={styles.calculatorCard}>
              <div>
                <p className={styles.eyebrow}>Следующий шаг</p>

                <h2>Рассчитаем материалы для вашего участка</h2>

                <p className={styles.calculatorDescription}>
                  Укажите тип зоны и её площадь. Скоро здесь появится
                  первый интерактивный калькулятор Yardbase.
                </p>
              </div>

              <Button href="#solutions" variant="surface">
                Начать подбор
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}


