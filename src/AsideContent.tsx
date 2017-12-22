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
    
    @media screen and (max-width: 1000px) {
        width: auto;
        height: 100px;
    }
`;

const H3 = styled('h3')`
    margin-top: 0.5rem;
    padding-top: 0.5rem;
    border-top: 1px solid #ddd;
`;

const LinksContainer = styled('div')`
    display: flex;
    
    @media print {
        flex-direction: column;
    }
`;

const BigIconLink = styled('a')`
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
        }
    }
`;

const AnchorsContainer = styled('div')`
    position: fixed;
    bottom: 10px;
    background-color: white;
    padding: 0.2rem 1rem 0.2rem 1rem;
    border-radius: 1rem;
    border: 1px solid grey;
    
    @media print {
        display: none;
    }
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

            <H3>Contact</H3>
            <LinksContainer>
                <BigIconLink href={`mailto:${email}`}>
                    <FaEnvelope size={30}/>
                    <label>{email}</label> {/* visible only in print mode */}
                </BigIconLink>

                <BigIconLink href={`tel:${phoneNumberWithoutSpace}`}>
                    <FaPhone size={30}/>
                    <label>{phone}</label> {/* visible only in print mode */}
                </BigIconLink>

            </LinksContainer>

            <H3>Presentation</H3>
            <Paragraph text={about} />

            <H3>Links</H3>
            <LinksContainer>
                {linkedInLink &&
                    <BigIconLink href={linkedInLink.url}>
                        <FaLinkedinSquare size={30}/>
                        <label>{linkedInLink.url.replace('https://', '')}</label>
                    </BigIconLink>
                }
                {githubLink &&
                    <BigIconLink href={githubLink.url}>
                        <FaGithub size={30}/>
                        <label>{githubLink.url.replace('https://', '')}</label>
                    </BigIconLink>
                }
            </LinksContainer>

            <AnchorsContainer id="innerLinks">
                <Anchor link="#experiences" label="Experiences" />
                <Anchor link="#side-projects" label="Side projects" />
                <Anchor link="#formations" label="Formations" />
            </AnchorsContainer>
        </div>
    );
};

export default AsideContent;