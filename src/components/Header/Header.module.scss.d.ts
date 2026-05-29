export type Styles = {
  'action': string;
  'brand': string;
  'header': string;
  'inner': string;
  'mark': string;
  'name': string;
  'navigation': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
