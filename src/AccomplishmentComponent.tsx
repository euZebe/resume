import * as React from 'react';
import Accomplishment from './model/Accomplishment';
import { css } from 'emotion';
import styled from 'react-emotion';
import Paragraph from './Paragraph';

const sectionStyle = css`
    margin-bottom: 1rem;
    padding-left: 1rem;
    margin-left: 0.2rem;
    border-left: 1px solid #50a3d9;
`;

const StyledLabel = styled('label')`
    color: #50a3d9;
`;

class AccomplishmentComponent extends React.Component<Accomplishment> {
    render() {
        const { description, tags } = this.props;
        return (
            <section className={sectionStyle}>
                <Paragraph className="reducedMarginTop" text={description} />
                {tags && tags.map(t => (
                    <StyledLabel>#{t} </StyledLabel>
                ))}
            </section>
        );
    }
}

export default AccomplishmentComponent;
