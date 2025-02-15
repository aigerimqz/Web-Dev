import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItem } from '../productitem';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productitem.component.html',
  styleUrl: './productitem.component.css'
})
export class ProductItemComponent {
  @Input() productItem!: ProductItem;

  shareOnTelega(name: string, link: string){
    const encodedlink = encodeURIComponent(link);
    const text = encodeURIComponent(name);
    const tgLink = `https://telegram.me/share/url?url=${encodedlink}&text=${text}`;
    window.open(tgLink, "_blank");
  }
  
  shareOnWhatsapp(name: string, link: string){
    const encodedlink = encodeURIComponent(link);

    const waLink = `https:/whatsapp://send?text=${encodedlink}`;
    window.open(waLink, "_blank");
  }

}

