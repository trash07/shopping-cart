import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../types/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[] = []
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe((products: Product[]) => this.products = products)
  }
}
