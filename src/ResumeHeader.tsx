import * as React from 'react';
import Tag from './Tag';
import styled from 'react-emotion';

interface Props {
    name: string;
    className: string;
    title: string;
    summaryTags: string[];
}

const TagsContainer = styled('span')`
    display: flex; 
    flex-flow: row wrap;
    justify-content: center;
    @media print {
        display: block;
    }
`;

const ResumeHeader = ({ name, title, summaryTags, className }: Props) => (
    <div className={className}>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <TagsContainer>
            {summaryTags.map(tag => (<Tag>{tag}</Tag>))}
        </TagsContainer>
    </div>
);

export default ResumeHeader;