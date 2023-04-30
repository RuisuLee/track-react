import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../Header/Header";
import { NavBar } from "../NavBar/NavBar";
import "./Layout.css";
import { useStore } from "effector-react";
import { $user, userChecked } from "../../models/user";
import { useEffect, useState } from "react";
import { Login } from "../Popup/Login";
import { $nav } from "../../models/nav";
import { FOOTER, LOG_IN, TO_CHECK_YOUR_PROGRESS } from "../../constants";

export function Layout() {
  const user = useStore($user);
  const nav = useStore($nav);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    userChecked();
  }, []);

  useEffect(() => {
    if (nav.length > 0) {
      navigate(`theme/${nav[0].name}`);
    }
  }, [nav]);

  return (
    <>
      <Header
        user={user}
        onLogin={() => {
          setLoginOpen(true);
        }}
      ></Header>
      {user.username ? (
        <>
          <NavBar></NavBar>
          <Outlet />
        </>
      ) : (
        <div className="no-login">
          <span className="login-text" onClick={() => setLoginOpen(true)}>
            {LOG_IN}
          </span>
          {TO_CHECK_YOUR_PROGRESS}
        </div>
      )}
      {isLoginOpen && <Login closePopup={() => setLoginOpen(false)} />}
      <footer>{FOOTER}</footer>
    </>
  );
}
