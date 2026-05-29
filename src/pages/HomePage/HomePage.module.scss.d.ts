export type Styles = {
  'calculator': string;
  'calculatorCard': string;
  'calculatorDescription': string;
  'eyebrow': string;
  'materialGrid': string;
  'materials': string;
  'purposeGrid': string;
  'sectionHeader': string;
  'solutions': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
