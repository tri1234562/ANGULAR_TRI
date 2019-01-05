import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { AcountService } from '../Acount.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';


import { user } from 'src/app/shared/user.model';




@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  SignUpForm:FormGroup;

  constructor(private acountservice:AcountService,
              private activatedroute:ActivatedRoute,
              private router:Router,
              private http:Http,
  ) { }

  UsersSignUp:user[] = [];

  ngOnInit() {
    this.InitForm();
    
    
  }

  OnSubmit(){
    console.log(this.UsersSignUp);
    let email = this.SignUpForm.value['Email'];
    let password = this.SignUpForm.value['PassWord'];
    // let InfoAcount = this.SignUpForm.value();
    
    this.acountservice.SignUp(email,password)
    .then(() => {
      
      let value:user = this.SignUpForm.value;

      this.acountservice.AddUser(value);
      this.UsersSignUp.push(value);
      this.acountservice.AddAcount(this.UsersSignUp);
      
      window.alert('SignUp Complete');  
      this.router.navigate(['../page/1'],{relativeTo:this.activatedroute});
  
    })
    .catch((error:Error) => {
      window.alert(error);
    })
    ;
    
    console.log(email,password);
  }

  InitForm(){
    let name ='';
    let email='';
    let password='';
    let sdt = '';
    let address ='';
    
    this.SignUpForm = new FormGroup({
      'Name' : new FormControl(name,[Validators.required,Validators.minLength(6)]),
      'Email': new FormControl(email,[Validators.required,Validators.email,Validators.minLength(15)]),
      'PassWord': new FormControl(password,[Validators.required,Validators.minLength(6)]),
      'Sdt':new FormControl(sdt,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'Address': new FormControl(address,Validators.required),
    })
  }
}
