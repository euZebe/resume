import * as React from 'react';
import styled from 'react-emotion';

interface Props {
    children: string;
}

const Styled = styled('label')`
    color: #50a3d9;
`;

class LightTag extends React.Component<Props> {
    render() {
        return (
            <Styled>#{this.props.children} </Styled>
        );
    }
}

export default LightTag;
