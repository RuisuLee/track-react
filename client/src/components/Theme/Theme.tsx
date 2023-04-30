import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "effector-react";
import { $theme, getThemeFx, reset, updateLesson } from "../../models/theme";
import "./Theme.css";
import { ILesson } from "../../types/Theme";
import { Lesson } from "../Lesson/Lesson";
import { ProgressBarLine } from "../ProgressBar/ProgressBarLine";
import { BACK_BUTTON, NOTHING_HERE } from "../../constants";

export function Theme() {
  const { theme, id } = useParams();
  const themeInfo = useStore($theme);
  const navigate = useNavigate();

  useEffect(() => {
    reset();
    getThemeFx({ theme, id });
  }, [theme, id]);

  const handleCheck = (lesson: ILesson, checked: boolean) => {
    updateLesson({ lesson, checked });
  };

  return (
    <>
      {themeInfo.title ? (
        <div>
          <nav className="theme-nav">
            <div
              className="nav-back"
              onClick={() => {
                navigate(-1);
              }}
            >
              {BACK_BUTTON}
            </div>
            <div className="nav-title">{themeInfo.title}</div>
          </nav>
          <ProgressBarLine progress={themeInfo.progress} />
          <main className="lessons-container">
            {themeInfo.lessons.map((lesson) => (
              <Lesson
                lesson={lesson}
                handleCheck={handleCheck}
                key={lesson.id}
              />
            ))}
          </main>
        </div>
      ) : (
        <div>{NOTHING_HERE}</div>
      )}
    </>
  );
}
