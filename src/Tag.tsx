import * as React from 'react';
import { ReactChild } from 'react';
import { css } from 'emotion';

interface Props {
    children?: ReactChild;
}

const tagStyle = css`
    color: white;
    background-color: #50a3d9;
    margin-left: 0.5rem;
    padding: 0.1rem 0.4rem 0.1rem 0.4rem;
    border-radius: 1rem;
    white-space: nowrap;
`;

const Tag = (props: Props) => (
    <span className={tagStyle}>
        {props.children}
    </span>
);

export default Tag;
