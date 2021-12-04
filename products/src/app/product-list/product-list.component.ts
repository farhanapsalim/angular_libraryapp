import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from './product.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title:String="Product List";
  //Product is the model class for the productitem
  products:ProductModel[]=[];

  //image properties
  imageWidth:number=50;
  imageMargin:number=2;

  showImage:boolean=false;
  //creating service objects for calling getproducts()

  constructor(private router:Router, public _auth:AuthService,private productService:ProductService) { }

  toggleImage():void{
    this.showImage=!this.showImage;
  }
  ngOnInit(): void {
    //calling getproducts() and loading products to products  array
    this.productService.getProducts().subscribe((data)=>
    {
      this.products=JSON.parse(JSON.stringify(data));
    })
  }
  editProduct(product:any)
  {
    localStorage.setItem("editProductId",product._id.toString());
    this.router.navigate(['update']);
  }
  deleteProduct(product:any)
  {
    this.productService.deleteProduct(product._id)
      .subscribe((data) => {
        this.products = this.products.filter(p => p !== product);
      })
  }

}
