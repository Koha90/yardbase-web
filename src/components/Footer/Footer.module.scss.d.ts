export type Styles = {
  'brand': string;
  'copyright': string;
  'description': string;
  'footer': string;
  'inner': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
