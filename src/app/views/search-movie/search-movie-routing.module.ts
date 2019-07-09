import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchMovieComponent } from './search-movie.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'search-movie', component: SearchMovieComponent }
        ])
    ]
})
export class SearchMovieRoutingModule {

}
