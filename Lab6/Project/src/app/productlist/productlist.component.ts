import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../productitem/productitem.component';
import { ProductItem } from '../productitem';


@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductsComponent {
  @Input() selectedCategory: string = 'All';
  
  productFavorite: ProductItem[] = [];
  
  productItemList: ProductItem[] = [
    {
      id: 1,
      name: 'Anua Heartleaf 77% Soothing Toner',
      images: ['assets/products/toner/1.jpg', 'assets/products/toner/1_1.jpg', 'assets/products/toner/1_2.jpg', 'assets/products/toner/1_3.jpg'],
      description: 'Moisturizing facial toner with 77% Houttuynia Cordata extract soothes, hydrates, restores balance, and gently exfoliates.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/anua-toner-heartleaf-77-soothing-toner-250-ml-113961265/?c=750000000',
      category: 'Toner',
      likes: 0
    },
    {
      id: 2,
      name: 'Dr.Althea Vitamin C Boosting Serum 63%',
      images: ['assets/products/serum/2.jpg', 'assets/products/serum/2_1.jpg', 'assets/products/serum/2_2.jpg', 'assets/products/serum/2_3.jpg'],
      description: 'Althea Vitamin C Boosting Serum protects against photoaging, boosts elasticity, brightens pigmentation, and evens skin tone.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/dr-althea-syvorotka-vitamin-c-boosting-serum-63-dlja-litsa-30-ml-128786853/?c=750000000',
      category: 'Serum',
      likes: 0
    },
    {
      id: 3,
      name: 'Dr.Althea 345 Relief Cream',
      images: ['assets/products/cream/3.jpg', 'assets/products/cream/3_1.jpg', 'assets/products/cream/3_2.jpg', 'assets/products/cream/3_3.jpg'],
      description: '345 Relief Cream with niacinamide soothes, hydrates, and supports post-acne recovery with panthenol and cactus extract.',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/dr-althea-krem-345-relief-dlja-litsa-50-ml-115616909/?c=750000000',
      category: 'Cream',
      likes: 0
    },
    {
      id: 4,
      name: 'Celimax Dual Barrier Creamy Toner',
      images: ['assets/products/toner/4.jpg', 'assets/products/toner/4_1.jpg', 'assets/products/toner/4_2.jpg', 'assets/products/toner/4_3.jpg'],
      description: 'Celimax Dual Barrier Creamy Toner hydrates, nourishes, strengthens the skin barrier, and soothes dryness and irritation.',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/celimax-toner-dual-barrier-150-ml-108098827/?c=750000000',
      category: 'Toner',
      likes: 0
    },
    {
      id: 5,
      name: 'Anua Dark Spot Correcting Serum',
      images: ['assets/products/serum/5.jpg', 'assets/products/serum/5_1.jpg', 'assets/products/serum/5_2.jpg', 'assets/products/serum/5_3.jpg'],
      description: 'Brightening serum with niacinamide and tranexamic acid targets hyperpigmentation and evens skin tone.',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/anua-syvorotka-kontsentrat-dark-spot-correcting-10-niacinamide-4-tranexamic-acid-dlja-litsa-30-ml-118426606/?c=750000000',
      category: 'Serum',
      likes: 0
    },
    {
      id: 6,
      name: 'Anua Peach 70% Niacin Serum',
      images: ['assets/products/serum/6.jpg', 'assets/products/serum/6_1.jpg', 'assets/products/serum/6_2.jpg', 'assets/products/serum/6_3.jpg'],
      description: 'Peach serum smooths, refines texture, tightens pores, controls oil, and brightens skin tone.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/anua-syvorotka-peach-70-niacin-dlja-litsa-30-ml-114423608/?c=750000000',
      category: 'Serum',
      likes: 0
    },
    {
      id: 7,
      name: 'Anua Heartleaf Quercetinol Deep Pore Cleansing Foam',
      images: ['assets/products/cleansing_foam/7.jpg', 'assets/products/cleansing_foam/7_1.jpeg', 'assets/products/cleansing_foam/7_2.jpg', 'assets/products/cleansing_foam/7_3.jpg'],
      description: 'Creamy scrub with Houttuynia leaf particles gently exfoliates, smooths skin, tightens pores, and has a refreshing eucalyptus scent.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/anua-heartleaf-quercetinol-deep-pore-cleansing-foam-penka-150-ml-114466905/?c=750000000',
      category: 'Cleansing Foam',
      likes: 0
    },
    {
      id: 8,
      name: 'Centella Probio-Cica Intensive Ampoule',
      images: ['assets/products/serum/8.jpg', 'assets/products/serum/8_1.jpg', 'assets/products/serum/8_2.jpg', 'assets/products/serum/8_3.jpg'],
      description: 'High-concentration probiotic ampoule restores, hydrates, nourishes, and provides anti-aging benefits.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/skin1004-ampul-naja-syvorotka-madagascar-centella-probio-cica-intensive-ampoule-dlja-litsa-95-ml-118889632/?c=750000000',
      category: 'Serum',
      likes: 0
    },
    {
      id: 9,
      name: 'Dr.G Red Blemish Clear Soothing Cream',
      images: ['assets/products/cream/9.jpg', 'assets/products/cream/9_1.jpg', 'assets/products/cream/9_2.jpg', 'assets/products/cream/9_3.jpg'],
      description: 'Restorative cream with 5 types of Centella balances moisture, soothes irritation, strengthens the skin barrier, and reduces redness.',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/dr-g-krem-red-blemish-clear-soothing-cream-dlja-litsa-50-ml-116155725/?c=750000000',
      category: 'Cream',
      likes: 0
    },
    {
      id: 10,
      name: 'Beauty of Joseon Relief Sun Rice Probiotic SPF50+',
      images: ['assets/products/sunscreen/10.jpg', 'assets/products/sunscreen/10_1.jpg', 'assets/products/sunscreen/10_2.jpg', 'assets/products/sunscreen/10_3.jpg'],
      description: 'Probiotic sunscreen protects against UV damage, soothes, brightens, and supports the skin barrier. Lightweight, non-sticky, and absorbs for a natural glow without a white cast.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/beauty-of-joseon-krem-relief-sun-rice-probiotics-spf50-dlja-litsa-50-ml-105587876/?c=750000000',
      category: 'Sunscreen',
      likes: 0
    },
    {
      id: 11,
      name: 'Anua Hearleaf Pore Control Cleansing Oil',
      images: ['assets/products/cleansing_oil/11.jpg', 'assets/products/cleansing_oil/11_1.jpg', 'assets/products/cleansing_oil/11_2.jpeg', 'assets/products/cleansing_oil/11_3.jpg'],
      description: 'Cleansing Oil gently removes makeup, unclogs pores, controls sebum, and refreshes skin with avocado oil.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/anua-heartleaf-pore-control-cleansing-oil-gidrofil-noe-maslo-200-ml-114393219/?c=750000000',
      category: 'Cleansing Oil',
      likes: 0
    },
    {
      id: 12,
      name: 'Round Lab 1025 Dokdo Cleansing Foam',
      images: ['assets/products/cleansing_foam/12.jpg', 'assets/products/cleansing_foam/12_1.jpg', 'assets/products/cleansing_foam/12_2.jpg', 'assets/products/cleansing_foam/12_3.jpg'],
      description: 'A gentle cleansing foam with deep-sea water removes makeup residue and microdust while hydrating the skin.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/round-lab-1025-dokdo-penka-150-ml-105850453/?c=750000000',
      category: 'Cleansing Foam',
      likes: 0
    },
    {
      id: 13,
      name: 'AXIS-Y Dark Spot Correcting Glow Serum',
      images: ['assets/products/serum/13.jpg', 'assets/products/serum/13_1.jpg', 'assets/products/serum/13_2.jpg', 'assets/products/serum/13_3.jpg'],
      description: 'This treatment targets unwanted pigmentation, brightens dark spots and post-acne marks, reduces redness and dullness, and evens out skin tone. ',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/axis-y-syvorotka-dark-spot-correcting-glow-serum-dlja-litsa-50-ml-121900236/?c=750000000',
      category: 'Serum',
      likes: 0
    },
    {
      id: 14,
      name: 'Heimish All Clean Balm',
      images: ['assets/products/balm/14.jpg', 'assets/products/balm/14_1.jpg', 'assets/products/balm/14_2.jpg', 'assets/products/balm/14_3.jpg'],
      description: 'Heimish All Clean Balm quickly dissolves even long-wearing makeup, deeply cleanses pores, removes excess sebum, and helps reduce blackheads.',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/heimish-all-clean-balm-gidrofil-nyi-scherbet-120-ml-118982371/?c=750000000',
      category: 'Balm',
      likes: 0
    },
    {
      id: 15,
      name: 'Manyo Pure Cleansing Oil',
      images: ['assets/products/cleansing_oil/15.jpg', 'assets/products/cleansing_oil/15_1.jpg', 'assets/products/cleansing_oil/15_2.jpg', 'assets/products/cleansing_oil/15_3.jpg'],
      description: 'Manyo Factory Pure Cleansing Oil gently removes makeup while nourishing the skin with a caring botanical complex.',
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/manyo-pure-gidrofil-noe-maslo-200-ml-100375672/?c=750000000',
      category: 'Cleansing Oil',
      likes: 0
    },
    {
      id: 16,
      name: 'LANEIGE Lip Sleeping Mask',
      images: ['assets/products/lip_care/16.jpg', 'assets/products/lip_care/16_1.jpg', 'assets/products/lip_care/16_2.jpg', 'assets/products/lip_care/16_3.jpg'],
      description: 'Lip Sleeping Mask EX instantly restores smoothness and softness, deeply hydrates, and prevents dryness and flaking. Its jelly-like texture and fruity aroma provide a comfortable, non-sticky feel.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/laneige-maska-lip-sleeping-mask-ex-berry-20-130637405/?c=750000000',
      category: 'Lip Care',
      likes: 0
    },
    {
      id: 17,
      name: 'Round Lab Toner Birch Juice Moisturizing 300ml',
      images: ['assets/products/toner/17.jpg', 'assets/products/toner/17_1.jpg', 'assets/products/toner/17_2.jpg'],
      description: 'Moisturizing tonic with birch sap replenishes the lack of moisture in the cells of the epidermis, normalizes the hydro-lipid balance, instantly eliminates dryness and tightness.',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/round-lab-toner-birch-juice-moisturizing-300-ml-104060780/?c=750000000',
      category: 'Toner',
      likes: 0
    },
    {
      id: 18,
      name: 'Round Lab Toner Birch Juice Moisturizing 300ml',
      images: ['assets/products/toner/18.jpg', 'assets/products/toner/18_1.jpg'],
      description: 'Moisturizing tonic with birch sap replenishes the lack of moisture in the cells of the epidermis, normalizes the hydro-lipid balance, instantly eliminates dryness and tightness.',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/round-lab-toner-birch-juice-moisturizing-300-ml-104060780/?c=750000000',
      category: 'Toner',
      likes: 0
    },
    {
      id: 19,
      name: 'Dr. Althea Amino Acid Gentle Bubble Cleanser foam',
      images: ['assets/products/cleansing_foam/19.jpg', 'assets/products/cleansing_foam/19_1.jpg'],
      description: 'The product contains bisabolol, which fights inflammation, irritation, redness, improves the condition of the skin in dermatological problems, relieves itching and flaking.',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/dr-althea-amino-acid-gentle-bubble-cleanser-penka-140-ml-101506188/?c=750000000',
      category: 'Cleansing Foam',
      likes: 0
    },
    {
      id: 20,
      name: 'Purito Cream Daily Soft Touch Sunscreen SPF50 for face',
      images: ['assets/products/sunscreen/20.jpg', 'assets/products/sunscreen/20_1.jpg'],
      description: 'This fast-absorbing, lightweight sunscreen is best suited for oily and combination skin types and provides double the protection.',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/purito-krem-daily-soft-touch-sunscreen-spf50-dlja-litsa-60-ml-109702749/?c=750000000',
      category: 'Sunscreen',
      likes: 0
    },
    {
      id: 21,
      name: 'Skin1004 Madagascar Centella Tone Brightening Tone-Up Sunscreen SPF50',
      images: ['assets/products/sunscreen/21.jpg', 'assets/products/sunscreen/21_1.jpg'],
      description: 'Madagascar Centella Tone Brightening Tone-Up Sunscreen, based on physical filters, not only protects the skin from UV radiation, but also has a brightening effect, helping to highlight the beauty of your skin.',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/skin1004-dnevnoi-krem-madagascar-centella-tone-brightening-tone-up-sunscreen-spf50-dlja-litsa-50-ml-106057233/?c=750000000',
      category: 'Sunscreen',
      likes: 0
    },
    {
      id: 22,
      name: 'Dr. Althea Pure Grinding Cleansing Balm',
      images: ['assets/products/balm/22.jpg', 'assets/products/balm/22_1.jpg'],
      description: 'Soft hydrophilic balm for cleansing the skin Dr. Althea Pure Grinding Cleansing Balm with a minimalist composition provides gentle and delicate cleansing without dryness and irritation. ',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/dr-althea-pure-grinding-cleansing-balm-bal-zam-50-ml-121221699/?c=750000000',
      category: 'Balm',
      likes: 0
    },
    {
      id: 23,
      name: 'Nivea, 2 In 1 Lip Balm & Scrub, Wild Rose',
      images: ['assets/products/lip_care/23.jpg', 'assets/products/lip_care/23_1.jpg'],
      description: 'The innovative formula, enriched with Rosehip Oil and Vitamin E, contains plant-derived particles that make your lips feel exfoliated and soft. Particles dissolve after rubbing your lips together. ',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/nivea-klubnichnoe-sijanie-bal-zam-24601804/?c=750000000',
      category: 'Lip Care',
      likes: 0
    }

    

  ];
  toggleFavorite(productId: number){
    const product = this.productItemList.find(p => p.id === productId);
    if(!product) return;

    const index = this.productFavorite.findIndex(p => p.id === productId);
    if(index !== -1){
      this.productFavorite.splice(index, 1);

    }else{
      this.productFavorite.push(product);
    }
    console.log('Updated favorites: ', this.productFavorite);

  }

  
 

  // New method to check if a product is in favorites
  isProductFavorite(productId: number): boolean {
    return this.productFavorite.some(p => p.id === productId);
  }

  get filteredProducts(): ProductItem[] {
    if (this.selectedCategory === 'All') {
      return this.productItemList;
    }
    return this.productItemList.filter(p => p.category === this.selectedCategory);
  }

  removeProductItem(productToRemove: ProductItem) {
    this.productItemList = this.productItemList.filter(p => p !== productToRemove);
  }


 
}
