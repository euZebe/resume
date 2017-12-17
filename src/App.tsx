import * as React from 'react';
import { css } from 'react-emotion';
import ResumeContentType from './model/ResumeContentType';
import ResumeHeader from './ResumeHeader';
import AsideContent from './AsideContent';

const json = require('./content/resume.json');

const resumeContent = ResumeContentType.desserialize(json);

const containerStyle = css`
    text-align: center;
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 280px 1fr;
    grid-template-areas: 
        "aside header"
        "aside content"
`;

const headerStyle = css`
    grid-area: header;
`;

const asideStyle = css`
    grid-area: aside;
    border-right: 2px solid #ddd;
    display: flex;
`;

const mainStyle = css`
    grid-area: content;
    background-color: #3dd;
`;

class App extends React.Component {

    render() {
        return (
            <div className={containerStyle}>
                <ResumeHeader
                    className={headerStyle}
                    name={resumeContent.identity.name}
                    title={resumeContent.summary.title}
                    summaryTags={resumeContent.summary.tags}
                />
                <aside className={asideStyle}>
                    <AsideContent resume={resumeContent} />
                </aside>
                <article className={mainStyle}>main</article>
            </div>
        );
    }
}

export default App;
