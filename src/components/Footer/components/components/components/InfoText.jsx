import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const WhiteTextTypography = withStyles({
    root: {
      color: "#bdc1c9",
      wordWrap: "normal",
      lineBreak: "auto",
      width: "80%",
    }
  })(Typography);

function InfoText({info}) {
    return (
        <div>
            <WhiteTextTypography  variant="caption" display="block">
            {info}
            </WhiteTextTypography>
        </div>
    )
}

export default InfoText
