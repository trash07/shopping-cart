import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../types/product";
import {CartService} from "../../services/cart.service";
import {OrderedProduct} from "../../types/ordered-product";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[] = []
  constructor(private productService: ProductService, private cartService: CartService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe((products: Product[]) => this.products = products)
  }

  addToCart(selectedProduct: OrderedProduct): void {
    this.cartService.addProduct(selectedProduct.product, selectedProduct.quantity as unknown as number)
    this.messageService.add({severity: 'success', summary: 'Item added !', detail: 'Item successfully added to cart!'})
  }
}
