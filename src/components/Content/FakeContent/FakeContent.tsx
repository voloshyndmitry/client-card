import { Stack } from "@mui/material";
import { USERS_PER_PAGE } from "../../../constants";
import FakeCard from "./FakeCard/FakeCard";

const fakeCardsData = [...Array(USERS_PER_PAGE).keys()];

const FakeContent = () => {
  return (
    <Stack alignItems={"center"}>
      <Stack
        justifyContent={"space-between"}
        direction={"row"}
        flexWrap={"wrap"}
        gap={"10px"}
        mt={"10px"}
        p={"10px"}
        width={"1100px"}
      >
        {fakeCardsData.map((i) => (
          <FakeCard key={`fakeCard${i}`} />
        ))}
      </Stack>
    </Stack>
  );
};

export default FakeContent;
