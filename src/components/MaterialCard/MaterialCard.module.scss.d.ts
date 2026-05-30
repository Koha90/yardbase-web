export type Styles = {
  'card': string;
  'description': string;
  'footer': string;
  'link': string;
  'price': string;
  'purposes': string;
  'selectedCard': string;
  'title': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
