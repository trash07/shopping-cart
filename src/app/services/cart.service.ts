import { Injectable } from '@angular/core';
import {OrderedProduct} from "../types/ordered-product";
import {Product} from "../types/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  orderedProducts: OrderedProduct[] = []
  constructor() { }

  addProduct(product: Product, quantity: number): void {
    this.orderedProducts.push({product, quantity})
  }
}
