import { useNavigate, useParams } from "react-router-dom";
import { IThemeCard } from "../../types/Theme";
import { ProgressBarCircle } from "../ProgressBar/ProgressBarCircle";
import "./ThemeCard.css";
import { STUDY_BUTTON } from "../../constants";

export function ThemeCard(themeInfo: IThemeCard) {
  const navigate = useNavigate();
  const { theme } = useParams<"theme">();

  const onStudyClick = (id: number) => {
    navigate(`../theme/${theme}/${id}`);
  };

  return (
    <div className="card-wrapper">
      <header className="card-title">{themeInfo.title}</header>
      <main className="card-main">
        <div>{themeInfo.description}</div>
        <ProgressBarCircle progress={themeInfo.progress} />
        <div>
          {themeInfo.tags.map((tag) => (
            <span className="tag" key={tag}>
              #{tag}
            </span>
          ))}
        </div>
        <div>
          {[...Array(themeInfo.complexity)].map((x, i) => (
            <div className="star" key={i}></div>
          ))}
        </div>
      </main>
      <button
        className="study"
        onClick={() => {
          onStudyClick(themeInfo.id);
        }}
      >
        {STUDY_BUTTON}
      </button>
    </div>
  );
}
