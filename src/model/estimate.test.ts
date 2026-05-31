import { describe, expect, it } from "vitest";

import type { Material } from "./material";
import { calculateEstimate } from "./estimate";

const pavingStone: Material = {
  id: "paving-stone",
  title: "Тратуарная плитка",
  description: "Надёжное решение для дорожек, парковок и площадок.",
  priceFrom: 1_250,
  unit: "м²",
  purposes: ["parking", "path", "terrace"],
  basePriceFrom: 800,
  workPriceFrom: 700,
  wastePercent: 10,
};

describe("calculateEstimate", () => {
  it("calculates material only estimate", () => {
    const estimate = calculateEstimate({
      material: pavingStone,
      area: 27,
      mode: "material",
    });

    expect(estimate.area).toBe(27);
    expect(estimate.materialArea).toBeCloseTo(29.7);
    expect(estimate.materialPrice).toBeCloseTo(37_125);
    expect(estimate.basePrice).toBeNull();
    expect(estimate.workPrice).toBeNull();
    expect(estimate.totalPrice).toBeCloseTo(37_125);
  });

  it("calculates material and base estimate", () => {
    const estimate = calculateEstimate({
      material: pavingStone,
      area: 27,
      mode: "base",
    });

    expect(estimate.materialArea).toBeCloseTo(29.7);
    expect(estimate.materialPrice).toBeCloseTo(37_125);
    expect(estimate.basePrice).toBe(21_600);
    expect(estimate.workPrice).toBeNull();
    expect(estimate.totalPrice).toBeCloseTo(58_725);
  });

  it("calculates turnkey estimate", () => {
    const estimate = calculateEstimate({
      material: pavingStone,
      area: 27,
      mode: "turnkey",
    });

    expect(estimate.materialArea).toBeCloseTo(29.7);
    expect(estimate.materialPrice).toBeCloseTo(37_125);
    expect(estimate.basePrice).toBe(21_600);
    expect(estimate.workPrice).toBe(18_900);
    expect(estimate.totalPrice).toBeCloseTo(77_625);
  });
});
