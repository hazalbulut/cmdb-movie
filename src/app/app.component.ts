import { Component, OnInit } from '@angular/core';
import { ActivationEnd, ActivationStart, GuardsCheckEnd, GuardsCheckStart, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, ResolveEnd, ResolveStart, Router, RouterEvent, } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public showHeader: boolean = false;
    public showFooter: boolean = false;
    public showSpinner: boolean = true;

    constructor(private router: Router) {

    }

    public ngOnInit() {
        this.router.events.subscribe((event: RouterEvent) => {
            this.navigationInterceptor(event);
        });
    }

    public navigationInterceptor(event: RouterEvent): void {

        if (event instanceof NavigationStart) {
            // console.log('NavigationStart');
        }

        if (event instanceof GuardsCheckStart) {
            // console.log('GuardsCheckStart');
        }

        if (event instanceof ActivationStart) {
            // console.log('ActivationStart');
        }

        if (event instanceof GuardsCheckEnd) {
            // console.log('GuardsCheckEnd');
        }

        if (event instanceof ResolveStart) {
            // console.log('ResolveStart');
        }

        if (event instanceof ResolveEnd) {
            // console.log('ResolveEnd');
            this.showHeader = true;
            this.showFooter = true;
            this.showSpinner = false;
        }

        if (event instanceof ActivationEnd) {
            // console.log('ActivationEnd');
        }

        if (event instanceof NavigationEnd) {
            // console.log('NavigationEnd');
        }

        if (event instanceof NavigationCancel) {
            // console.log('NavigationCancel');
        }

        if (event instanceof NavigationError) {
            // console.log('NavigationError');
        }
    }
}
