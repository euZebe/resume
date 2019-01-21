import * as React from 'react';
import { css } from 'react-emotion';
import styled  from 'react-emotion';
import ResumeHeader from './ResumeHeader';
import AsideContent from './AsideContent';
import Main from './Main';
import ResumeContentType from "./model/ResumeContentType";
const json = require('./content/resume.json');
const jsonFr = require('./content/resume.fr.json');

const params = new URLSearchParams(location.href.substring(window.location.href.indexOf('?') + 1));
const lang = params.get('lang') || 'en';
const resumeContent = ResumeContentType.desserialize(lang === 'fr' ? jsonFr : json);

const headerStyle = css`
    grid-area: header;
    @media print {
        text-align: left;
    }
`;

const asideStyle = css`
    grid-area: aside;
    border-right: 2px solid #ddd;
    display: flex;
    @media print {
        border: none;
        display: block;
    }
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
    
    h1 {
        page-break-before: auto;
    }
    
    @media print {
        display: block;
        width: 100%;
    }
    
    @media screen and (max-width: 1000px) {
        grid-template-areas: "header" "aside" "content";
        grid-template-columns: 1fr;
    }
`;

class App extends React.Component {

    render() {
        return (
            //<LangContext.Provider value={lang}>
                <Container>
                    <ResumeHeader
                        className={headerStyle}
                        name={resumeContent.identity.name}
                        title={resumeContent.summary.title}
                        summaryTags={resumeContent.summary.tags}
                    />
                    <aside className={asideStyle}>
                        <AsideContent resume={resumeContent} lang={lang}/>
                    </aside>
                    <article className={mainStyle}>
                        <Main {...resumeContent} lang={lang}/>
                    </article>
                </Container>
            // </LangContext.Provider>
        );
    }
}

export default App;
