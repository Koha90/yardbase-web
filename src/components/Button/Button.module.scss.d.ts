export type Styles = {
  'button': string;
  'medium': string;
  'primary': string;
  'secondary': string;
  'small': string;
  'surface': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
