import { Component,OnInit, Input } from "@angular/core";


import { Product } from "src/app/shared/product.model";
import { ActivatedRoute } from "@angular/router";
import { Params } from "@angular/router";



@Component({
    selector: 'Product-Item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.css']
})



export class ProductItemComponent implements OnInit{

    constructor(
        private activated:ActivatedRoute,
    ){}
    @Input() pro:Product;
    @Input() pos:number;
    ngOnInit(){
        const x  = this.activated.snapshot.params['page'];

        if(x > 1)
        {
            this.pos = (x-1)*6 + this.pos;
        }

      this.activated.params.subscribe((params:Params) => {
          if(!params['page'])
          {
            this.pos=0*6 + this.pos
          }
          else{
            this.pos = (params['page']-x)*6 + this.pos;
            console.log(this.pos);
          }
       
      })
    }

}