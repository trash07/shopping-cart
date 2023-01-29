import {Component, Input} from '@angular/core';
import {Product} from "../../types/product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input()
  product!: Product;

  constructor() {}

  range(limit: number): Array<number> {
    let result = []
    for(let index = 1; index <= limit; index++) {
      result.push(index)
    }
    return result
  }
}
