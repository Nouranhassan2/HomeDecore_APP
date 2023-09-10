import { product } from 'src/app/shared/models/product';

export class CartItem{
    static product: any;
    constructor(public product:product){ }
    quantity:number = 1 ;
    price: number = this.product.price;
  }