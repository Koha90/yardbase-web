import { useEffect, useRef, useState } from 'react';

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

  const materialsSectionRef = useRef<HTMLElement>(null);
  const materialsHeadingRef = useRef<HTMLHeadingElement>(null);
  const shouldRevealResultsRef = useRef(false);

  const selectedPurpose = purposes.find(
    (purpose) => purpose.id === selectedPurposeID,
  );

  const visibleMaterials = selectedPurposeID === null
    ? materials
    : materials.filter((material) =>
      material.purposes.includes(selectedPurposeID),
    );

  const resultsMessage = selectedPurpose === undefined
    ? `Показано покрытий: ${visibleMaterials.length}`
    : `Для задачи «${selectedPurpose.title}» найдено покрытий: ${visibleMaterials.length}`;

  useEffect(() => {
    if (!shouldRevealResultsRef.current) {
      return;
    }

    shouldRevealResultsRef.current = false;

    materialsHeadingRef.current?.focus({
      preventScroll: true,
    });

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    materialsSectionRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  }, [selectedPurposeID]);

  function handlePurposeSelect(purposeID: PurposeID) {
    shouldRevealResultsRef.current = true;

    setSelectedPurposeID((currentPurposeID) =>
      currentPurposeID === purposeID ? null : purposeID,
    );
  }

  function handleFilterSelect(purposeID: PurposeID | null) {
    setSelectedPurposeID(purposeID);
  }

  function filterClassName(selected: boolean) {
    return [
      styles.filterChip,
      selected ? styles.activeFilterChip : '',
    ]
      .filter(Boolean)
      .join(' ');
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

        <section
          className={styles.materials}
          id="materials"
          ref={materialsSectionRef}
          aria-labelledby="materials-title"
        >
          <Container>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Материалы</p>

              <h2
                className={styles.materialsTitle}
                id="materials-title"
                ref={materialsHeadingRef}
                tabIndex={-1}
              >
                Подходящие покрытия
              </h2>

              <p>
                Переключайте назначение участка и сравнивайте
                ориентировочную стоимость решений.
              </p>
            </div>

            <div
              className={styles.filters}
              role="group"
              aria-label="Фильтр покрытий по назначению"
            >
              <button
                className={filterClassName(selectedPurposeID === null)}
                type="button"
                aria-pressed={selectedPurposeID === null}
                onClick={() => handleFilterSelect(null)}
              >
                Все
              </button>

              {purposes.map((purpose) => (
                <button
                  className={filterClassName(
                    selectedPurposeID === purpose.id,
                  )}
                  key={purpose.id}
                  type="button"
                  aria-pressed={selectedPurposeID === purpose.id}
                  onClick={() => handleFilterSelect(purpose.id)}
                >
                  {purpose.title}
                </button>
              ))}
            </div>

            <p
              className={styles.resultsSummary}
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {resultsMessage}
            </p>

            <div
              className={styles.results}
              key={selectedPurposeID ?? 'all'}
            >
              {visibleMaterials.length > 0 ? (
                <div className={styles.materialGrid}>
                  {visibleMaterials.map((material) => (
                    <MaterialCard
                      key={material.id}
                      material={material}
                    />
                  ))}
                </div>
              ) : (
                <p className={styles.emptyMessage}>
                  Для этой задачи пока нет материалов в каталоге.
                </p>
              )}
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


