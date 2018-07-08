import Identity from './Identity';
import Summary from './Summary';
import Link from './Link';
import Realisation from './Realisation';

export default class ResumeContentType {

    static desserialize(json: any): ResumeContentType {
        return Object.setPrototypeOf(json, ResumeContentType.prototype);
    }

    constructor(
        public identity: Identity,
        public summary: Summary,
        public links: Link[],
        public realisations: Realisation[],
        public lang: string,
    ) { }

}