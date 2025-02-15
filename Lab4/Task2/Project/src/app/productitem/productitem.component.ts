import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItem } from '../productitem';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './productitem.component.html',
  styleUrl: './productitem.component.css'
})
export class ProductItemComponent {
  @Input() productItem!: ProductItem;
}

shareOnTelega(name: string, link: string){
  link = encodeURIComponent(link);
  text = encodeURIComponent(name);
  const tgLink = "https://telegram.me/share/url?url=${link}&text=${text}";
  window.open(tgLink, "_blank");
}

