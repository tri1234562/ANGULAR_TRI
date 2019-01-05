import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";

import { DatastorageService } from 'src/app/shared/datastorage.service';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/default-content/ProductService.service';
import { AcountService } from 'src/app/Account/Acount.service';
import { user } from 'src/app/shared/user.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private Datastorage: DatastorageService,
    private ProductService: ProductService,
    private acountservice: AcountService
  ) { }
  usersSignIn: user[] = [];
  

  ngOnInit() {
    this.acountservice.GetUserServer().subscribe((response: Response) => {
      
      this.usersSignIn = response.json();
      console.log(this.usersSignIn);
    })
    console.log(this.acountservice.email);
   
   
  }
  // OnSaveData() {
  //   this.Datastorage.SaveData().subscribe();
  // }

  // OnFetchData() {
  //   this.Datastorage.FetchData();
  // }
}
