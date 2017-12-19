import Job from './Job';
import Formation from './Formation';

export default class Summary {
    title: string;
    tags: string[];
    about: string;
    jobs: Job[];
    formations: Formation[];
}