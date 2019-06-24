// import { Injectable } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
// import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
// import { Observable, of, Subject } from 'rxjs';
// import { Movie } from './movie';
// import { Star } from './star';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';

// @Injectable({
//     providedIn: 'root'
// })

// export class CmdbService {

//     public movies: Movie[];
//     public stars: Star[];
//     public movie: Observable<Movie[]>;
//     public star: Observable<Star[]>;
//     public denememovie = new Movie();
//     // public denemestar = new Star();
//     public searchMovie1 = '';
//     public searchMovie2 = '';
//     public searchStar1 ='';
//     public searchStar2 = '';
//     private searchTerms = new Subject<string>();

//     constructor(private http: HttpClient, private CmdbService) { }

//     public ngOnInit(): void {
//         // this.movie = this.searchTerms.pipe(
//         //     debounceTime(300),

//         //     distinctUntilChanged(),
//         //     switchMap((term: string) => this.CmdbService.SearchMovie(term)),
//         // );
//     }

//     public SearchStar() {

//         // if(this.searchStar1.filter(this.denemestar.Movies.values ))
//         // {
//         //     return(console.log(this.))};


//     }
//     public SearchMovie() {

//     }

//     public search(term: string): void {
//         this.searchTerms.next(term);
//     }

//     // public searchMovie(term: string): Observable<Movie[]> {
//     //     if (!term.trim()) {
//     //         // if not search term, return empty hero array.
//     //         return of([]);
//     //     }
//     //     return this.http.get<Movie[]>(`${this.movie}/?name=${term}`).pipe(
//     //         tap(x => this)),
//     //         catchError(this.handleError<Hero[]>('searchHeroes', []))
//     // )
//     // }
// }
