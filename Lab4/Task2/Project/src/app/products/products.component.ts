import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductitemComponent } from '../productitem/productitem.component';
import { ProductItem } from '../productitem';


@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productItem: ProductItem = {
    id: 1,
    name: 'Product 1',
    description: 'This is product 1',
    rating: 4.5
  };
}
