import {
  Avatar,
  Button,
  CardActions,
  CardContent,
  Chip,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { ReactNode, useCallback, useMemo } from "react";
import { useStateContext } from "../../contexts/StateProvider";
import MCard from "@mui/material/Card";
import { ClickAwayListener } from "@mui/base";

const FeildName = ({ children }: { children: ReactNode }) => (
  <Typography variant="body2" pb={1} component="div">
    {children}
  </Typography>
);

const UserDetails = () => {
  const { selectedUser, setSelectedUser } = useStateContext();
  const open = useMemo(() => Boolean(selectedUser), [selectedUser]);
  const handleClose = useCallback(() => setSelectedUser(undefined), []);
  const fullName = useMemo(
    () => selectedUser && `${selectedUser.firstname} ${selectedUser.lastname}`,
    [selectedUser, selectedUser]
  );

  if (!selectedUser) {
    return <></>;
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack alignItems={"center"} justifyContent={"center"} height={"100vh"}>
        <ClickAwayListener onClickAway={handleClose}>
          <MCard>
            <Stack maxWidth={"600px"}>
              <CardContent>
                <Stack
                  alignItems={"flex-end"}
                  direction={"row"}
                  gap={5}
                  p={3}
                  flexWrap={"wrap"}
                >
                  <Avatar
                    alt={fullName}
                    src={selectedUser.avatar}
                    sx={{ width: 56, height: 56 }}
                  />
                  <Typography gutterBottom variant="h5" component="div">
                    {fullName}
                  </Typography>
                </Stack>
                <FeildName>
                  <Typography variant="overline">Email:</Typography>{" "}
                  <Chip
                    label={selectedUser.email}
                    color="primary"
                    size="small"
                  />
                </FeildName>
                <FeildName>
                  <Typography variant="overline">Join date:</Typography>{" "}
                  <Chip
                    label={selectedUser.join_date}
                    color="primary"
                    size="small"
                  />
                </FeildName>
                <FeildName>
                  <Typography variant="overline">Role:</Typography>{" "}
                  <Chip
                    label={selectedUser.role}
                    color="primary"
                    size="small"
                  />
                </FeildName>
                <FeildName>
                  <Typography variant="overline">User Name:</Typography>{" "}
                  <Chip
                    label={selectedUser.username}
                    color="primary"
                    size="small"
                  />
                </FeildName>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ height: 140, paddingBottom: 5 }}
                >
                  {selectedUser.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Stack
                  width={"100%"}
                  justifyContent={"flex-end"}
                  alignItems={"end"}
                >
                  <Button onClick={handleClose}>Close</Button>
                </Stack>
              </CardActions>
            </Stack>
          </MCard>
        </ClickAwayListener>
      </Stack>
    </Modal>
  );
};

export default UserDetails;
