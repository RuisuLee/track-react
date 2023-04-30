import { useStore } from "effector-react";
import "./NavBar.css";
import { $navs, getNavFx } from "../../models/nav";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export function NavBar() {
  const { error, data } = useStore($navs);

  useEffect(() => {
    getNavFx();
  }, []);

  if (error) {
    return <></>;
  } else {
    return (
      <nav className="nav">
        {data.map((item) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            to={`theme/${item.name}`}
            key={item.name}
          >
            {item.description}
          </NavLink>
        ))}
      </nav>
    );
  }
}
