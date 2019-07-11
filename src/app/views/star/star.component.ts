import { OnInit, Component } from '@angular/core';
import { MovieStarService } from '../../services/movie-star.service';
import { StarRoutingModule } from './star-routing.module';
import { ActivatedRoute } from '@angular/router';
import { Star } from 'src/app/models/star';


@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css'],
    providers: [MovieStarService]
})
export class StarComponent implements OnInit {
    public id: string;
    public currentId: number;
    public actor:Star;


    constructor(private route: ActivatedRoute, public movieStarService: MovieStarService) {
    }

    public ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.currentId = + this.id;
        this.resultStar();

    }
    public resultStar() {
       this.movieStarService.getStarById(this.currentId).subscribe((stars)=>{
           this.actor=stars;
       });
    }

}
