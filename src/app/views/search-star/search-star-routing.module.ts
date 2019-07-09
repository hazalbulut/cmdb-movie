import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchStarComponent } from './search-star.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'search-star', component: SearchStarComponent }
        ])
    ]
})
export class SearchStarRoutingModule {

}
