export interface IFiler {
  id: string;
  name: string;
}

export enum FilterOptions {
  complexityAsc = "complexityAscending",
  complexityDesc = "complexityDescending",
  progressAsc = "progressAscending",
  progressDesc = "progressDescending",
  default = "default",
}
