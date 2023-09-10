import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../shared/models/product';
import { productService } from '../services/product/product.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  products:product[]=[];
  constructor(private Ps:productService , private router:ActivatedRoute){}


  ngOnInit(): void {
    this.router.params.subscribe(params =>{
       if(params['searchItem'])
       this.products = this.Ps.getAll().filter(product => product.name?.toLowerCase().includes(params['searchItem'].toLowerCase()));
       else
       this.products=this.Ps.getAll();

    })
  }

}