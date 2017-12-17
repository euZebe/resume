import Link from './Link';
import Job from './Job';
import Formation from './Formation';

export default class Summary {
    title: string;
    tags: string[];
    about: string;
    links: Link[];
    jobs: Job[];
    formations: Formation[];
}