import * as React from 'react';
import styled from 'react-emotion';
import { FaChain } from 'react-icons/lib/fa';

interface AnchorProps {
    link: string;
    label: string;
}
const StyledAnchor = styled('div')`
    display: flex;
`;

const Anchor = ({link, label}: AnchorProps) => (
    <StyledAnchor>
        <a href={link}><FaChain />&nbsp;{label}</a>
    </StyledAnchor>
);

export default Anchor;
