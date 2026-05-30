export type Styles = {
  'card': string;
  'controls': string;
  'empty': string;
  'emptyDescription': string;
  'field': string;
  'fields': string;
  'input': string;
  'layout': string;
  'materialDescription': string;
  'materialTitle': string;
  'modeButton': string;
  'modeGroup': string;
  'modeGroupTitle': string;
  'modes': string;
  'note': string;
  'row': string;
  'selectedLabel': string;
  'selectedMode': string;
  'selectLink': string;
  'summary': string;
  'summaryTitle': string;
  'total': string;
  'values': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
