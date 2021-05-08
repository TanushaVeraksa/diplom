import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  flex: {
    display: "flex",
    padding: 0,
  },
}));

function TeamMember({ person }) {
  const classes = useStyles();
  const [social] = person.social;
  const socialForMap = Object.entries(social);
  console.log(socialForMap);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}>
      <Avatar alt={person.name} src={person.avatar} className={classes.large} />
      <Typography color="textSecondary" variant="h6">
        {person.name}
      </Typography>
      <Typography color="textSecondary" variant="body2">
        {person.role}
      </Typography>

      <ul className={classes.flex}>
        {socialForMap.map(([name, link]) => (
          <li className={classes.flex}>
            <a target="blank" rel="noopener noreferrer" href={link}>
              <FontAwesomeIcon style={{padding:2}}
                icon={["fab", name]}
                size="2x"
                key={name}
                color="orange"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamMember;
