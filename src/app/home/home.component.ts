import { HttpClient } from '@angular/common/http';
import { OnInit, Component } from '@angular/core';
import { Movie } from '../movie';
import { tap, catchError, find, map, filter, mergeAll, flatMap, every, mergeMap, mapTo } from 'rxjs/operators';
import { throwError, Observable, of, merge } from 'rxjs';
import { Star } from '../star';
import { MovieStarService } from '../services/movie-star.service';

@Component({
    selector: 'home-page',
    styleUrls: ['./home.component.css'],
    templateUrl: './home.component.html',
    providers: [MovieStarService]
})
export class HomeComponent implements OnInit {
    public searchStar1: string = 'Jennifer Lawrence';
    public searchStar2: string = "Chris Pratt";
    public searchMovie1: string;
    public searchMovie2: string;
    public person: Observable<Star[]>;
    public stars: Star[];
    public movieIds: number[] = [];

    constructor(public http: HttpClient, public movieStarService: MovieStarService) {
    }

    public ngOnInit() {
        //
    }

    public searchStar() {

        this.movieStarService.getMovieIdsByStarName(this.searchStar1).subscribe((star1Movies) => {
            this.movieStarService.getMovieIdsByStarName(this.searchStar2).subscribe((star2Movies) => {
                this.movieIds = star1Movies.filter(value => star2Movies.includes(value));
                // 1) oku
                // 2) getMoviesByIds [2, 3]
                // 3) filmleri listele
                // 4) filme tiklayinca, filmin sayfasina git /movie/id
                // 5) resolver kullan
            });
        });
    }

    public searchMovie() {
        this.movieStarService.getMovies().subscribe((el) => { console.log("getMovies ends") });
    }
}
