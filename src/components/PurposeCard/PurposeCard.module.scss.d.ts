export type Styles = {
  'card': string;
  'description': string;
  'icon': string;
  'link': string;
  'title': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
