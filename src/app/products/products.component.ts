import { Component } from '@angular/core';

interface Product {
  id : string,name : string,price : string,selected : boolean,
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products : Product[] = [
    {id : '1',name :'Product 1',price :'551',selected:  true},
    {id : '2',name :'Product 2',price :'232',selected:  true},
    {id : '3',name :'Product 3',price :'53',selected:  true},
  ];



  select(product: Product) {
    product.selected = !product.selected;

  }
}
