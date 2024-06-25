import MCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { UserIntf } from "../../Interfaces/common";
import { useCallback, useMemo } from "react";
import Avatar from "@mui/material/Avatar";
import { useStateContext } from "../../contexts/StateProvider";

const Card = (props: UserIntf) => {
  const { setSelectedUser } = useStateContext();
  const fullName = useMemo(
    () => `${props.firstname} ${props.lastname}`,
    [props.firstname, props.lastname]
  );

  const handleClick = useCallback(() => {
    setSelectedUser(props);
  }, []);

  return (
    <MCard sx={{ width: 345 }}>
      <Avatar
        alt={fullName}
        src={props.avatar}
        sx={{ width: 56, height: 56 }}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {fullName}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          component="div"
          sx={{
            height: 40,
            overflow: "hidden",
          }}
        >
          {props.description}
        </Typography>
        {props.description?.length > 100 ? "..." : <br />}
      </CardContent>
      <CardActions>
        <Button onClick={handleClick}>Learn More</Button>
      </CardActions>
    </MCard>
  );
};

export default Card;
