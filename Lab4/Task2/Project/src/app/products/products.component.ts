import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../productitem/productitem.component';
import { ProductItem } from '../productitem';


@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productItemList: ProductItem[] = [
  {
    id: 1,
    name: 'Apple iPhone 16 Pro Max 256Gb',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc4/h62/86641268293662.png',
    description: `The flagship iPhone 16 Pro Max combines the best features of a modern gadget. <br>
    This is the most productive device in the Apple iPhone line with a large-scale display,<br> 
    amazing performance and incredible external ergonomics.`,
    rating: 5.0
  },
  {
    id: 2,
    name: 'Apple iPhone 16 Pro Max 512Gb',
    image: `https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium`,
    description: `The flagship iPhone 16 Pro Max combines the best features of a modern gadget. <br>
    This is the most productive device in the Apple iPhone line with a large-scale display,<br> 
    amazing performance and incredible external ergonomics.`,
    rating: 5.0
  },
  {
    id: 3,
    name: 'Apple iPhone 16 Pro Max 1Tb',
    image: `https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium`,
    description: `The flagship iPhone 16 Pro Max combines the best features of a modern gadget. <br>
    This is the most productive device in the Apple iPhone line with a large-scale display,<br> 
    amazing performance and incredible external ergonomics.`,
    rating: 5.0
  }
  ];
}
