import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
url= environment.url+"product";

  constructor(private http: HttpClient) {
  }

  getListProduct() {
return this.http.get<Product[]>(this.url);
  }

  addProduct(product: Product) {
    return this.http.post(this.url, product);
  }

  deleteProduct(id: String) {
    return this.http.delete(this.url+id);

  }

  updateProduct(product: Product) {
    return this.http.put(this.url+product.id, product);

  }

  getProductTitle(criteria: String) {
  }


}
