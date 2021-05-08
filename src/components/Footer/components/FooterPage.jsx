import React from "react";
import FooterPageInfo from "./components/FooterPageInfo";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const WhiteTextTypography = withStyles({
  root: {
    color: "#bdc1c9",
    
  }
})(Typography);

function FooterPage(props) {
  return (
    <div>
      <WhiteTextTypography ariant="button" display="block" gutterBottom >
        {props.title}
      </WhiteTextTypography>
      <FooterPageInfo info={props.info}></FooterPageInfo>
    </div>
  );
}

export default FooterPage;
