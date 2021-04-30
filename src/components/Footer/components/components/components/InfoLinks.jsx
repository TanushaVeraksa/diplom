import React from "react";
import { Link } from "react-router-dom";

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
    <ul>
      {modofiedInfo.map((elem, id) => 
        <li key={id}>
          {elem.inner ? (
            <Link to={elem.link}>{elem.text}</Link>
          ) : (
            <a target="blank" rel="noopener noreferrer" href={`https://${elem.link}`}>{elem.text}</a>
          )}
        </li>
      )}
    </ul>
  );
}

export default InfoLinks;
