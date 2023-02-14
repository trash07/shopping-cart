import { Injectable } from '@angular/core';
import {OrderedProduct} from "../types/ordered-product";
import {Product} from "../types/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  orderedProducts: OrderedProduct[] = []
  order: {fullName: string, address: string, cardNumber: number} = {
    fullName: '', address: '', cardNumber: 0
  }

  constructor() { }

  addProduct(product: Product, quantity: number): void {
    debugger
    const oldProductInCart = this.orderedProducts.find((op: OrderedProduct) => op.product.id === product.id)
    if (oldProductInCart) {
      oldProductInCart.quantity += quantity
      return
    }
    this.orderedProducts.push({product, quantity})
  }

  getSelectedProducts(): OrderedProduct[] {
    return this.orderedProducts
  }

  removeProduct(product: Product): void {
    this.orderedProducts = this.orderedProducts.filter((op: OrderedProduct) => op.product.id !== product.id)
  }

  changeProductQuantity(product: Product, quantity: number): void {
    for (let i = 0; i < this.orderedProducts.length; i++) {
      if (this.orderedProducts[i].product.id == product.id) {
        this.orderedProducts[i].quantity = quantity
      }
    }
  }

  getTotalPrice() {
    return this.orderedProducts.map((op: OrderedProduct) => op.product.price * op.quantity)
      .reduce((acc: number, cur: number) => acc + cur)
  }
}
