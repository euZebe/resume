import * as React from "react";
import styled from "react-emotion";
import {
  FaLinkedinSquare,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaVideoCamera
} from "react-icons/lib/fa";
import ResumeContentType from "./model/ResumeContentType";
import Paragraph from "./Paragraph";
import Anchor from "./Anchor";
import LangSwitch from "./LangSwitch";

interface Props {
  resume: ResumeContentType;
  lang: string;
}

const Container = styled("div")`
  margin: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
  @media print {
  }
`;

const Image = styled("img")`
  width: 100%;

  @media screen and (max-width: 800px) {
    display: none;
  }

  @media screen and (max-width: 1000px) {
    max-width: 100px;
    position: absolute;
    top: 10px;
    left: 0;
  }
  @media print {
    max-width: 4cm;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const H3 = styled("h3")`
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #ddd;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const LinksContainer = styled("div")`
  display: flex;

  @media print {
    display: block;
    flex-direction: column;
  }
`;

const BigIconLink = styled("a")`
  flex: 1;
  text-align: center;
  > label {
    display: none;
  }

  @media print {
    text-align: left;

    > svg {
      display: none;
    }

    > label {
      display: unset;
      font-size: 0.8rem;
      margin-right: 1cm;
    }
  }
`;

const AnchorsContainer = styled("div")`
  position: fixed;
  bottom: 10px;
  background-color: white;
  padding: 0.2rem 1rem 0.2rem 1rem;
  border-radius: 1rem;
  border: 1px solid grey;

  @media print {
    display: none;
  }

  @media screen and (max-width: 1000px) {
    border: none;
    background-color: #ccc;
    padding: 0.2rem 0.5rem 0.2rem 0.5rem;
    right: 5px;
    bottom: 5px;
  }
`;

const AsideContent = (props: Props) => {
  const { phone, email } = props.resume.identity;
  const phoneNumberWithoutSpace = phone.replace(" ", "");
  const { about } = props.resume.summary;
  const { links } = props.resume;

  const linkedInLink = links.find(link => link.title === "LinkedIn");
  const githubLink = links.find(link => link.title === "github");
  const talkLink = links.find(link => link.title === "Talk");
  return (
    <Container>
      <LangSwitch lang={props.lang} />
      <span>
        <Image src="./images/me.jpg" />
      </span>

      <H3>Presentation</H3>
      <Paragraph text={about} />

      <H3>Contact</H3>
      <LinksContainer>
        <BigIconLink href={`mailto:${email}`}>
          <FaEnvelope size={30} />
          <label>{email}</label> {/* visible only in print mode */}
        </BigIconLink>

        <BigIconLink href={`tel:${phoneNumberWithoutSpace}`}>
          <FaPhone size={30} />
          <label>{phone}</label> {/* visible only in print mode */}
        </BigIconLink>
      </LinksContainer>

      <H3>Links</H3>
      <LinksContainer>
        {linkedInLink && (
          <BigIconLink href={linkedInLink.url}>
            <FaLinkedinSquare size={30} />
            <label>{linkedInLink.url.replace("https://", "")}</label>
          </BigIconLink>
        )}
        {githubLink && (
          <BigIconLink href={githubLink.url}>
            <FaGithub size={30} />
            <label>{githubLink.url.replace("https://", "")}</label>
          </BigIconLink>
        )}
        {talkLink && (
          <BigIconLink href={talkLink.url}>
            <FaVideoCamera size={30} />
            <label>{talkLink.label}</label>
          </BigIconLink>
        )}
      </LinksContainer>

      <AnchorsContainer id="innerLinks">
        <Anchor link="#talks" label="Talks" />
        <Anchor link="#experiences" label="Experiences" />
        <Anchor link="#side-projects" label="Side projects" />
        <Anchor link="#formations" label="Formations" />
      </AnchorsContainer>
    </Container>
  );
};

export default AsideContent;
