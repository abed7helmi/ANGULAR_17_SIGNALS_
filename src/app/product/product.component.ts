import { Component, Signal } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  price : number = 8000 ;
  quantity : number = 500;
  total : number = this.price * this.quantity;

  decrement() {
    --this.quantity;
    this.total = this.price * this.quantity;
  }

  increment() {
    ++this.quantity;
    this.total = this.price * this.quantity;
  }
}
