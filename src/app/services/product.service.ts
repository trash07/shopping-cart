import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {from, map, Observable, of} from "rxjs";
import {Product} from "../types/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data.json')
  }

  getProduct(id: number): Promise<Product> {
    return new Promise(
      (resolve, reject) => {
        from(this.getProducts())
          .subscribe((products: Product[]) => {
             for(let p of products) {
               if (p.id == id) resolve(p)
             }
             reject()
          })
      }
    )
  }
}
