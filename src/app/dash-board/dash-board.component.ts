import {Component, computed} from '@angular/core';
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {

  constructor(private productService : ProductService) {
  }

  selectedProductsCount = computed<number>(()=>
    this.productService.getAllProducts().filter(p=>p.selected).length
  );
  totalPricesSelectedProducts = computed<number>(()=>{
    return this.productService.getAllProducts()
      .filter(p=>p.selected==true)
      .reduce((sum, current)=>sum+current.price,0)
  });

}
