export type MaterialID =
  | 'rubber-crumb'
  | 'paving-stone'
  | 'stone-carpet';

export interface Material {
  id: MaterialID;
  title: string;
  description: string;
  priceFrom: number;
  unit: string;
  purposes: string[];
}
