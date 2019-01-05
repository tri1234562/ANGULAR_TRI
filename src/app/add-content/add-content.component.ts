import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/default-content/ProductService.service';
import { ingredients } from 'src/app/shared/ingredients.model';
import { Router, Route, Params, ActivatedRoute } from '@angular/router';
import { DatastorageService } from 'src/app/shared/datastorage.service';



@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent implements OnInit {


  @ViewChild('formaddpro') addform: NgForm;
  // checked = this.addform.invalid;

  constructor(
    private PS: ProductService,
    private router: Router,
    private activatedroute: ActivatedRoute,
    private DataService: DatastorageService
  ) { }

  editmode = false;
  id: number;
  x: ingredients = new ingredients('', '', '', '', '');
  slp: Product = new Product('', null, '', this.x);
  
  ngOnInit() {
    this.activatedroute.params.subscribe((params: Params) => {
      this.id = params.id;
      if (this.id != null) {
        this.editmode = true;
        this.slp = this.PS.getProduct(this.id);
      }
      else {
        this.editmode = false;
      }
    })

    console.log(this.editmode);
  }

  OnSubmitForm(form: NgForm) {
    const x = form.value;
    const y = new ingredients(x.ing, x.nut, x.tim, x.ori, x.chi);
    const addvalue = new Product(x.name, x.price, x.image, y);
    if (this.editmode) {
      this.PS.UpdateProduct(addvalue, this.id);
      window.alert('Update Product Complete');
    }
    else {
      this.PS.AddProduct(addvalue);
      window.alert('Add New Product Complete');
    }



    this.DataService.SaveData().subscribe((response: Response) => {
      this.PS.product = response.json();
      // this.PS.Test();
    })
    this.router.navigate(['page/1']);


  }

  OnCancel() {
    if (this.editmode) {
    
      this.router.navigate(['../../'], { relativeTo: this.activatedroute });
    }
    else {
      this.router.navigate(['../page/1'], { relativeTo: this.activatedroute });
      
    }
  }

}
