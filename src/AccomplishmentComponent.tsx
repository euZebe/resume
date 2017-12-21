import * as React from 'react';
import Accomplishment from './model/Accomplishment';
import Paragraph from './Paragraph';
import TagsContainer from './TagsContainer';
import LightTag from './LightTag';

class AccomplishmentComponent extends React.Component<Accomplishment> {
    render() {
        const { description, tags } = this.props;
        return (
            <section>
                <Paragraph className="reducedMarginTop" text={description} />
                <TagsContainer>
                    {tags && tags.map(t => (
                        <LightTag>{t}</LightTag>
                    ))}
                </TagsContainer>
            </section>
        );
    }
}

export default AccomplishmentComponent;
