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
    
    const tgLink = `https://telegram.me/share/url?url=${link}}&text=Myna product tema eken, qarashy`;
    window.open(tgLink, "_blank");
  }
  
  shareOnWhatsapp(name: string, link: string){
    const waLink = `https://wa.me/?text=${link}`;
    window.open(waLink, "_blank");
  }

}

