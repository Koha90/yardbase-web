export type Styles = {
  'action': string;
  'card': string;
  'description': string;
  'icon': string;
  'selected': string;
  'title': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
