import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieStarService } from 'src/app/services/movie-star.service';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css'],
    providers: [MovieStarService]

})
export class MovieComponent implements OnInit {
    public id: string;
    public currentId: number;
    public movie: Movie;
    constructor(private route: ActivatedRoute, public movieStarService: MovieStarService,public router: Router) {
        this.movie = this.route.snapshot.data.resolverData;

        if (!this.movie || Object.keys(this.movie).length === 0) {
            this.router.navigate(['/404']);
            return;
        }
     }

    public ngOnInit() {
        //
    }
}
