
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchMovieRoutingModule } from './search-movie-routing.module';
import { SearchMovieComponent } from './search-movie.component';


@NgModule({
    imports: [
        CommonModule,
        SearchMovieRoutingModule
    ],
    declarations: [
        SearchMovieComponent
    ]
})

export class SearchMovieModule { }
