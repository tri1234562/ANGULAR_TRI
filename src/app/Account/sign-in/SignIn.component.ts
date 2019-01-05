import { Component,OnInit,OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';

import { AcountService } from 'src/app/Account/Acount.service';
import { user } from 'src/app/shared/user.model';




@Component({
    selector: 'app-sign-in',
    templateUrl: './SignIn.component.html',
    styleUrls: ['./SignIn.component.css']
  })
export class SignInComponent implements OnInit{

    constructor(private acountserice:AcountService
    ){}
    usersSignIn : user[] = [];

    ngOnInit(){
        // this.acountserice.GetUserServer().subscribe((response:Response) => {
        //     this.usersSignIn = response.json();
        //     console.log(this.usersSignIn);
        // })
        
    }

    OnSubmit(formSignIn:NgForm){
        const value = formSignIn.value;
        this.acountserice.SignIn(value.email,value.password);
        if(this.usersSignIn['email'].find(value.email))
        {
            console.log('Hello '+value.email);
        }
        else{
            console.log('Something Not True');
        }
    }
}