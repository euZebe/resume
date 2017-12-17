import * as React from 'react';
import Tag from './Tag';

interface Props {
    name: string;
    className: string;
    title: string;
    summaryTags: string[];
}

const ResumeHeader = ({ name, title, summaryTags, className }: Props) => (
    <div className={className}>
        <h1>{name}</h1>
        <h2>{title}</h2>
        {summaryTags.map(tag => <Tag key={tag}>{tag}</Tag>)}
    </div>
);

export default ResumeHeader;