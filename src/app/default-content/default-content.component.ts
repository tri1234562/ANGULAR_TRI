import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http'
import { Subscription } from 'rxjs';

import { ProductService } from 'src/app/default-content/ProductService.service';
import { Product } from 'src/app/shared/product.model';
import { DatastorageService } from 'src/app/shared/datastorage.service';
import { Router } from '@angular/router';
import { Route } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { AcountService } from 'src/app/Account/Acount.service';
import { user } from 'src/app/shared/user.model';





@Component({
  selector: 'app-default-content',
  templateUrl: './default-content.component.html',
  styleUrls: ['./default-content.component.css']
})
export class DefaultContentComponent implements OnInit, OnDestroy {


  Listtest: Product[] = [];
  usersSignIn: user[] = [];
  subscription: Subscription;
  page: number;
  numberitems = 6;
  pagenumbers: number;
  ArrayPage = [];
  positem: number;
  CurrentUser: user;
  constructor(
    private Test: ProductService,
    private Data: DatastorageService,
    private route: ActivatedRoute,
    private router: Router,
    private acountservice: AcountService,

  ) { }

  ngOnInit() {
    this.Test.RunNow();
    // this.Listtest = this.Test.TakeProduct();
    const page1: number = this.route.snapshot.params['page']
    this.subscription = this.Test.PresentProducts.subscribe((ArrayProduct: Product[]) => {
      this.Listtest = ArrayProduct.slice((page1 - 1) * this.numberitems, page1 * this.numberitems);
    })

    this.Data.FetchData1().subscribe((response: Response) => {
      if (response.json().length % this.numberitems == 0) {
        this.pagenumbers = response.json().length / this.numberitems;
      }
      else {
        this.pagenumbers = Math.floor(response.json().length / this.numberitems) + 1;
      }
      for (let i = 1; i <= this.pagenumbers; i++) {
        this.ArrayPage.push(i);
      }
    })




    this.route.params.subscribe((param: Params) => {
      this.page = param['page'];
      if (!page1) {
        if (this.Test.product.length <= 0 || this.page == null) {
          this.Data.FetchData1().subscribe((response: Response) => {
            this.Listtest = response.json().slice(0, this.numberitems);
          })
        }
      }
      else {
        if (this.page * this.numberitems > this.Test.product.length) {
          this.Listtest = this.Test.product.slice((this.page - 1) * this.numberitems, this.Test.product.length);
        }
        else {
          this.Listtest = this.Test.product.slice((this.page - 1) * this.numberitems, this.page * this.numberitems);
        }
      }
    })



    this.acountservice.GetUserServer().subscribe((response: Response) => {
      this.usersSignIn = response.json();
      if(this.acountservice.IsLoggin() && this.CurrentUser == null)
      {
        this.usersSignIn.filter((x) => {
          console.log(this.acountservice.GetEmail());
          console.log(x['Email']);
          console.log(this.usersSignIn);
          if(x['Email'] == this.acountservice.GetEmail())
          {     
            this.CurrentUser = x;
            console.log(this.CurrentUser);
          }
        })
      }
    })

  }
  // End Init




  OnNext() {
    if (!this.route.snapshot.params['page']) {
      this.router.navigate(['/page/2'], { relativeTo: this.route });
    }
    else {
      let x: number = +this.route.snapshot.params['page'] + 1;
      this.router.navigate(['/page', x]);
    }
  }

  OnPre() {
    if (!this.route.snapshot.params['page'] || this.route.snapshot.params['page'] === '1') {
      this.router.navigate(['/page/1'], { relativeTo: this.route });
    }
    else {
      let x: number = +this.route.snapshot.params['page'] - 1;
      this.router.navigate(['/page', x]);
    }
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
