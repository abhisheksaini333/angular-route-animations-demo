import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private _router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    /* condition to test wether user is allowed or not 
      e.g.
        (1) Check for the auth tokens
            - localstorage
            - session storage
            - can check the timeout logic as well
        (2) Check the cookies
        (3) Check the role of the user
    */
   debugger
    if (localStorage.getItem('userInfo')) {
      return true;
    }
    this._router.navigate(['/offers'])
    return false;
    // returns a boolean
  }
}
