import type { PurposeID } from "./purpose";

export type MaterialID = "rubber-crumb" | "paving-stone" | "stone-carpet";

export interface Material {
  id: MaterialID;
  title: string;
  description: string;
  priceFrom: number;
  unit: string;
  purposes: PurposeID[];
  basePriceFrom: number; // ориентировочная цена подготовки основания за м².
  workPriceFrom: number; // ориентировочная цена работ за м².
  wastePercent: number; // Запас материала на подрезку, потери, неровности и прочую строительную реальность, где идеальные числа быстро пачкают сапоги.
}
