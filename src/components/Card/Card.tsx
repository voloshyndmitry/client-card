import MCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { UserIntf } from "../../Interfaces/common";
import { useMemo } from "react";
import Avatar from "@mui/material/Avatar";

const Card = (props: UserIntf) => {
  const fullName = useMemo(
    () => `${props.firstname} ${props.lastname}`,
    [props.firstname, props.lastname]
  );

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
          sx={{ height: 140, paddingBottom: 5 }}
        >
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Learn More</Button>
      </CardActions>
    </MCard>
  );
};

export default Card;
