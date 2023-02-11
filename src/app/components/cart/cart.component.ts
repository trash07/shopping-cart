import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {OrderedProduct} from "../../types/ordered-product";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  buyerForm!: FormGroup

  constructor(private cartService: CartService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buyerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      address: ['', Validators.required],
      cardNumber: ['', Validators.required]
    })
  }

  getProducts(): OrderedProduct[] {
    return this.cartService.getSelectedProducts()
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  onSubmit() {
    if (this.buyerForm.valid) {
      this.cartService.order = this.buyerForm.value
      this.router.navigate(['/confirmation'])
    }
  }
}
