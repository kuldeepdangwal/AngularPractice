import {Component,OnInit} from '@angular/core';
import {ProductService} from './app.productService';

@Component({
    selector:'show-app',
    templateUrl:'show.product.html'
})

export class ShowProductComponent implements OnInit{
    constructor(private prodService:ProductService){}

    prodAll:any[];

    ngOnInit(){
        this.prodService.getAllProduct().subscribe
        ((data:any)=>this.prodAll=data);
    }
}