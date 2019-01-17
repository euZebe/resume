import Accomplishment from './Accomplishment';

export default interface Job {
    title: string;
    client: string;
    from: string;
    to: string;
    icon: string;
    accomplishments: Accomplishment[];
}
