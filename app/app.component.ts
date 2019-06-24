import { Component,OnInit } from '@angular/core';
import { ProductService } from './app.productService';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit{ 

  constructor(private prodService:ProductService){}
prodAll:any[];
 ngOnInit(){
//  this.prodService.getAllProduct().subscribe((data:any)=>console.log(data));
this.prodService.getAllProduct().subscribe((data:any)=>this.prodAll=(data));
 }
}