import {
  HEADER,
  HEADER_DESCRIPTION,
  HEADER_HELLO,
  HEADER_LOGOUT,
  LOGIN,
} from "../../constants";
import infoLogo from "../../assets/icons8-info.svg";
import "./Header.css";
import { IUser } from "../../types/User";
import { userUnset } from "../../models/user";
import { useNavigate } from "react-router-dom";

interface IProps {
  user: IUser;
  onLogin: () => void;
}

export function Header({ user, onLogin }: IProps) {
  const navigate = useNavigate();

  const onLogoutClicked = () => {
    userUnset();
    navigate("/");
  };

  return (
    <header className="header wrapper">
      <div className="wrapper">
        <div className="header-title">{HEADER}</div>
        <img
          src={infoLogo}
          alt="Login Logo"
          className="info-logo"
          title={HEADER_DESCRIPTION}
        />
      </div>
      {user.username ? (
        <div className="wrapper">
          <div className="hello-text">
            {HEADER_HELLO} {user.username}!
          </div>
          <button
            className="header-button"
            onClick={() => {
              onLogoutClicked();
            }}
          >
            {HEADER_LOGOUT}
          </button>
        </div>
      ) : (
        <div className="wrapper">
          <button
            className="header-button"
            onClick={() => {
              onLogin();
            }}
          >
            {LOGIN}
          </button>
        </div>
      )}
    </header>
  );
}
