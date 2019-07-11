import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { Movie } from '../models/movie';
import { tap, catchError, map, filter, flatMap, mergeMap, find } from 'rxjs/operators';
import { Star } from '../models/star';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieStarService {

    public movieUrl = 'api/movies';
    public starUrl = 'api/stars';
    public movieIds: number[];

    constructor(public http: HttpClient) {
    }

    public getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.movieUrl).pipe(
            catchError(err => throwError(err))
        );
    }

    public getMoviesByIds(ids: number[]): Observable<Movie[]> {
        return this.getMovies().pipe(
            // tap(e => console.log(ids)),
            map(el => el.filter(e => ids.includes(e.id))),
            catchError(err => throwError(err))
        );
    }

    public getMovieByTitle(movieName: string): Observable<Movie> {
        return this.getMovies().pipe(
            // tap(e => console.log(movieName)),
            map(el => el.find(e => e.title == movieName)),
            catchError(err => throwError(err))
        );
    }
    public getStarsByTitle(movieTitle: string): Observable<Star[]> {
        return this.getMovieByTitle(movieTitle).pipe(
            // tap(e => console.log(e)),
            map(el => el.actors),
            catchError(err => throwError(err))
        );
    }


    public getMovieById(movieId: number): Observable<Movie> {
        return this.getMovies().pipe(
            // tap(e => console.log(movieId)),
            map(el => el.find(e => e.id == movieId)),
            catchError(err => throwError(err))
        );
    }
    public getMovieIdsByStarName(starName: string): Observable<number[]> {
        return this.getStarByName(starName).pipe(
            map(el => el.movies.map(e => e.id)),
            // tap(e => console.log("deniyoruzzz2")),
            tap(e => this.movieIds = e),
            // tap(e => console.log(this.movieIds)),
            catchError(err => throwError(err))
        );
    }

    public getStars(): Observable<Star[]> {
        return this.http.get<Star[]>(this.starUrl).pipe(
            // tap(e => console.log(e)),
            catchError(err => throwError(err))
        );
    }
    public getStarByName(starName: string): Observable<Star> {
        return this.getStars().pipe(
            // tap(e => console.log(starName)),
            map(el => el.find(e => e.name == starName)),
            catchError(err => throwError(err))
        );
    }

    public getStarsByNames(names: string[]): Observable<Star[]> {
        return this.getStars().pipe(

            map(el => el.filter(e => names.includes(e.name))),
            catchError(err => throwError(err))
        );
    }

    public getStarById(id:number):Observable<Star>{
        return this.getStars().pipe(
            map(e=>e.find(el=>el.id==id)),
            catchError(err=>throwError(err))
        )
    }

    public getMoviesByStarName(starName: string): Observable<Movie[]> {
        return this.getStarByName(starName).pipe(
            // tap(e => console.log(e)),
            map(el => el.movies),
            catchError(err => throwError(err))
        );
    }

    // public searchStarByName(name: string): Observable<Star[]> {
    //     return this.http.get<Star[]>(this.starUrl + '?name=^' + name).pipe(
    //         catchError(err => throwError(err))
    //     );
    // }
}
