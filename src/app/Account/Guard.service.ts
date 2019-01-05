import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AcountService } from "src/app/Account/Acount.service";
import { Injectable } from "@angular/core";



@Injectable()
export class GuardService implements CanActivate {
    constructor(private acountservice:AcountService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.acountservice.IsLoggin();
    }
}