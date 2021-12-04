import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  item= {
    productId :'',
    productName:'',
    productCode:'',
    releaseDate:'',
    description:'',
    price:'',
    starRating:'',
    imageUrl:''}

  constructor(private http:HttpClient) { }
  getProduct(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  getProducts()
       {
          return this.http.get("http://localhost:3000/products");                         
       } 
       AddProduct(item:any)
       {
          return this.http.post("http://localhost:3000/insert",{item})
          .subscribe((data)=>
            
              console.log(data)
            );
       }
       
       editProduct(product:any)
  {
    console.log('client update');
    return this.http.put("http://localhost:3000/update",product)
    .subscribe(data =>{console.log(data)})
  }
  deleteProduct(id:any)
  {

    return this.http.delete("http://localhost:3000/remove/"+id)

  }   
}



