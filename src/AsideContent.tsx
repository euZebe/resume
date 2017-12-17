import * as React from 'react';
import { css } from 'emotion';
import { FaLinkedinSquare, FaGithub, FaEnvelope, FaPhone } from 'react-icons/lib/fa';
import ResumeContentType from './model/ResumeContentType';
import Paragraph from './Paragraph';

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

const AsideContent = (props: Props) => {
    const { phone, email }  = props.resume.identity;
    const phoneNumberWithoutSpace = phone.replace(' ', '');
    const { about, links } = props.resume.summary;

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
        </div>
    );
};

export default AsideContent;