import * as React from 'react';
import { css } from 'emotion';
import ResumeContentType from './model/ResumeContentType';
import Job from './model/Job';
import { ReactChild } from 'react';
import AccomplishmentComponent from './AccomplishmentComponent';

const experiencesContainer = css`
    text-align: start;
    padding-left: 1rem;
    margin-top: 2rem;
    width: 90%;
`;

const jobContainer = css`
`;

function renderJob(job: Job): ReactChild {
    const to = job.to ? ` to ${job.to}` : null;
    const client = `${job.client} · ${job.from} ${to}`;
    return (
        <div key={job.from} className={jobContainer}>
            <h3>{job.title}</h3>
            <h4>{client}</h4>
            {job.accomplishments
            && job.accomplishments.map((a, index) => <AccomplishmentComponent key={index} {...a} />)}
        </div>
    );
}

class Main extends React.Component<ResumeContentType> {
    render() {
        const {jobs} = this.props.summary;
        return (
            <div className={experiencesContainer}>
                <h1>EXPERIENCES</h1>
                {jobs.map(renderJob)}
            </div>
        );
    }
}

export default Main;