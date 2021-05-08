import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const WhiteTextTypography = withStyles({
  root: {
    color: "#bdc1c9"
  }
})(Typography);

function InfoLinks({ info }) {
  const modofiedInfo = info.map((elem) => {
    if (elem.link.startsWith("/")) {
      return {
        ...elem,
        inner: true,
      };
    } else {
      return {
        ...elem,
        inner: false,
      };
    }
  });
  return (
    <WhiteTextTypography   variant="caption" display="block"  >
            {modofiedInfo.map((elem, id) => 
        <WhiteTextTypography key={id}   variant="caption" display="block"  >
          {elem.inner ? (
            <Link style={{textDecoration: "none"}} to={elem.link}>{elem.text}</Link>
          ) : (
            <a style={{textDecoration: "none"}} target="blank" rel="noopener noreferrer" href={`https://${elem.link}`}>{elem.text}</a>
          )}
        </WhiteTextTypography>
      )}
    </WhiteTextTypography>

  );
}

export default InfoLinks;
