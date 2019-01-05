import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http"
import * as firebase from 'firebase'
import('rxjs/Rx')

import { ProductService } from "src/app/default-content/ProductService.service";
import { Product } from "src/app/shared/product.model";


@Injectable()
export class DatastorageService {
    constructor(
        private http: Http,
        private ProductService: ProductService
    ) { }

    SaveData() {

        return this.http.put('https://test-all-132d7.firebaseio.com/product.json', this.ProductService.TakeProduct());
    }

    FetchData() {
        return this.http.get('https://test-all-132d7.firebaseio.com/product.json')
            .subscribe((response: Response) => {
                this.ProductService.product = response.json();
                this.ProductService.Test();
            })
    }
    FetchData1() {
        return this.http.get('https://test-all-132d7.firebaseio.com/product.json');
    }

    GetListCart() {


    }


}
