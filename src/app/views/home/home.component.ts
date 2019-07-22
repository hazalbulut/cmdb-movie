import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieFormModel } from '../../models/movie-form';
import { StarFormModel } from '../../models/star-form';

@Component({
    selector: 'home-page',
    styleUrls: ['./home.component.css'],
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    public starForm: FormGroup;
    public movieForm: FormGroup;
    constructor(public http: HttpClient, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    }
    public ngOnInit() {
        this.starForm = this.fb.group({
            searchStar1: ['Jennifer Lawrence', Validators.required],
            searchStar2: ['Chris Pratt', Validators.required]
        });
        this.movieForm = this.fb.group({
            searchMovie1: ['Passengers', Validators.required],
            searchMovie2: ['Father!', Validators.required]
        });
    }
    public onStarSubmit(model: StarFormModel, isValid: boolean) {
        if (!isValid) { return; }
        this.router.navigateByUrl('/search-movie?searchStar1=' + model.searchStar1 + '&searchStar2=' + model.searchStar2);
    }
    public onMovieSubmit(model: MovieFormModel, isValid: boolean) {
        if (!isValid) { return; }
        this.router.navigateByUrl('/search-star?searchMovie1=' + model.searchMovie1 + '&searchMovie2=' + model.searchMovie2);
    }
}
