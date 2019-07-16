import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Star } from 'src/app/models/star';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit {
    public actor: Star;
    constructor(private route: ActivatedRoute, public router: Router) {
        console.log('COMPONENT');
        this.actor = this.route.snapshot.data.resolverData; // route tan gelen data ve resolverData ya buradan erişebilirsin.

        if (!this.actor || Object.keys(this.actor).length === 0) {
            this.router.navigate(['/404']);
            return;
        }
    }

    public ngOnInit() {
    }
}
