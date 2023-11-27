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
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
    @media print {
        width: 80vw;
        
    }
`;

const ResumeHeader = ({ name, title, summaryTags, className }: Props) => (
    <div className={className}>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <TagsContainer>
            {summaryTags.map(tag => (<Tag key={tag}>{tag}</Tag>))}
        </TagsContainer>
    </div>
);

export default ResumeHeader;