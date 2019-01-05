
import { Injectable, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http"
import { DefaultContentComponent } from "src/app/default-content/default-content.component";
import { Product } from "src/app/shared/product.model";
import { ingredients } from "src/app/shared/ingredients.model";
import { Subject } from "rxjs";
import { DatastorageService } from "src/app/shared/datastorage.service";


@Injectable()
export class ProductService {

    constructor(private http: Http) { }
    PresentProducts = new Subject<Product[]>();

    product: Product[] = [];

    RunNow() {
        if (this.product.length <= 0) {
            this.TakeProduct1().subscribe((response: Response) => {
                this.product = response.json();
                return this.PresentProducts.next(this.product.slice());
            })
        }
    }




    getProduct(position: number) {
        return this.product[position];
    }

    AddProduct(item: Product) {
        this.product.push(item);
        return this.PresentProducts.next(this.product.slice());
    }

    UpdateProduct(item: Product, position: number) {
        this.product[position] = item;
        return this.PresentProducts.next(this.product.slice());
    }

    TakeProduct1() {
        return this.http.get('https://test-all-132d7.firebaseio.com/product.json')
        //     .subscribe((response:Response) => {
        //         this.product = response.json();
        //         return this.PresentProducts.next(this.product.slice());
        //     });
        //    return this.product.slice();
    }

    TakeProduct() {
        return this.product.slice();
    }

    PageProduct(pos1: number, product: Product[]) {
        if (pos1 == 1) {
            return product.slice(0, 6)
        }
        else {
            return this.product.slice(pos1, pos1 + 6);
        }

    }

    Test() {
        return this.PresentProducts.next(this.product.slice());
    }

}



// product: Product[] = [
    //     new Product(
    //         'Rice Fry',
    //         7,
    //         'https://www.mensjournal.com/wp-content/uploads/2018/02/trifecta.jpg',
    //         new ingredients('Beef, Salad, Fishsauce, Peace', 'Vitamin A, Vitamin B, Kalol', '15 Min', 'VIET NAM', 'Mr Ghost')
    //     ),
    //     new Product(
    //         'Pizza Combo',
    //         8,
    //         'https://www.qsrmagazine.com/sites/qsrmagazine.com/files/styles/story_page/public/slideshow-images/slides/phut.jpg?itok=0DtjruF9',
    //         new ingredients('Pork, Beef, Tomato, Flour, Chili', 'Vitamin A, Vitamin C, Kalol', '10 Min', 'Italian', 'Mr Ghost')
    //     ),
    //     new Product(
    //         'Pizza With Cherry',
    //         7,
    //         'https://img.grouponcdn.com/deal/nhjcKdKnuawjKX427U9F/GK-2048x1229/v1/c700x420.jpg',
    //         new ingredients('Pork, Tomato, Potato, Green Chili, Shrimp', 'Vitamin A, Vitamin B, Kalol', '7 Min', 'American', 'Mr Ghost')
    //     ),
    //     new Product(
    //         'Hamburger',
    //         8,
    //         'https://images-na.ssl-images-amazon.com/images/I/91iuElQtUDL._SL1500_.jpg',
    //         new ingredients('Beef, Tomato, Salad, Mayone, Cheese', 'Vitamin A, Vitamin C, Kalol', '5 Min', 'Italian', 'Mr Ghost')
    //     ),
    //     new Product(
    //         'Phở',
    //         10,
    //         'https://farm8.staticflickr.com/7087/7174177733_6c0af1a0b2_b.jpg',
    //         new ingredients('Flour, Beef, Pork, Chili', 'Vitamin A, Vitamin B, Kalol', '20 Min', 'VIET NAM', 'Mr Ghost')
    //     ),
    //     new Product(
    //         'Pizza Combo',
    //         9,
    //         'https://www.mensjournal.com/wp-content/uploads/2018/02/trifecta.jpg',
    //         new ingredients('Pork, Steaf, Tomato, Flour, Chili', 'Vitamin A, Vitamin C, Kalol', '10 Min', 'Italian', 'Mr Ghost')
    //     ),
    // ]