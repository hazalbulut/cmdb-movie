import { Component, OnInit } from '@angular/core';
import { MovieStarService } from '../../services/movie-star.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Star } from '../../models/star';
import { HttpClient } from '@angular/common/http';

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


    constructor(public http: HttpClient, public movieStarService: MovieStarService, private route: ActivatedRoute, private router: Router) { }

    public ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.searchMovie1 = params['searchMovie1'];
            this.searchMovie2 = params['searchMovie2'];
            this.searchMovie();
        });
        console.log(this.searchMovie1)
    }
    public searchMovie() {
        this.movieStarService.getStarsByTitle(this.searchMovie1).subscribe((movie1Stars) => {
            this.movieStarService.getStarsByTitle(this.searchMovie2).subscribe((movie2Stars) => {
                for (var i = 0, len = movie1Stars.length; i < len; i++) {
                    for (var j = 0, len2 = movie2Stars.length; j < len2; j++) {
                        if (movie1Stars[i].name === movie2Stars[j].name) {
                            this.starData.push(...movie2Stars.splice(j, 1));
                            len2 = movie2Stars.length;
                        }
                    }
                }
                console.log(this.starData);
                console.log(this.starData.map(x => x.name))
            });
        });
    }


}
