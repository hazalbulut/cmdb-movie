import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRoutingModule } from './star-routing.module';
import { StarComponent } from './star.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        StarRoutingModule,
        RouterModule
    ],
    declarations: [
        StarComponent
    ]
})

export class StarModule { }
