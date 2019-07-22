import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '**', redirectTo: '404',
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
