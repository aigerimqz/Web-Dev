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
    name: 'Anua Heartleaf 77% Soothing Toner',
    image: 'assets/products/1_1.jpg',
    description: 'Moisturizing facial toner with 77% Houttuynia Cordata extract soothes, hydrates, restores balance, and gently exfoliates.',
    rating: 4.8
  },
  {
    id: 2,
    name: 'Dr.Althea Vitamin C Boosting Serum 63%',
    image: 'assets/products/2.jpg',
    description: 'Althea Vitamin C Boosting Serum protects against photoaging, boosts elasticity, brightens pigmentation, and evens skin tone.',
    rating: 4.8
  },
  {
    id: 3,
    name: 'Dr.Althea 345 Relief Cream',
    image: 'assets/products/3.jpg',
    description: '345 Relief Cream with niacinamide soothes, hydrates, and supports post-acne recovery with panthenol and cactus extract.',
    rating: 5.0
  },
  {
    id: 4,
    name: 'Celimax Dual Barrier Creamy Toner',
    image: 'assets/products/4.jpg',
    description: 'Celimax Dual Barrier Creamy Toner hydrates, nourishes, strengthens the skin barrier, and soothes dryness and irritation.',
    rating: 5.0
  },
  {
    id: 5,
    name: 'Anua Dark Spot Correcting Serum',
    image: 'assets/products/5.jpg',
    description: 'Brightening serum with niacinamide and tranexamic acid targets hyperpigmentation and evens skin tone.',
    rating: 5.0
  },
  {
    id: 6,
    name: 'Anua Peach 70% Niacin Serum',
    image: 'assets/products/6.jpg',
    description: 'Peach serum smooths, refines texture, tightens pores, controls oil, and brightens skin tone.',
    rating: 5.0
  },
  {
    id: 7,
    name: 'Anua Heartleaf Quercetinol Deep Pore Cleansing Foam',
    image: 'assets/products/7.jpg',
    description: 'Creamy scrub with Houttuynia leaf particles gently exfoliates, smooths skin, tightens pores, and has a refreshing eucalyptus scent.',
    rating: 5.0
  },
  {
    id: 8,
    name: 'Centella Probio-Cica Intensive Ampoule',
    image: 'assets/products/8.jpg',
    description: 'High-concentration probiotic ampoule restores, hydrates, nourishes, and provides anti-aging benefits.',
    rating: 5.0
  },
  {
    id: 9,
    name: 'Dr.G Red Blemish Clear Soothing Cream',
    image: 'assets/products/9.jpg',
    description: 'Restorative cream with 5 types of Centella balances moisture, soothes irritation, strengthens the skin barrier, and reduces redness.',
    rating: 5.0
  },
  {
    id: 10,
    name: 'Beauty of Joseon Relief Sun Rice Probiotic SPF50+',
    image: 'assets/products/10.jpg',
    description: 'Probiotic sunscreen protects against UV damage, soothes, brightens, and supports the skin barrier. Lightweight, non-sticky, and absorbs for a natural glow without a white cast.',
    rating: 5.0
  },
  {
    id: 11,
    name: 'Anua Hearleaf Pore Control Cleansing Oil',
    image: 'assets/products/11.jpg',
    description: 'Cleansing Oil gently removes makeup, unclogs pores, controls sebum, and refreshes skin with avocado oil.',
    rating: 5.0
  }
  ];
}
