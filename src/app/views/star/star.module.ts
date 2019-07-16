import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRoutingModule } from './star-routing.module';
import { StarComponent } from './star.component';
import { RouterModule } from '@angular/router';
import { MovieStarService } from 'src/app/services/movie-star.service';


@NgModule({
    imports: [
        CommonModule,
        StarRoutingModule,
        RouterModule
    ],
    declarations: [
        StarComponent
    ],
    providers: [
        MovieStarService
    ]

})

export class StarModule {}
