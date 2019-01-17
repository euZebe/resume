import Job from './Job';
import Formation from './Formation';

export default interface Summary {
    title: string;
    tags: string[];
    about: string;
    jobs: Job[];
    formations: Formation[];
}