import { MATERIALS } from "../../constants";
import { ILesson } from "../../types/Theme";
import "./Lesson.css";

interface IProps {
  lesson: ILesson;
  handleCheck: (lesson: ILesson, checked: boolean) => void;
}

export function Lesson({ lesson, handleCheck }: IProps) {
  return (
    <div key={lesson.id} className="lesson-wrapper">
      <input
        type="checkbox"
        className="lesson-checkbox"
        defaultChecked={lesson.learned}
        onChange={(e) => {
          handleCheck(lesson, e.target.checked);
        }}
      />
      <div className="lesson-content">
        <div>{lesson.title}</div>
        <div>
          <div>{MATERIALS}</div>
          <div>
            {lesson.materials.map((material, index) => (
              <div key={index}>
                <a href={material.link}>{material.comment}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
