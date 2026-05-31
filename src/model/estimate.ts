import type { Material } from "./material";

export type EstimateMode = "material" | "base" | "turnkey";

export interface EstimateInput {
  material: Material;
  area: number;
  mode: EstimateMode;
}

export interface EstimateResult {
  area: number;
  materialArea: number;
  materialPrice: number;
  basePrice: number | null;
  workPrice: number | null;
  totalPrice: number;
}

export function calculateEstimate({
  material,
  area,
  mode,
}: EstimateInput): EstimateResult {
  const materialArea = area * (1 + material.wastePercent / 100);
  const materialPrice = material.priceFrom * materialArea;

  const basePrice = mode === "material" ? null : material.basePriceFrom * area;

  const workPrice = mode === "turnkey" ? material.workPriceFrom * area : null;

  const totalPrice = materialPrice + (basePrice ?? 0) + (workPrice ?? 0);

  return {
    area,
    materialArea,
    materialPrice,
    basePrice,
    workPrice,
    totalPrice,
  };
}
