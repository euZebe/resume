import * as React from 'react';
import { ReactChild } from 'react';
import styled from 'react-emotion';

interface Props {
    children?: ReactChild;
}

const StyledTag = styled('span')`
    color: white;
    background-color: #50a3d9;
    margin-right: 0.5rem;
    padding: 0.1rem 0.4rem 0.1rem 0.4rem;
    border-radius: 1rem;
    white-space: nowrap;
    
    @media screen and (max-width: 1000px) {
        margin-bottom: 0.3rem;
    }
`;

const Tag = (props: Props) => (
    <StyledTag>
        {props.children}
    </StyledTag>
);

export default Tag;
