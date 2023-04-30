import { FilterOptions, IFiler } from "./types/Filter";

export const HEADER = "Track";
export const HEADER_DESCRIPTION =
  "Платформа для трекинга результатов изучения чего бы то ни было";
export const LOGIN = "Войти";
export const HEADER_HELLO = "Привет, ";
export const HEADER_LOGOUT = "Выйти";

export const LOG_IN = "Войдите";
export const TO_CHECK_YOUR_PROGRESS = ", чтобы увидеть ваш прогресс";

export const FOOTER = "© 2023 Зайцева А.С.";

export const MATERIALS = "Материалы:";

export const NOT_FOUND = "Страница не найдена";

export const LOGIN_TITLE = "Логин";
export const PASSWORD_TITLE = "пароль";

export const FILTER_DROPDOWN = "Фильтр";
export const FILTER: Array<IFiler> = [
  { id: FilterOptions.complexityAsc, name: "По сложности ↑" },
  { id: FilterOptions.complexityDesc, name: "По сложности ↓" },
  { id: FilterOptions.progressAsc, name: "По прогрессу ↑" },
  { id: FilterOptions.progressDesc, name: "По прогрессу ↓" },
  { id: FilterOptions.default, name: "По дефолту" },
];

export const PROGRESS = "Прогресс";

export const BACK_BUTTON = "← Назад";
export const NOTHING_HERE = "Тут пока ничего нет..";

export const STUDY_BUTTON = "Изучить";
