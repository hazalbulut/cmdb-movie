import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MovieStarService } from 'src/app/services/movie-star.service';

@Injectable({
    providedIn: 'root',
})
export class MovieResolverService implements Resolve<any> {
    constructor(private router: Router, public movieStarService: MovieStarService) { }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
        console.log('RESOLVER');
        const id = route.paramMap.get('id');
        return this.movieStarService.getMovieById(Number(id)).pipe(
            delay(10000)
        );
    }
}
