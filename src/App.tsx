import * as React from 'react';
import { css } from 'react-emotion';
import ResumeContentType from './model/ResumeContentType';
import ResumeHeader from './ResumeHeader';

const json = require('./content/resume.json');

const resumeContent = ResumeContentType.desserialize(json);

const containerStyle = css`
    text-align: center;
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 250px 1fr;
`;

class App extends React.Component {

    render() {
        return (
            <div className={containerStyle}>
                <ResumeHeader identity={resumeContent.identity} />
                <div id="contact" />
                <aside style={{backgroundColor: '#dd3'}}>aside</aside>
                <article style={{backgroundColor: '#3dd'}}>main</article>
            </div>
        );
    }
}

export default App;
