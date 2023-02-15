import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {OrderedProduct} from "../../types/ordered-product";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {Order} from "../../types/order";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  order: Order = {
    fullName: '', address: '', cardNumber: 0
  }

  constructor(private cartService: CartService, private router: Router, private formBuilder: FormBuilder,
              private messageService: MessageService) {}

  ngOnInit(): void {}

  getProducts(): OrderedProduct[] {
    return this.cartService.getSelectedProducts()
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  onSubmit() {
      this.cartService.order = this.order;
      this.router.navigate(['/confirmation'])
  }

  handleQuantityChange(newQuantity: string, selectedProduct: OrderedProduct) {
    const quantity = newQuantity as unknown as number
    if (quantity < 0) this.cartService.changeProductQuantity(selectedProduct.product, 1)
    if (quantity === 0)  {
      this.cartService.removeProduct(selectedProduct.product)
      this.messageService.add({severity: 'warn', summary: 'Item removed!', detail: 'Item successfully removed from cart!'})
    }
    this.cartService.changeProductQuantity(selectedProduct.product, quantity)
  }
}
