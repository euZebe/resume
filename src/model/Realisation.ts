import Link from './Link';

export default class Realisation {
    name: string;
    tags: string[];
    context?: string;
    objectives?: string[];
    links?: Link[];
}