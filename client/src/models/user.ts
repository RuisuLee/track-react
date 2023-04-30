import {
  combine,
  createEffect,
  createEvent,
  createStore,
  restore,
  sample,
} from "effector";
import { IUser } from "../types/User";
import { ILogin } from "../types/Login";
import { login } from "../api/login";

const defaultUser: IUser = { username: "", token: "" };

export const $user = createStore<IUser>(defaultUser);

export const userChecked = createEvent();
export const userSet = createEvent();
export const userUnset = createEvent();

const checkUser = () => {
  const user: string | null = localStorage.getItem("user");
  return user ? JSON.parse(user) : defaultUser;
};

const setUser = (user: IUser) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const unsetUser = (state: IUser) => {
  localStorage.removeItem("user");

  state = defaultUser;
  return state;
};

export const logged = createEvent<ILogin>();

export const loginFx = createEffect<ILogin, IUser, Error>();
loginFx.use(login);
export const $loginError = restore<Error>(loginFx.failData, null);
export const unsetLoginError = createEvent();
$loginError.on(unsetLoginError, (_) => null);

$user
  .on(loginFx.doneData, (_, data) => data)
  .on(userChecked, checkUser)
  .on(userSet, setUser)
  .on(userUnset, unsetUser);

sample({
  clock: logged,
  target: loginFx,
});

export const $isLoggedIn = createStore<boolean>(false);
$isLoggedIn
  .on(loginFx.doneData, (_, data) => true)
  .on(userUnset, (_, data) => false);

sample({
  clock: loginFx.doneData,
  source: $user,
  target: userSet,
});
