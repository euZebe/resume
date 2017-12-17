import * as React from 'react';
import { css } from 'emotion';
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

const AsideContent = (props: Props) => (
    <div className={container}>
        <img src="./images/me.jpg" className={imageStyle} />

        <h3>Contact</h3>
        <a href="mailto:jea@ads.fr">e-mail</a>
        <a href="tel:+33 ">phone</a>

        <h3>Presentation</h3>
        <Paragraph text={props.resume.summary.about} />
    </div>
);

export default AsideContent;