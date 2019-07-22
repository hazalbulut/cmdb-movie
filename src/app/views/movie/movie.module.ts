import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';

@NgModule({
    imports: [
        CommonModule,
        MovieRoutingModule,
        RouterModule
    ],
    declarations: [
        MovieComponent
    ]
})

export class MovieModule { }
