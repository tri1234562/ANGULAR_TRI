import { Component,OnInit } from "@angular/core";



@Component({
    selector: 'app-meal-content',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
  })

export class AccountComponent implements OnInit{
    ngOnInit(){
        window.alert('Hello World');
    }
}