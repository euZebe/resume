import * as React from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';
import { FaLinkedinSquare, FaGithub, FaEnvelope, FaPhone } from 'react-icons/lib/fa';
import ResumeContentType from './model/ResumeContentType';
import Paragraph from './Paragraph';
import Anchor from './Anchor';

interface Props {
    resume: ResumeContentType;
}

const container = css`
    margin: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: left;
`;

const imageStyle = css`
    width: 100%;
`;

const linksContainer = css`
    display: flex;
`;

const AnchorsContainer = styled('div')`
    position: fixed;
    bottom: 10px;
    background-color: white;
    padding: 0.2rem 1rem 0.2rem 1rem;
    border-radius: 1rem;
    border: 1px solid grey;
`;

const AsideContent = (props: Props) => {
    const { phone, email }  = props.resume.identity;
    const phoneNumberWithoutSpace = phone.replace(' ', '');
    const { about } = props.resume.summary;
    const { links } = props.resume;

    const linkedInLink = links.find(link => link.title === 'LinkedIn');
    const githubLink = links.find(link => link.title === 'github');
    return (
        <div className={container}>
            <img src="./images/me.jpg" className={imageStyle} />

            <h3>Contact</h3>
            <a href={`mailto:${email}`}><FaEnvelope />&nbsp;{email}</a>
            <a href={`tel:${phoneNumberWithoutSpace}`}><FaPhone />&nbsp;{phone}</a>

            <h3>Presentation</h3>
            <Paragraph text={about} />

            <div className={linksContainer}>
                {linkedInLink &&
                    <a className={css`flex: 1`} href={linkedInLink.url}>
                        <FaLinkedinSquare size={40}/>
                    </a>
                }
                {githubLink &&
                    <a className={css`flex: 1`} href={githubLink.url}>
                        <FaGithub size={40}/>
                    </a>
                }
            </div>
            <AnchorsContainer>
                <Anchor link="#experiences" label="Experiences" />
                <Anchor link="#side-projects" label="Side projects" />
                <Anchor link="#formations" label="Formations" />
            </AnchorsContainer>
        </div>
    );
};

export default AsideContent;