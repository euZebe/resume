import * as React from 'react';
import styled from 'react-emotion';

interface Props {
    children: string;
}

const Styled = styled('label')`
    color: #50a3d9;
    font-style: italic;
`;

class LightTag extends React.Component<Props> {
    render() {
        return (
            <Styled>{this.props.children}&nbsp; </Styled>
        );
    }
}

export default LightTag;
