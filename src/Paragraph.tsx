import * as React from 'react';
import { Fragment } from 'react';
import { css } from 'emotion';

interface Props {
    text: string;
    className?: string;
}

const reducedMarginTop = css`
    margin-bottom: 0.2rem;    
`;

/**
 * replaces \n by <p>
 * @param {string} text
 * @constructor
 */
const Paragraph = ({text, className}: Props) => {
    const blocks = text.split('\n');
    const style = className === 'reducedMarginTop' ? reducedMarginTop : undefined;
    return (
        <Fragment>
            {blocks.map((block, index) => (
                <p key={index} className={style}>
                    {block}
                </p>
            ))}
        </Fragment>
    );
};

export default Paragraph;
