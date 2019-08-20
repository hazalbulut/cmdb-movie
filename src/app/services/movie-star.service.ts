import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Movie } from '../models/movie';
import { Star } from '../models/star';

@Injectable()
export class MovieStarService {
    public movieUrl = 'api/movies';
    public starUrl = 'api/stars';
    public movieIds: number[];

    constructor(public http: HttpClient) {}

    public getMovies(): Observable<Movie[]> {
        return this.http
            .get<Movie[]>('http://localhost:3000/movie')
            .pipe(catchError((err) => throwError(err)));
    }

    public getMoviesByIds(ids: number[]): Observable<Movie[]> {
        return this.getMovies().pipe(
            map((el) => el.filter((e) => ids.includes(e.id))),
            catchError((err) => throwError(err))
        );
    }

    public getMovieByTitle(title: string): Observable<Movie> {
        return this.http
            .get<Movie>('http://localhost:3000/movie/' + title)
            .pipe(catchError((err) => throwError(err)));
    }
    public getStarsByTitle(movieTitle: string): Observable<Star[]> {
        return this.getMovieByTitle(movieTitle).pipe(
            map((el) => el.actors),
            catchError((err) => throwError(err))
        );
    }

    public getMovieById(movieId: number): Observable<Movie> {
        return this.getMovies().pipe(
            map((el) => el.find((e) => e.id === movieId)),
            catchError((err) => throwError(err))
        );
    }
    public getMovieIdsByStarName(starName: string): Observable<number[]> {
        return this.getStarByName(starName).pipe(
            map((el) => el.movies.map((e) => e.id)),
            tap((e) => (this.movieIds = e)),
            catchError((err) => throwError(err))
        );
    }

    public getStars(): Observable<Star[]> {
        return this.http
            .get<Star[]>('http://localhost:3000/star')
            .pipe(catchError((err) => throwError(err)));
    }

    public getStarByName(name: string): Observable<Star> {
        return this.http
            .get<Star>('http://localhost:3000/star/' + name)
            .pipe(catchError((err) => throwError(err)));
    }

    public getStarsByNames(names: string[]): Observable<Star[]> {
        return this.getStars().pipe(
            map((el) => el.filter((e) => names.includes(e.name))),
            catchError((err) => throwError(err))
        );
    }

    public getStarById(id: number): Observable<Star> {
        return this.getStars().pipe(
            map((e) => e.find((el) => el.id === id)),
            catchError((err) => of(err))
        );
    }

    public getMoviesByStarName(starName: string): Observable<Movie[]> {
        return this.getStarByName(starName).pipe(
            map((el) => el.movies),
            catchError((err) => throwError(err))
        );
    }
}
