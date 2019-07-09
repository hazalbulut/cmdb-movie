import { HttpClient } from '@angular/common/http';
import { OnInit, Component } from '@angular/core';
import { Movie } from '../movie';
import { tap, catchError, find, map, filter, mergeAll, flatMap, every, mergeMap, mapTo } from 'rxjs/operators';
import { throwError, Observable, of, merge } from 'rxjs';
import { Star } from '../star';
import { MovieStarService } from '../services/movie-star.service';
import { SearchMovieRoutingModule } from './search-movie-routing.module';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';


@Component({
    selector: 'app-search-movie',
    templateUrl: './search-movie.component.html',
    styleUrls: ['./search-movie.component.css'],
    providers: [MovieStarService]
})
export class SearchMovieComponent implements OnInit {
    public searchStar1: string;
    public searchStar2: string;
    public movieData: Movie[] = [];
    public idData: number[] = [];

    constructor(public http: HttpClient, public movieStarService: MovieStarService, private route: ActivatedRoute, private router: Router) {
    }

    public ngOnInit() {

        this.route.queryParams.subscribe(params => {
            this.searchStar1 = params['searchStar1'];
            this.searchStar2 = params['searchStar2'];
            this.searchStar();
        });
    }

    public searchStar() {
        this.movieStarService.getMoviesByStarName(this.searchStar1).subscribe((star1Movies) => {
            this.movieStarService.getMoviesByStarName(this.searchStar2).subscribe((star2Movies) => {
                for (let movieOfStar1 of star1Movies) {
                    for (let movieOfStar2 of star2Movies) {
                        if (movieOfStar1.title === movieOfStar2.title) {
                            this.idData.push(movieOfStar2.id);
                        }
                    }
                }

                this.movieStarService.getMoviesByIds(this.idData).subscribe((res) => {
                   this.movieData = res;
                });
            });
        });
    }

    public searchMovie() {
        this.movieStarService.getMovies().subscribe((el) => { console.log("getMovies ends") });
    }

    // 3) filme tiklayinca, filmin sayfasina git /movie/id
    // 4) resolver kullan

}
