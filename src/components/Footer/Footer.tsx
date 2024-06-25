import { Pagination, Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import { ChangeEvent, useCallback, useMemo } from "react";
import { useStateContext } from "../../contexts/StateProvider";
import { USERS_PER_PAGE } from "../../constants";

const Footer = () => {
  const { setSelectedPage, users } = useStateContext();

  const count = useMemo(() => {
    if (users.length) {
      return Math.ceil(users.length / USERS_PER_PAGE);
    }

    return 1;
  }, [users]);

  const handleChangePage = useCallback(
    (_: ChangeEvent<unknown>, pageNumber: number) => {
      setSelectedPage(pageNumber);
    },
    []
  );

  return (
    <Stack gap={"10px"} justifyContent={"space-between"} pt={5}>
      <Divider variant="middle" />
      <Stack alignItems={"center"} mt={5}>
        <Pagination count={count} onChange={handleChangePage} />
      </Stack>
    </Stack>
  );
};

export default Footer;
