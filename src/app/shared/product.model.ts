import { ingredients } from "src/app/shared/ingredients.model";

export class Product{
   
    constructor( 
        public name:string,
        public price:number,
        public image:string,
        public detail:ingredients,){
        // this.name = x;
        // this.price = y;
        // this.image = z;
        // this.detail = t;
    }
}