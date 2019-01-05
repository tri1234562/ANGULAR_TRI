import * as firebase from 'firebase'
import { Injectable } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { user } from 'src/app/shared/user.model';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import { OnInit } from '@angular/core';

@Injectable()
export class AcountService {



    constructor(private activerouted: ActivatedRoute,
        private route: Router,
        private http: Http
    ) { }

    token: string;
    PresentUser = new Subject<user[]>();
    email:string;
    user: user[] = [];


    SignUp(email: string, password: string) {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
        // .then(() =>{
        //     window.alert('SignUp Complete!');
        //     this.route.navigate(['../'],{relativeTo:this.activerouted});
        // })
        // .catch(error => {
        //     window.alert(error);
        // });

    }
    AddAcount(newsAcount: user[]) {
        console.log(newsAcount);
        return this.http.put('https://test-all-132d7.firebaseio.com/Acount.json', newsAcount).subscribe((response: Response) => {
            console.log(response);
        });

    }
    AddUser(newuser: user) {
        this.user.push(newuser);
        return this.PresentUser.next(this.user.slice());
    }

    TakeUser() {
        return this.user.slice();
    }

    SignIn(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                this.route.navigate(['../'], { relativeTo: this.activerouted });
                firebase.auth().currentUser.getIdToken().then((message: string) => {
                    this.token = message;
                    console.log(this.token);
                    window.alert('Sign In Complete');
                    var x = firebase.auth().currentUser;
                    console.log(x.displayName);
                })
            })
            .catch(error => {
                window.alert(error.message);
                console.log(error);
            })
    }
    SignOut(){
        this.email = '';
        firebase.auth().signOut();
    }

    GetEmail(){
        return firebase.auth().currentUser.email;
    }
    // Getuser(){
    //     return this.http.get('https://test-all-132d7.firebaseio.com/Acount.json').subscribe((response:Response) =>{
    //         this.user = response.json();
    //         return this.PresentUser.next(this.user.slice());
    //     });
    // }
    TakeAcount() {
        return this.PresentUser.next(this.user.slice());
    }
    GetUserServer() {
        return this.http.get('https://test-all-132d7.firebaseio.com/Acount.json');
    }
    IsLoggin() {
        if (!this.token) {
            return false;
        }
        else { return true; }
    }
}
