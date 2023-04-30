export interface IThemeCard {
  id: number;
  title: string;
  description: string;
  complexity: number;
  progress: number;
  tags: Array<string>;
}

export interface IMaterial {
  comment: string;
  link: string;
}

export interface ILesson {
  id: number;
  title: string;
  learned: boolean;
  materials: Array<IMaterial>;
}

export interface ITheme {
  title: string;
  progress: number;
  lessons: Array<ILesson>;
}

export interface IThemeRequestParams {
  theme?: string;
  id?: string;
}
