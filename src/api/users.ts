import { UserIntf, UsersRespItf } from "../Interfaces/common";
import { get } from "./common";

export const fetchUsers = async (): Promise<UserIntf[]> => {
  try {
    const res = await get<Promise<UsersRespItf>>(
      "https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io/users"
    );
    const data = res.data;

    return data.users;
  } catch (error) {
    console.warn("getUsers: ", error);
    // Here wee need to track the error using builded in project monitoring system.

    return [];
  }
};
