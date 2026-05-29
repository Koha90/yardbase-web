export type Styles = {
  'calculator': string;
  'calculatorCard': string;
  'calculatorDescription': string;
  'emptyMessage': string;
  'eyebrow': string;
  'materialGrid': string;
  'materials': string;
  'materialsHeader': string;
  'purposeGrid': string;
  'resetButton': string;
  'sectionHeader': string;
  'solutions': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
