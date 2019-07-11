import { Movie } from './movie';

export class Star {
    id: number;
    name: string;
    birthDate: string;
    birthPlace: string;
    bio: string;
    movies?: Movie[];
    image:string;
}
