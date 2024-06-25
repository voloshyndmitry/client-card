import { useCallback, useEffect, useMemo } from "react";
import Card from "../Card/Card";
import { Box, Fade, Stack } from "@mui/material";
import { UserIntf } from "../../Interfaces/common";
import { fetchUsers } from "../../api/users";
import { useStateContext } from "../../contexts/StateProvider";
import { USERS_PER_PAGE } from "../../constants";
import FakeContent from "./FakeContent/FakeContent";

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

  if (!users.length) {
    return <FakeContent />;
  }

  return (
    <Stack alignItems={"center"}>
      <Stack
        justifyContent={"space-between"}
        direction={"row"}
        flexWrap={"wrap"}
        gap={"10px"}
        mt={"10px"}
        p={"10px"}
        maxWidth={"1100px"}
        width={"100%"}
      >
        {selectedUsers.map((user, index) => (
          <Fade
            key={user.id}
            in={true}
            style={{ transformOrigin: "0 0 0" }}
            {...{ timeout: index * 200 }}
          >
            <Box>
              <Card {...user} />
            </Box>
          </Fade>
        ))}
      </Stack>
    </Stack>
  );
};

export default Content;
