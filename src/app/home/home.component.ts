import { HttpClient } from '@angular/common/http';
import { OnInit, Component } from '@angular/core';
import { Movie } from '../movie';
import { tap, catchError, find, map, filter, mergeAll, flatMap, every, mergeMap } from 'rxjs/operators';
import { throwError, Observable, of } from 'rxjs';
import { Star } from '../star';

@Component({
    selector: 'home-page',
    styleUrls: ['./home.component.css'],
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    public searchStar1: string = "Jennifer Lawrence";
    public searchStar2: string = "Chris Pratt";
    public searchMovie1: string;
    public searchMovie2: string;
    public person: Observable<Star[]>;
    public stars: Star[];

    constructor(public http: HttpClient) {
    }

    public ngOnInit() {
        console.log('OnInit');
        this.getShowStars();

    }

    public SearchMovie() {
        this.getMovies().subscribe((el) => { console.log("subscribe bitti") });
    }

    public SearchStar() {
        this.getStarByName(2).subscribe((el) => { console.log(el, "subscribe bittiasdad") });
    }

    public getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>('api/movies').pipe(
            tap(data => console.log(data)),
            catchError(err => {
                console.log(err);
                return throwError(err);
            })
        )
    }

    public getStars(): Observable<Star[]> {
        return this.http.get<Star[]>('api/stars').pipe(
            catchError(this.handleError<Star[]>('getStars', []))
        );
    }
    //star isimlerini anasayfada göstermeyi denedim.
    public getShowStars(): void {
        this.getStars()
            .subscribe(stars => this.stars = stars);
    }

    public getStarByName(id: number): Observable<Star> {
        const url = `${this.starUrl}/${id}`
        return this.http.get<Star>(url).pipe(
            catchError(this.handleError<Star>(`getStarByName=${id}`))
        )
    }

    private starUrl = 'api/stars';
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }


    // public getStars(): Observable<Star[]> {
    //     return this.http.get<Star[]>('api/stars/2').pipe(
    //         tap(data => console.log(data)),
    //         catchError(err => {
    //             console.log(err);
    //             return throwError(err);
    //         })
    //     )
    // }

}
