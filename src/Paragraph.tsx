import * as React from 'react';

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
        <p>
            {blocks.map((b, index) => <p key={index}>{b}</p>)}
        </p>
    );
};

export default Paragraph;
