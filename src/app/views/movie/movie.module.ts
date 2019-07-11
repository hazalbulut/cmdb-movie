import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { RouterModule } from '@angular/router';

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
