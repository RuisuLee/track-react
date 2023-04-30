import { useStore } from "effector-react";
import "./Login.css";
import {
  $isLoggedIn,
  $loginError,
  logged,
  unsetLoginError,
} from "../../models/user";
import { useEffect, useState } from "react";
import { ILogin } from "../../types/Login";
import { LOGIN, LOGIN_TITLE, PASSWORD_TITLE } from "../../constants";

interface IProps {
  closePopup: () => void;
}

export function Login({ closePopup }: IProps) {
  const [username, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const loginError = useStore($loginError);
  const isLoggedIn = useStore($isLoggedIn);

  useEffect(() => {
    unsetLoginError();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      closePopup();
    }
  }, [isLoggedIn]);

  const onLogin = () => {
    if (username && password) {
      const user: ILogin = {
        login: username,
        password,
      };

      logged(user);
    }
  };

  return (
    <div className="popup-container">
      <div className="popup-body">
        <div className="login-wrapper">
          <button className="close-button" onClick={closePopup}>
            X
          </button>
          <div className="login-form__wrapper">
            <label className="login-form__label" htmlFor="username">
              {LOGIN_TITLE}
            </label>
            <input
              className="login-form__input"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setLogin(e.target.value)}
            />

            <label className="login-form__label" htmlFor="password">
              {PASSWORD_TITLE}
            </label>
            <input
              className="login-form__input"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {loginError?.message && (
              <div className="error-message">{loginError?.message}</div>
            )}

            <button
              className="login-form__button"
              onClick={() => {
                onLogin();
              }}
            >
              {LOGIN}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
