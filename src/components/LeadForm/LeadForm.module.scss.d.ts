export type Styles = {
  'card': string;
  'content': string;
  'description': string;
  'emptySummary': string;
  'eyebrow': string;
  'field': string;
  'form': string;
  'secondaryButton': string;
  'submitButton': string;
  'success': string;
  'summary': string;
  'summaryTitle': string;
  'total': string;
  'values': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
