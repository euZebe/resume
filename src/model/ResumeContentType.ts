import Identity from './Identity';
import Summary from './Summary';

export default class ResumeContentType {

    static desserialize(json: any): ResumeContentType {
        return Object.setPrototypeOf(json, ResumeContentType.prototype);
    }

    constructor(public identity: Identity, public summary: Summary) { }

}