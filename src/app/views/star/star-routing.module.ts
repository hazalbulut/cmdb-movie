import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StarComponent } from './star.component';
import { StarGuard } from './star.guard';
import { StarResolverService } from './star.resolver';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'star/:id',
                pathMatch: 'full',
                canActivate: [StarGuard],
                resolve: {
                    resolverData: StarResolverService
                },
                component: StarComponent,
                // data: {
                //     title: 'Star List',
                //     second: 'ikinci'
                // },
            }
        ])
    ]
})
export class StarRoutingModule {

}
