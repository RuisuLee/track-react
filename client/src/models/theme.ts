import { createEffect, createEvent, createStore, restore } from "effector";
import { ILesson, ITheme, IThemeRequestParams } from "../types/Theme";
import { getTheme } from "../api/themes";

interface IUpdateLessonPayload {
  lesson: ILesson;
  checked: boolean;
}

const getProgress = (lessons: Array<ILesson>) => {
  const progressPerLesson = Math.ceil(100 / lessons.length);
  const learnedLessons = lessons.filter(
    (lesson) => lesson.learned === true
  ).length;
  const progress = learnedLessons * progressPerLesson;
  return progress > 100 ? 100 : progress;
};

export const $theme = createStore<ITheme>({} as ITheme);

export const reset = createEvent();

export const getThemeFx = createEffect<IThemeRequestParams, ITheme, Error>();

getThemeFx.use(getTheme);

export const updateLesson = createEvent<IUpdateLessonPayload>();

const lessonUpdate = (state: ITheme, data: IUpdateLessonPayload) => {
  const updatedLesson = data.lesson;
  updatedLesson.learned = data.checked;

  state.lessons = state.lessons.map((stateLesson) =>
    updatedLesson.id === stateLesson.id ? updatedLesson : stateLesson
  );
  state.progress = getProgress(state.lessons);

  return { ...state };
};

$theme
  .on(getThemeFx.doneData, (_, data) => data)
  .on(updateLesson, lessonUpdate)
  .reset(reset);
