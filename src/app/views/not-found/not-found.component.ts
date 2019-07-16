import { isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit, Optional, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from 'express';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'not-found-page',
    styleUrls: ['./not-found.component.css'],
    templateUrl: './not-found.component.html'

})
export class NotFoundComponent implements OnInit {
    constructor() {
    }

    public ngOnInit() {

    }
}
