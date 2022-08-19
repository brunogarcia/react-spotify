export type QueryParams = Record<string, string | null>;

export interface SectionType {
  type: "user" | "artist" | "none";
}

export enum StyleButton {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}
