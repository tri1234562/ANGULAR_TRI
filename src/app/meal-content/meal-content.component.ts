import { Component, OnInit } from '@angular/core';
import {  Router,ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/shared/product.model';

import { ProductService } from 'src/app/default-content/ProductService.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-meal-content',
  templateUrl: './meal-content.component.html',
  styleUrls: ['./meal-content.component.css']
})
export class MealContentComponent implements OnInit {
  subscription:Subscription;
  selectproduct:Product;
  ListProducts:Product[];
  position:number;
  constructor(
    private proservice: ProductService,
    private activerouted:ActivatedRoute,
    private router:Router,
    // private subscription:Subscription,

  ) { }

  ngOnInit() {
    if(!this.proservice.product.length)
    {
      this.proservice.RunNow();
      this.subscription = this.proservice.PresentProducts.subscribe((ListProduct:Product[]) => {
        this.ListProducts = ListProduct.slice();
        if(this.ListProducts)
        {
          console.log(this.ListProducts);
          this.position = this.activerouted.snapshot.params['id'];
          this.selectproduct = this.proservice.getProduct(this.position);
          console.log(this.selectproduct);
        }
      })
    }
    else{
      this.position = this.activerouted.snapshot.params['id'];
      this.selectproduct = this.proservice.getProduct(this.position);
    }
  }
  BackHome(){
    if((this.position+1) % 6 == 0)
    {
      let x = (this.position)/6;
      console.log(x);
      this.router.navigate(['../../page',x],{relativeTo:this.activerouted});
    }
    else
    {
      let y = Math.floor((this.position)/6)+1;
      console.log(y);
      this.router.navigate(['../../page',y],{relativeTo:this.activerouted});
    }
    
  }

}
