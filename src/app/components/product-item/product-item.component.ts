import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../types/product";
import {OrderedProduct} from "../../types/ordered-product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input()
  product!: Product;

  @Output()
  addToCartEvent: EventEmitter<OrderedProduct> = new EventEmitter<OrderedProduct>()

  constructor() {}

  range(max: number): Array<number> {
    return [...Array(max).keys()].map(i => i + 1)
  }

  addProductToCart(quantity: string): void {
    this.addToCartEvent.emit({product: this.product, quantity: quantity as unknown as number})
  }
}
