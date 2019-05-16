import { Resource } from '../../shared/api/resource';

export class Event extends Resource<number> {
    constructor(
        public id: number,
        public name: string,
        public category: string
    ) {
        super();
    }
}
