import { Component } from '@angular/core';
import { Router, RouterEvent, NavigationStart, ResolveStart, ResolveEnd, ActivationEnd, NavigationEnd, NavigationCancel, NavigationError, GuardsCheckStart, ActivationStart, GuardsCheckEnd } from '@angular/router';
import { StarComponent } from './views/star/star.component';
import { StarResolverService } from './views/star/star.resolver';
import { StarRoutingModule } from './views/star/star-routing.module';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public showHeader: boolean = false;
    public showFooter: boolean = false;
    public showSpinner: boolean = true;

    constructor(private router: Router ) {

    }

    public ngOnInit() {
        this.router.events.subscribe((event: RouterEvent) => {
            this.navigationInterceptor(event);
        });
    }


    public navigationInterceptor(event: RouterEvent): void {

        if (event instanceof NavigationStart) {
            console.log('NavigationStart');
        }

        if (event instanceof GuardsCheckStart) {
            console.log('GuardsCheckStart');
        }

        if (event instanceof ActivationStart) {
            console.log('ActivationStart');
        }

        if (event instanceof GuardsCheckEnd) {
            console.log('GuardsCheckEnd');
        }

        if (event instanceof ResolveStart) {
            console.log('ResolveStart');
        }

        if (event instanceof ResolveEnd) {
            console.log('ResolveEnd');
            this.showHeader = true;
            this.showFooter = true;
            this.showSpinner = false;
        }

        if (event instanceof ActivationEnd) {
            console.log('ActivationEnd');
        }

        if (event instanceof NavigationEnd) {
            console.log('NavigationEnd');
        }

        if (event instanceof NavigationCancel) {
            console.log('NavigationCancel');
        }

        if (event instanceof NavigationError) {
            console.log('NavigationError');
        }
    }
}
