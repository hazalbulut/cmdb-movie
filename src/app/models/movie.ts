import { Star } from './star';

export class Movie {
    public id: number;
    public title: string;
    public year: number;
    public rated: string;
    public released: string;
    public runtime: string;
    public genre: string;
    public director: string;
    public writer: string;
    public actors?: Star[];
    public plot: string;
    public language: string;
    public country: string;
    public awards: string;
    public poster: string;
    public ratings: string;
    public metaScore: string;
    public imdbRating: string;
    public imdbVotes: string;
    public imdbId: string;
    public type: string;
    public dvd: string;
    public boxOffice: string;
    public production: string;
    public website: string;
    public response: boolean;
}
