import { Component, OnInit } from '@angular/core';
import { product } from '../shared/models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { productService } from '../services/product/product.service';

@Component({
  selector: 'app-prouctpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  product!: product;
   //get product by id
  constructor(activatedRoute:ActivatedRoute, ProductService:productService,
    private cartService:CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {                         

      if(params['id'])
      this.product = ProductService.getProductsById(params['id']);
    })
   }

  ngOnInit(): void {
  }
  addToCart(){
      this.cartService.addToCart(this.product);
     this.router.navigateByUrl('/cart-page');
    
  }
}
