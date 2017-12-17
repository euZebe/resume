import * as React from 'react';
import Identity from './model/Identity';

interface Props {
    identity: Identity;
}

const ResumeHeader = ({ identity }: Props) => (
    <h1>{identity.name}</h1>
);

export default ResumeHeader;