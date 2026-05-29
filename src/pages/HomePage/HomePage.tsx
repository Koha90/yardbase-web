import { useState } from 'react';

import { Button } from '../../components/Button/Button';
import { Container } from '../../components/Container/Container';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero';
import { MaterialCard } from '../../components/MaterialCard/MaterialCard';
import { PurposeCard } from '../../components/PurposeCard/PurposeCard';

import { materials } from '../../mocks/materials';
import { purposes } from '../../mocks/purposes';
import type { PurposeID } from '../../model/purpose';

import styles from './HomePage.module.scss';

export function HomePage() {
  const [selectedPurposeID, setSelectedPurposeID] =
    useState<PurposeID | null>(null);

  const selectedPurpose = purposes.find(
    (purpose) => purpose.id === selectedPurposeID,
  );

  const visibleMaterials = selectedPurposeID === null
    ? materials
    : materials.filter((material) =>
      material.purposes.includes(selectedPurposeID),
    );

  function handlePurposeSelect(purposeID: PurposeID) {
    setSelectedPurposeID((currentPurposeID) =>
      currentPurposeID === purposeID ? null : purposeID,
    );
  }

  function handleResetPurpose() {
    setSelectedPurposeID(null);
  }

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
                <PurposeCard
                  key={purpose.id}
                  purpose={purpose}
                  selected={purpose.id === selectedPurposeID}
                  onSelect={handlePurposeSelect}
                />
              ))}
            </div>
          </Container>
        </section>

        <section className={styles.materials} id="materials">
          <Container>
            <div className={styles.materialsHeader}>
              <div className={styles.sectionHeader}>
                <p className={styles.eyebrow}>Материалы</p>

                <h2>
                  {selectedPurpose === undefined
                    ? 'Популярные покрытия для вашего двора'
                    : `Покрытия для задачи «${selectedPurpose.title}»`}
                </h2>

                <p>
                  Сравните решения по назначению и ориентировочной
                  стоимости за квадратный метр.
                </p>
              </div>

              {selectedPurpose !== undefined && (
                <button
                  className={styles.resetButton}
                  type="button"
                  onClick={handleResetPurpose}
                >
                  Показать все
                </button>
              )}
            </div>

            <div className={styles.materialGrid}>
              {visibleMaterials.map((material) => (
                <MaterialCard key={material.id} material={material} />
              ))}
            </div>

            {visibleMaterials.length === 0 && (
              <p className={styles.emptyMessage}>
                Для этой задачи пока нет материалов в каталоге.
              </p>
            )}
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


