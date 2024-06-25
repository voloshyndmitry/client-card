import React from "react";

import { Stack, Skeleton } from "@mui/material";
import MCard from "@mui/material/Card";

const FakeCard = () => {
  return (
    <MCard sx={{ width: 345 }}>
      <Stack spacing={1} m={1}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rounded" width={210} height={140} />
        <Skeleton variant="rounded" width={60} height={30} />
      </Stack>
    </MCard>
  );
};

export default FakeCard;
