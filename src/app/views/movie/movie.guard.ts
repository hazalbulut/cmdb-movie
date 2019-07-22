import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class MovieGuard implements CanActivate {
    public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('GUARD');
        return true;
    }
}
