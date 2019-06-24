import {Component,OnInit} from '@angular/core';
import {Product} from './Product';
import {ProductService} from './app.productService';
import { Router } from '@angular/router';
@Component({
    selector:'add-prod',
    templateUrl:'add.product.html'
})
export class AddProduct{
   constructor(private prodService:ProductService,private route:Router){}
   prod:any={};
   
//    prod:Product={
//      prodId:0,prodName:"",prodPrice:0.0,prodOnline:true  
//    };
   addProduct():any{
    //    alert(this.prod.id+""+this.prod.inname);
    this.prodService.addProduct(this.prod).subscribe((data)=>console.log(data));
    this.route.navigate(['show']);
   }
}
