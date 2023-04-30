import {
  combine,
  createEffect,
  createEvent,
  createStore,
  restore,
} from "effector";
import { IThemeCard } from "../types/Theme";
import { getThemes } from "../api/themes";
import { FilterOptions, IFiler } from "../types/Filter";

const $theme = createStore<IThemeCard[]>([]);

export const updateTheme = createEvent();

export const getThemesFx = createEffect<
  string | undefined,
  IThemeCard[],
  Error
>();
getThemesFx.use(getThemes);
const $fetchError = restore<Error>(getThemesFx.failData, null);

export const filtered = createEvent<IFiler>();

const filterThemes = (state: IThemeCard[], data: IFiler) => {
  switch (data.id) {
    case FilterOptions.complexityAsc:
      state = state.sort((a, b) => a.complexity - b.complexity);
      break;
    case FilterOptions.progressAsc:
      state = state.sort((a, b) => a.progress - b.progress);
      break;
    case FilterOptions.complexityDesc:
      state = state.sort((a, b) => b.complexity - a.complexity);
      break;
    case FilterOptions.progressDesc:
      state = state.sort((a, b) => b.progress - a.progress);
      break;
    case FilterOptions.default:
      state = state.sort((a, b) => a.id - b.id);
      break;
    default:
      break;
  }
  return [...state];
};

$theme.on(getThemesFx.doneData, (_, data) => data).on(filtered, filterThemes);

export const $themes = combine({
  error: $fetchError,
  data: $theme,
});
