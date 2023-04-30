import { $themes, getThemesFx } from "../../models/themes";
import { ThemeCard } from "../ThemeCard/ThemeCard";
import { useStore } from "effector-react";
import "./Themes.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Filter } from "../Filter/Filter";
import { NOTHING_HERE } from "../../constants";

export function Themes() {
  const { error, data } = useStore($themes);
  const { theme } = useParams();

  useEffect(() => {
    getThemesFx(theme);
  }, [theme]);

  return (
    <div>
      <div className="themes-bar">
        <div className="themes-title">Темы</div>
        {data.length > 0 && <Filter></Filter>}
      </div>
      <div className="themes-wrapper">
        {error ? (
          <div>Error :(</div>
        ) : data.length !== 0 ? (
          data.map((item) => <ThemeCard {...item} key={item.id}></ThemeCard>)
        ) : (
          <div>{NOTHING_HERE}</div>
        )}
      </div>
    </div>
  );
}
