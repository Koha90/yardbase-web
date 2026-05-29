import type { Material } from "../model/material";

export const materials: Material[] = [
  {
    id: 'rubber-crumb',
    title: 'Резиновое покрытие',
    description: 'Мягкое бесшовное покрытие для игровых и спортивных зон.',
    priceFrom: 1_800,
    unit: 'м²',
    purposes: ['Детская зона', 'Дорожка'],
  },
  {
    id: 'paving-stone',
    title: 'Тротуарная плитка',
    description: 'Надёжное решение для дорожек, парковок и площадок.',
    priceFrom: 1_250,
    unit: 'м²',
    purposes: ['Парковка', 'Дорожка', 'Терраса'],
  },
  {
    id: 'stone-carpet',
    title: 'Каменный ковёр',
    description: 'Декоративное покрытие из камня для красивых входных зон.',
    priceFrom: 2_900,
    unit: 'м²',
    purposes: ['Терраса', 'Дорожка'],
  },
];
