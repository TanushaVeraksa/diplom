import React from "react";
import InfoForm from "./components/InfoForm";
import InfoText from "./components/InfoText";
import InfoLinks from "./components/InfoLinks";

function FooterPageInfo(props) {
  const { info } = props;
  switch (info.type) {
    case "array":
      return (
          <InfoLinks info={info.description}></InfoLinks>
      )
    case "text":
        return (
            <InfoText info={info.description}></InfoText>
        )
    case "form":
        return (
            <InfoForm info={info.formType}></InfoForm>
        )
    default:
        return (
            <InfoText info={info}></InfoText>
        )
  }
}

export default FooterPageInfo;
