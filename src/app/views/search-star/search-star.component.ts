import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Star } from '../../models/star';
import { MovieStarService } from '../../services/movie-star.service';

@Component({
    selector: 'app-search-star',
    templateUrl: './search-star.component.html',
    styleUrls: ['./search-star.component.css'],
    providers: [MovieStarService]

})
export class SearchStarComponent implements OnInit {
    public searchMovie1: string;
    public searchMovie2: string;
    public starData: Star[] = [];
    public nameData: string[] = [];

    constructor(public http: HttpClient, public movieStarService: MovieStarService, private route: ActivatedRoute, private router: Router) { }

    public ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            this.searchMovie1 = params.searchMovie1;
            this.searchMovie2 = params.searchMovie2;
            this.searchMovie();
        });
        console.log(this.searchMovie1);
    }
    public searchMovie() {
        this.movieStarService.getStarsByTitle(this.searchMovie1).subscribe((movie1Stars) => {
            this.movieStarService.getStarsByTitle(this.searchMovie2).subscribe((movie2Stars) => {
                for (const starOfMovie1 of movie1Stars) {
                    for (const starOfMovie2 of movie2Stars) {
                        if (starOfMovie1.name === starOfMovie2.name) {
                            this.nameData.push(starOfMovie2.name);
                        }
                    }
                }
                this.movieStarService.getStarsByNames(this.nameData).subscribe((res) => {
                    this.starData = res;
                });
            });
        });
    }
}
