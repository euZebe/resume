import * as React from 'react';
import styled from 'react-emotion';
import ResumeContentType from './model/ResumeContentType';
import Job from './model/Job';
import {ReactChild} from 'react';
import AccomplishmentComponent from './AccomplishmentComponent';
import Formation from './model/Formation';
import Realisation from './model/Realisation';
import Paragraph from './Paragraph';
import TagsContainer from './TagsContainer';
import LightTag from './LightTag';
import Link from './model/Link';
import Anchor from './Anchor';
import Talk from "./model/Talk";

const ExperiencesContainer = styled('div')`
  text-align: start;
  padding-left: 1rem;
  margin-top: 2rem;
  width: 90%;
`;

const Footer = styled('div')`
  margin-bottom: 4rem;
`;

function renderJob(job: Job): ReactChild {
    const to = job.to ? ` - ${job.to}` : '';
    const client = `${job.client} · ${job.from} ${to}`;
    return (
        <div key={`${job.from}-${job.client}`}>
            <h3>{job.title}</h3>
            <h4>{client}</h4>
            {job.accomplishments
                && job.accomplishments.map((a, index) => <AccomplishmentComponent key={index} {...a} />)}
        </div>
    );
}

function renderFormation(formation: Formation): ReactChild {
    const to = formation.to ? ` - ${formation.to}` : '';
    const client = `${formation.organizer} · ${formation.from} ${to}`;
    return (
        <section key={formation.from}>
            <h3>{formation.title}</h3>
            <h4>{client}</h4>
        </section>
    );
}

function renderRealisation(realisation: Realisation): ReactChild {
    return (
        <div key={realisation.name}>
            <h3>{realisation.name}</h3>
            <section>
                {realisation.context && <Paragraph text={realisation.context}/>}
                {realisation.objectives && renderObjectives(realisation.objectives)}
                {realisation.links && renderProjectLinks(realisation.links)}
                <TagsContainer>
                    {realisation.tags &&
                        realisation.tags.map((t, index) => (<LightTag key={index}>{t}</LightTag>))
                    }
                </TagsContainer>
            </section>
        </div>
    );
}

function renderObjectives(objectives: string[]): ReactChild {
    return (
        <React.Fragment>
            <h4>Objectives</h4>
            <ul>
                {objectives.map(o => (<li>{o}</li>))}
            </ul>
        </React.Fragment>
    );
}

function renderProjectLinks(links: Link[]): ReactChild {
    return (
        <React.Fragment>
            <h4>Links</h4>
            <ul>
                {links.map(l => (
                    <Anchor link={l.url} label={l.title} key={l.title}/>
                ))}
            </ul>
        </React.Fragment>
    );
}

function renderTalk(talk: Talk): ReactChild {
    return (
        <div key={talk.url} style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <h3><a href={talk.url}>{talk.title}</a></h3>&nbsp;- {talk.organization}
        </div>
    )
}

class Main extends React.Component<ResumeContentType> {
    render() {
        const {jobs, formations} = this.props.summary;
        const {realisations, talks} = this.props;
        return (
            <ExperiencesContainer>
                <h1 id="talks">TALKS</h1>
                {talks.map(renderTalk)}
                <h1 id="experiences">EXPERIENCES</h1>
                {jobs.map(renderJob)}
                <h1 id="side-projects">SIDE PROJECTS</h1>
                {realisations.map(renderRealisation)}
                <h1 id="formations">FORMATIONS</h1>
                {formations.map(renderFormation)}
                <Footer/>
            </ExperiencesContainer>
        );
    }
}

export default Main;
