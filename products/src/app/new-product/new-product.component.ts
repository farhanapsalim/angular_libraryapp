import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../product-list/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  title:String="Add Product";

  productItem=new ProductModel(0,"","","","",0,0,"");

  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
  }

  newProduct()
{
  this.productService.AddProduct(this.productItem);
  console.log("called");
  alert("success");
  this.router.navigate(['/']);
}

}
