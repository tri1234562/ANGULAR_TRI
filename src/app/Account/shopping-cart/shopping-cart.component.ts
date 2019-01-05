import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/default-content/ProductService.service';
import { generate } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private productservice:ProductService ) { }
  shoppingCart:Product[] = [];
  ngOnInit() {
    this.shoppingCart = this.productservice.TakeProduct();
    // generate(Date.now().toString());
  }

}
