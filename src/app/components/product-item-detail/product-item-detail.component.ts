import {Component, OnInit} from '@angular/core';
import {Product} from "../../types/product";
import {ProductService} from "../../services/product.service";
import {CartService} from "../../services/cart.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements  OnInit {
  product!: Product

  constructor(private productService: ProductService, private cartService: CartService,
              private activatedRoute: ActivatedRoute, private messageService: MessageService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( async ({id}) => {
      this.product = await this.productService.getProduct(id as unknown as number)
    })
  }

  range(max: number): Array<number> {
    return [...Array(max).keys()].map(i => i + 1)
  }

  addToCart(quantity: string) {
    this.cartService.addProduct(this.product, parseInt(quantity))
    this.messageService.add({severity: 'success', summary: 'Item added !', detail: 'Item successfully added to cart!'})
  }
}
