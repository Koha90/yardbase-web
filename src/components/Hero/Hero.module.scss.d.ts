export type Styles = {
  'benefits': string;
  'buttons': string;
  'content': string;
  'description': string;
  'eyebrow': string;
  'hero': string;
  'layout': string;
  'materialsTitle': string;
  'parameter': string;
  'parameters': string;
  'preview': string;
  'previewHeader': string;
  'previewLabel': string;
  'previewMaterial': string;
  'previewMaterials': string;
  'previewTitle': string;
  'radio': string;
  'selected': string;
  'status': string;
  'title': string;
  'total': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
