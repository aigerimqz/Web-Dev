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
    image: `assets/products/1.jpg`,
    description: `The flagship iPhone 16 Pro Max combines the best features of a modern gadget.
    This is the most productive device in the Apple iPhone line with a large-scale display,
    amazing performance and incredible external ergonomics.`,
    rating: 5.0
  },
  {
    id: 2,
    name: 'Apple iPhone 16 Pro Max 512Gb',
    image: 'https://yoko.ee/cdn/shop/files/Dr.AltheaVitaminCBoostingSerum.webp?v=1729234258',
    description: `The flagship iPhone 16 Pro Max combines the best features of a modern gadget.
    This is the most productive device in the Apple iPhone line with a large-scale display,
    amazing performance and incredible external ergonomics.`,
    rating: 5.0
  },
  {
    id: 3,
    name: 'Apple iPhone 16 Pro Max 1Tb',
    image: 'https://surl.li/tlsjls',
    description: `The flagship iPhone 16 Pro Max combines the best features of a modern gadget. 
    This is the most productive device in the Apple iPhone line with a large-scale display,
    amazing performance and incredible external ergonomics.`,
    rating: 5.0
  }
  ];
}
