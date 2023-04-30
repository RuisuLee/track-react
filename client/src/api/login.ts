import { ILogin } from "../types/Login";
import { IUser } from "../types/User";
import { axios } from "./axios";

export const login = async (login: ILogin): Promise<IUser> => {
  const res = await axios({
    method: "post",
    url: "/login",
    data: login,
  });
  return res.data;
};
