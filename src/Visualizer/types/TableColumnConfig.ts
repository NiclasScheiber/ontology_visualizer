export interface TableColumnConfig {
  name: string;
  description: string;
  type: string;
  schemaType? : string;
  handleType?: string;
  array?: boolean;
  codelist?: boolean;
  key?: boolean;
};
