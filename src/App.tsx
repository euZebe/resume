import * as React from 'react';
import { css } from 'react-emotion';
import styled  from 'react-emotion';
import ResumeContentType from './model/ResumeContentType';
import ResumeHeader from './ResumeHeader';
import AsideContent from './AsideContent';
import Main from './Main';
const json = require('./content/resume.json');

const resumeContent = ResumeContentType.desserialize(json);

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
`;

const Container = styled('div')`
    text-align: center;
    height: 100%;
    background-color: white;
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-areas:
            "aside header"
            "aside content";
            
    @media screen {
        box-shadow: 0 12px 15px 6px rgba(0, 0, 0, 0.7);
        width: 1000px;
        margin: 10px 0 10px 0;
    }
    
    @media print {
        grid-template-columns: 200px 1fr;
        width: 100%;
    }
`;

class App extends React.Component {

    render() {
        return (
            <Container id="experiences">
                <ResumeHeader
                    className={headerStyle}
                    name={resumeContent.identity.name}
                    title={resumeContent.summary.title}
                    summaryTags={resumeContent.summary.tags}
                />
                <aside className={asideStyle}>
                    <AsideContent resume={resumeContent} />
                </aside>
                <article className={mainStyle}>
                    <Main {...resumeContent} />
                </article>
            </Container>
        );
    }
}

export default App;
