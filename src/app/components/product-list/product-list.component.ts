import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../types/product";
import {CartService} from "../../services/cart.service";
import {OrderedProduct} from "../../types/ordered-product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[] = []
  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe((products: Product[]) => this.products = products)
  }

  addToCart(selectedProduct: OrderedProduct): void {
    this.cartService.addProduct(selectedProduct.product, selectedProduct.quantity as unknown as number)
    alert('Added to cart!')
  }
}
