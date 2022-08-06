export type QueryParams = Record<string, string | null>;

export interface SectionType {
  type: "user" | "artist" | "none";
}
