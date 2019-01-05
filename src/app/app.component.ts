import { Component,OnInit  } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBcsd12rNEHHW6jSqvGpqfRQczQttZcO4s",
      authDomain: "test-all-132d7.firebaseapp.com",
    })
  }
  title = 'app';
}
