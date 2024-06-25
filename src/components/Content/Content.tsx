import { useCallback, useEffect, useMemo } from "react";
import Card from "../Card/Card";
import { Stack } from "@mui/material";
import { UserIntf } from "../../Interfaces/common";
import { fetchUsers } from "../../api/users";
import { useStateContext } from "../../contexts/StateProvider";
import { USERS_PER_PAGE } from "../../constants";

const Content = () => {
  const { users, setUsers, selectedPage } = useStateContext();

  const selectedUsers = useMemo<UserIntf[]>(
    () =>
      users.slice(
        (selectedPage - 1) * USERS_PER_PAGE,
        selectedPage * USERS_PER_PAGE
      ),
    [selectedPage, users]
  );

  const initState = useCallback(async () => {
    const users = await fetchUsers();
    setUsers(users);
  }, []);

  useEffect(() => {
    initState();
  }, []);

  return (
    <Stack
      justifyContent={"space-between"}
      direction={"row"}
      flexWrap={"wrap"}
      gap={"10px"}
      mt={"10px"}
      p={"10px"}
    >
      {selectedUsers.map((user) => (
        <Card {...user} key={user.id} />
      ))}
    </Stack>
  );
};

export default Content;
