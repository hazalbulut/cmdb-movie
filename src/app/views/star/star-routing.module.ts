import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StarComponent } from './star.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'star/:id', component: StarComponent, pathMatch: 'full' }
        ])
    ]
})
export class StarRoutingModule {

}
