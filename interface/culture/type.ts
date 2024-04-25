export type Culture = {
  id: number;
  title: string;
  cover: string;
  category: number;
  description: string;
  content: string;
};

export enum CultureCategoryEnum {
  "节日" = 0,
  "风俗" = 1,
  "歌舞" = 2,
}

export const CULTER_CATEGORY_MAP: Record<CultureCategoryEnum, string> = {
  [CultureCategoryEnum.节日]: "节日",
  [CultureCategoryEnum.风俗]: "风俗",
  [CultureCategoryEnum.歌舞]: "歌舞",
};
