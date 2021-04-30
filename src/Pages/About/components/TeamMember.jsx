import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  flex: {
      display: "flex",
      padding: 0,
  }
}));

function TeamMember({ person }) {
  const classes = useStyles();
  const [social] = person.social;
  const socialForMap = Object.entries(social);
  console.log(socialForMap);

  return (
    <div>
      <Avatar alt={person.name} src={person.avatar} className={classes.large} />
      <h3>{person.name}</h3>
      <span>{person.role}</span>
      <ul className={classes.flex}>
        {socialForMap.map(([name, link]) => (
          <li className={classes.flex}>
            <a target="blank" rel="noopener noreferrer" href={link}>
              <FontAwesomeIcon
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
