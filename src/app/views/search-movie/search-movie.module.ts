import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchMovieRoutingModule } from './search-movie-routing.module';
import { SearchMovieComponent } from './search-movie.component';

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
