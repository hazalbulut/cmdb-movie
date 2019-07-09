import { Star } from './star';

export class Movie {
    id: number;
    title: string;
    year: number;
    rated: string;
    released: string;
    runtime: string;
    genre: string;
    director: string;
    writer: string;
    actors?: Star[];
    plot: string;
    language: string;
    country: string;
    awards: string;
    poster: string;
    ratings: string;
    metaScore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbId: string;
    type: string;
    dvd: string;
    boxOffice: string;
    production: string;
    website: string;
    response: boolean;
}
