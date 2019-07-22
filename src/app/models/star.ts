import { Movie } from './movie';

export class Star {
    public id: number;
    public name: string;
    public birthDate: string;
    public birthPlace: string;
    public bio: string;
    public movies?: Movie[];
    public image: string;
}
