import React from "react";
import Card from "../Card/Card";
import { Stack } from "@mui/material";

const Content = () => {
  return (
    <Stack
      justifyContent={"space-between"}
      direction={"row"}
      gap={"10px"}
      p={"10px"}
    >
      <Card />
      <Card />
      <Card />
    </Stack>
  );
};

export default Content;
