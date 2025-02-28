import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() isFavorite: boolean = false;
  @Output() remove = new EventEmitter<ProductItem>();
  // @Output() like = new EventEmitter<ProductItem>();
  @Output() favorite = new EventEmitter<number>();
  


  getRatingStars(rating: number): number[]{
    return Array(Math.floor(rating)).fill(0);
  }

  shareOnTelega(name: string, link: string){
    
    const tgLink = `https://telegram.me/share/url?url=${link}}&text=Myna product tema eken, qarashy`;
    window.open(tgLink, "_blank");
  }
  
  shareOnWhatsapp(name: string, link: string){
    const waLink = `https://wa.me/?text=${link}`;
    window.open(waLink, "_blank");
  }

  curInd = 0;
  nextSlide(){
    this.curInd = (this.curInd + 1) % this.productItem.images.length;
  }
  prevSlide(){
    this.curInd = (this.curInd - 1 + this.productItem.images.length) % this.productItem.images.length;
  }

  removeProductItem(){
    this.remove.emit(this.productItem);
  }

  // likeProductItem(){
  //   this.productItem.likes++;
  //   this.like.emit(this.productItem);
  // }

  toggleFavorite(){
    this.favorite.emit(this.productItem.id);
    console.log('Toggled favorite for product:', this.productItem.id);
  }
 
}

