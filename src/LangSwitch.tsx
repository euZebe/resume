import React from "react";
import styled from "react-emotion";

const Container = styled("div")`
  position: relative;
  top: -20px;
  left: -15px;

  @media screen and (max-width: 1000px) {
    position: absolute;
    top: 10px;
    text-align: right;
    width: 100vw;
  }

  @media print {
    display: none;
  }
`;

interface Props {
  lang: string;
}

const LangSwitch: React.FunctionComponent<Props> = ({ lang }) =>
  lang === "fr" ? (
    <Container>
      <a href={location.protocol + "//" + location.host + location.pathname}>
        🇫🇷
      </a>
    </Container>
  ) : (
    <Container>
      <a
        href={
          location.protocol +
          "//" +
          location.host +
          location.pathname +
          "?lang=fr"
        }
      >
        🇬🇧
      </a>
    </Container>
  );

export default LangSwitch;
