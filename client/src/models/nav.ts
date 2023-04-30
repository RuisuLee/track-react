import { combine, createEffect, createStore, restore } from "effector";
import { INav } from "../types/Nav";
import { getNavItems } from "../api/nav";

export const $nav = createStore<INav[]>([]);

export const getNavFx = createEffect<void, INav[], Error>();
getNavFx.use(getNavItems);
const $fetchError = restore<Error>(getNavFx.failData, null);

$nav.on(getNavFx.doneData, (_, data) => data);

export const $navs = combine({
  error: $fetchError,
  data: $nav,
});
