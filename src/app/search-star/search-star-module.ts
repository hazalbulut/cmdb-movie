
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchStarRoutingModule } from './search-star-routing.module';
import { SearchStarComponent } from './search-star.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SearchStarRoutingModule
    ],
    declarations: [
        SearchStarComponent
    ]
})

export class SearchStarModule { }
