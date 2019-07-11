
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchMovieRoutingModule } from './search-movie-routing.module';
import { SearchMovieComponent } from './search-movie.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        SearchMovieRoutingModule,
        RouterModule
    ],
    declarations: [
        SearchMovieComponent
    ]
})

export class SearchMovieModule { }
