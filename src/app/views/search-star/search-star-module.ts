
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchStarRoutingModule } from './search-star-routing.module';
import { SearchStarComponent } from './search-star.component';

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
