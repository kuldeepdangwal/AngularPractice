import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
providedIn:'root'
})
export class ProductService{

    constructor(private httpdata:HttpClient){}

    getAllProduct(){
        // return this.httpdata.get("http://localhost:4222/product/getAllProduct");
         return this.httpdata.get("http://10.102.51.160:4222/product/show");
    }

    addProduct(data:any){
        console.log(data.id);
        let input=new FormData();

        input.append("id",data.id);
        input.append("name",data.name);
        input.append("price",data.price);
        input.append("description",data.des);
        input.append("inventory.id",data.inid);
        input.append("inventory.name",data.inname);
return this.httpdata.post("http://localhost:4222/product/addall",input);
    }
}