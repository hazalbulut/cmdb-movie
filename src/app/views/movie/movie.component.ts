import { Component, OnInit } from '@angular/core';
import { MovieStarService } from 'src/app/services/movie-star.service';
import { Movie } from 'src/app/models/movie';
import { ActivatedRoute } from '@angular/router';

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
    constructor(private route: ActivatedRoute, public movieStarService: MovieStarService) { }

    public ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.currentId = +this.id;
        this.resultMovie();
    }

    public resultMovie() {
        this.movieStarService.getMovieById(this.currentId).subscribe((res) => {
            this.movie = res;
        });
    }
}
