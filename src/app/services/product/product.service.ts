import { Injectable } from '@angular/core';
import { product } from 'src/app/shared/models/product';
import { sample_products} from 'src/data';
@Injectable({
  providedIn: 'root'
})
export class productService {
  prddetails: any;

  constructor() { }

  getAll(): product [] {
    return sample_products;
  }

  getAllProductsBySearchTerm(searchTerm: string) {
    return this.getAll().filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

 

  getProductsById(prdId:string):product{
    return this.getAll().find(product => product.id == prdId) ?? new product();
  }

}
