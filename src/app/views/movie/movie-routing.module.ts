import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './movie.component';
import { MovieGuard } from './movie.guard';
import { MovieResolverService } from './movie.resolver';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'movie/:id',
                pathMatch: 'full',
                canActivate: [MovieGuard],
                resolve: {
                    resolverData: MovieResolverService
                },
                component: MovieComponent
            }
        ])
    ]
})
export class MovieRoutingModule {

}
