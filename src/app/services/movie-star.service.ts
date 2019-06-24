import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { Movie } from '../movie';
import { tap, catchError, map, filter, flatMap, mergeMap } from 'rxjs/operators';
import { Star } from '../star';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieStarService {

    public movieUrl = 'api/movies';
    public starUrl = 'api/stars';

    constructor(public http: HttpClient) {
    }


    public getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.movieUrl).pipe(
            catchError(err => throwError(err))
        )
    }

    public getStars(): Observable<Star[]> {
        return this.http.get<Star[]>(this.starUrl).pipe(
            catchError(err => throwError(err))
        )
    }

    public searchStarByName(name: string): Observable<Star[]> {
        return this.http.get<Star[]>(this.starUrl + '?name=^' + name).pipe(
            catchError(err => throwError(err))
        )
    }

    public getStarByName(starName: string): Observable<Star> {
        return this.getStars().pipe(
            map(el => el.find(e => e.name == starName)),
            catchError(err => throwError(err))
        )
    }

    public getMoviesByStarName(starName: string): Observable<Movie[]> {
        return this.getStarByName(starName).pipe(
            map(el => el.movies),
            catchError(err => throwError(err))
        )
    }

    public getMovieIdsByStarName(starName: string): Observable<number[]> {
        return this.getMoviesByStarName(starName).pipe(
            map(el => el.map(e => e.id)),
            catchError(err => throwError(err))
        )
    }





    // public getMoviesByStarName(name: string): Observable<Movie[]> {
    //     return this.http.get<Star[]>(this.starUrl + '?name=' + name).pipe(
    //         map(el => {
    //             console.log(el);

    //             return el[0].movies
    //         }),
    //         catchError(err => throwError(err))
    //     )
    // }



    // public getShowStars(): void {
    //     this.getStars()
    //         .subscribe(stars => this.stars = stars);
    // }



    // private handleError<T>(operation = 'operation', result?: T) {
    //     return (error: any): Observable<T> => {
    //         console.error(error);
    //         return of(result as T);
    //     };
    // }

}
