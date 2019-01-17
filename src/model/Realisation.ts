import Link from './Link';

export default interface Realisation {
    name: string;
    tags: string[];
    context?: string;
    objectives?: string[];
    links?: Link[];
}