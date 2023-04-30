import { axios } from "./axios";
import { INav } from "../types/Nav";

export const getNavItems = async (): Promise<INav[]> => {
  const res = await axios({
    url: "/navs",
    method: "GET",
  });
  return res.data;
};
