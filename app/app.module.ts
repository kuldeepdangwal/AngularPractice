import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {AddProduct} from './app.addproductcomponent';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ShowProductComponent} from './app.showcomponent';
import {Routes,RouterModule} from '@angular/router';

const routes:Routes=[
    {path:'add', component:AddProduct},
    {path:'show', component:ShowProductComponent}
];


@NgModule({
    imports: [
        BrowserModule,HttpClientModule,FormsModule, RouterModule.forRoot(routes)
        
    ],
    declarations: [
        AppComponent,AddProduct,ShowProductComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }