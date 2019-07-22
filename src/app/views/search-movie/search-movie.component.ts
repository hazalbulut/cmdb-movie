import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../models/movie';
import { MovieStarService } from '../../services/movie-star.service';

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

        this.route.queryParams.subscribe((params) => {
            this.searchStar1 = params.searchStar1;
            this.searchStar2 = params.searchStar2;
            this.searchStar();
        });
    }

    public searchStar() {
        this.movieStarService.getMoviesByStarName(this.searchStar1).subscribe((star1Movies) => {
            this.movieStarService.getMoviesByStarName(this.searchStar2).subscribe((star2Movies) => {
                for (const movieOfStar1 of star1Movies) {
                    for (const movieOfStar2 of star2Movies) {
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
        this.movieStarService.getMovies().subscribe((el) => { console.log('getMovies ends');});
    }

}
