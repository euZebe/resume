import * as React from 'react';
import { Fragment } from 'react';

interface Props {
    text: string;
}

/**
 * replaces \n by <p>
 * @param {string} text
 * @constructor
 */
const Paragraph = ({text}: Props) => {
    const blocks = text.split('\n');
    return (
        <Fragment>
            {blocks.map((b, index) => <p key={index}>{b}</p>)}
        </Fragment>
    );
};

export default Paragraph;
