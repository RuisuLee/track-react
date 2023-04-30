import { ITheme, IThemeCard, IThemeRequestParams } from "../types/Theme";
import { axios } from "./axios";

export const getThemes = async (
  theme: string | undefined
): Promise<IThemeCard[]> => {
  const res = await axios({
    url: `/themes/${theme}`,
    method: "GET",
  });
  return res.data;
};

export const getTheme = async (
  params: IThemeRequestParams
): Promise<ITheme> => {
  const res = await axios({
    url: `/themes/${params.theme}/${params.id}`,
    method: "GET",
  });
  return res.data;
};
