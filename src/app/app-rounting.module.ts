import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DefaultContentComponent } from "src/app/default-content/default-content.component";
import { MealContentComponent } from "src/app/meal-content/meal-content.component";
import { FresherComponent } from "src/app/fresher/fresher.component";
import { AddContentComponent } from "src/app/add-content/add-content.component";
import { SignUpComponent } from 'src/app/Account/sign-up/sign-up.component';
import { SignInComponent } from "src/app/Account/sign-in/SignIn.component";
import { ShoppingCartComponent } from "src/app/Account/shopping-cart/shopping-cart.component";
import { GuardService } from "src/app/Account/Guard.service";



const link: Routes = [
    { path: '', component: DefaultContentComponent },
    { path: 'page', component: DefaultContentComponent },

    { path: 'meal', component: FresherComponent },
    { path: 'add', component: AddContentComponent },
    { path: 'SignUp', component: SignUpComponent },
    { path: 'SignIn', component: SignInComponent },
    { path: 'Cart', component: ShoppingCartComponent, canActivate:[GuardService] },
    { path: 'sp/:id', component: MealContentComponent },
    { path: 'page/:page', component: DefaultContentComponent },
    { path: 'sp/:id/edit', component: AddContentComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(link)],
    exports: [RouterModule],
    providers:[GuardService],
})

export class AppRounting {

}