export type PurposeID =
  | 'parking'
  | 'path'
  | 'playground'
  | 'terrace';

export interface Purpose {
  id: PurposeID;
  title: string;
  description: string;
}
