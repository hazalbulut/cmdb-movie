
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchStarRoutingModule } from './search-star-routing.module';
import { SearchStarComponent } from './search-star.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SearchStarRoutingModule,
        RouterModule
    ],
    declarations: [
        SearchStarComponent
    ]
})

export class SearchStarModule { }
