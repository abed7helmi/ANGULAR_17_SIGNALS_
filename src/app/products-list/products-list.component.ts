import {Component, computed} from '@angular/core';
import {Product} from "../model/product.model";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  products = computed<Product[]>(()=>this.productService.getAllProducts())

  constructor(private productService : ProductService) {
  }

  select(product: Product) {
    this.productService.selectProduct(product);
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product);
  }

}
