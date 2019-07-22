
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'not-found-page',
    styleUrls: ['./not-found.component.css'],
    templateUrl: './not-found.component.html'

})
export class NotFoundComponent implements OnInit {
    constructor() {
        //
    }

    public ngOnInit() {
        //
    }
}
