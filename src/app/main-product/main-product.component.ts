import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})

export class MainProductComponent implements OnInit {
  listProduct: Product[];
  inputProduct : Product = new Product();
  showFormTemplate: boolean;
  constructor(private proService: ProductService) { }

  ngOnInit(): void {
    this.showFormTemplate = false;
    this.proService.getListProduct().subscribe((data:Product[]) => this.listProduct=data)
  }
 like(p:Product){
    let i = this.listProduct.indexOf(p);
    this.listProduct[i].nbrLike++;
 }

  saveProduct(product: Product) {
    let i = this.listProduct.indexOf(product);
    if (i!= -1){
      //update
      //this.listProduct[i]=product;
      this.proService.updateProduct(product).subscribe(
        ()=>this.listProduct[i]=product
      )
    }else {
      //add
      //this.listProduct.push(product);
      this.proService.addProduct(product).subscribe(
         () => this.listProduct.push(product),
        ()=>console.log("add error")
      )

    }
    this.showFormTemplate = false;
  }
  showForm(){
    this.showFormTemplate =true
  }
  delete(p:Product){
    let i = this.listProduct.indexOf(p);
    //this.listProduct.splice(i,1)
    this.proService.deleteProduct(p.id).subscribe(
      ()=>this.listProduct.splice(i,1),
      ()=>console.log("delete error")

  )
  }
  updateForm(p:Product){
    this.showFormTemplate=true;
    this.inputProduct = p;


  }
}
